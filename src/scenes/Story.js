import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Redirect, Route, Link, Switch } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";

import { expandMedia } from "actions/media";

import swipe from "utils/swipe";

import Page from "components/Page";

import Media from "components/Media";
import Story from "components/Story";
import Modal from "components/Modal";
import Parallax from "components/Parallax";

import Introduction from "./articles/Introduction";

const articles = [
  "/story",
];

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      entering: false
    };
    this.nextArticle = this.nextArticle.bind(this);
    this.onStoryEnter = this.onStoryEnter.bind(this);
    this.onStoryEntered = this.onStoryEntered.bind(this);
    this.unexpand = this.unexpand.bind(this);
    this.enableNextChapter = false;
  }
  componentDidMount() {
    this.removeSwipeListeners = swipe(findDOMNode(this), direction => {
      this.nextArticle(direction);
    });
    if (twttr) twttr.widgets.load();
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (
      (!prevProps.location.pathname ||
        location.pathname !== prevProps.location.pathname) &&
      twttr
    ) {
      twttr.widgets.load();
    }
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
    }
  }
  componentWillUnmount() {
    if (this.removeSwipeListeners) {
      this.removeSwipeListeners();
      this.removeSwipeListeners = undefined;
    }
  }
  isLastArticle() {
    const { location } = this.props;
    const idx = articles.findIndex(article => {
      return location.pathname == article;
    });
    if (idx == articles.length - 1) return true;
    return false;
  }
  nextArticle(direction) {
    direction = direction || "left";
    const { location } = this.props;
    const idx = articles.findIndex(article => {
      return location.pathname == article;
    });
    if (direction == "left" && idx < articles.length - 1) {
      this.setState({
        redirect: articles[idx + 1]
      });
    } else if (direction == "right" && idx > 0) {
      this.setState({
        redirect: articles[idx - 1]
      });
    }
  }
  onStoryEnter() {
    this.setState({
      entering: true
    });
  }
  onStoryEntered() {
    this.setState({
      entering: false
    });
  }
  unexpand() {
    this.props.expandMedia(false);
  }
  render() {
    const { redirect, entering } = this.state;
    const { location, match, media } = this.props;
    return (
      <Page>
        <Helmet>
          <meta property="og:type" content="article" />
        </Helmet>
        <Story className="content">
          <Parallax>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="pages-transition"
                timeout={600}
                onEnter={this.onStoryEnter}
                onEntered={this.onStoryEntered}
              >
                <Switch location={location}>
                  <Route exact path={`${match.url}`} component={Introduction} />
                  <Route
                    render={() => (
                      <Helmet>
                        <meta name="prerender-status-code" content="404" />
                      </Helmet>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            {redirect &&
              redirect !== location.pathname && <Redirect to={redirect} />}
            <div className='background'>
              <Media media={media} />
            </div>
          </Parallax>
        </Story>
        <Media media={media} preview={true} parallax={false} />
        {media.expanded && (
          <Modal close={this.unexpand}>
            <Media media={media} preview={false} />
          </Modal>
        )}
        </Page>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    media: state.media
  };
};

const mapDispatchToProps = {
  expandMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
