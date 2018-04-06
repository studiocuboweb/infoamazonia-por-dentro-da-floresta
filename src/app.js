import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { withRouter, Route, Link, Switch } from "react-router-dom";

import Head from "components/Head";

import Landing from "scenes/Landing";
import Story from "scenes/Story";
import About from "scenes/About";
import Share from "scenes/Share";

import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "styles/global.css";

window.prerenderReady = false;

class Application extends Component {
  componentDidMount() {
    setTimeout(function() {
      window.prerenderReady = true;
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(function() {
      window.prerenderReady = true;
    }, 1000);
  }
  render() {
    const { location, match } = this.props;
    let key = 0;
    if (location.pathname == "/") {
      key = 1;
    }
    return (
      <div>
        <Head />
        <TransitionGroup>
          <CSSTransition key={key} classNames="route-transition" timeout={800}>
            <Switch location={location}>
              <Route exact path="/" component={Landing} />
              <Route path="/story" component={Story} />
              <Route exact path="/about" component={About} />
              <Route exact path="/share" component={Share} />
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
      </div>
    );
  }
}

export default withRouter(Application);
