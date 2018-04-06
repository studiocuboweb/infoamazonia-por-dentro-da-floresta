import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { media } from "styles/utils";
import debounce from "utils/debounce";
import throttle from "utils/throttle";
import { updateContext } from "actions/context";
import { setMedia } from "actions/media";

const MediaReference = styled.div`
  display: none;
  position: absolute;
  background: #eee;
  top: 0;
  right: -15px;
  margin-top: 0;
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  transition top .5s linear;
  ${media.desktop`
    display: block;
  `}
`;

class Story extends Component {
  static defaultProps = {
    mediaLibrary: {}
  };
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.updateScrollHeight = this.updateScrollHeight.bind(this);
  }
  componentDidMount() {
    this.node = findDOMNode(this);
    this.rect = this.node.getBoundingClientRect();
    this.refTop = 0;
    this.pathname = this.props.location.pathname;
    this.setScroll(this.props);
    if (twttr) {
      twttr.events.bind("rendered", this.handleScroll);
      twttr.events.bind("rendered", this.handleResize);
    }
    this.node.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    setTimeout(() => {
      this.detectMedia(true);
    }, 800);
  }
  componentWillUnmount() {
    if (twttr) {
      twttr.events.unbind("rendered", this.handleScroll);
      twttr.events.unbind("rendered", this.handleResize);
    }
    this.node.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }
  componentWillReceiveProps(nextProps) {
    const path = nextProps.location.pathname;
    const scroll = nextProps.storyScroll[path];
    if (this.pathname !== path) {
      this.pathname = path;
      // Wait leave story animation
      setTimeout(() => {
        this.setScroll(nextProps);
      }, 150);
      // Wait library update
      setTimeout(() => {
        this.detectMedia(true);
      }, 750);
    }
  }
  _getMediaMiddleRatio(mediaRect = {}, offset = 0) {
    return (
      this.rect.height / 2 +
      (this.rect.top + this.node.scrollTop) +
      (-mediaRect.top - offset)
    );
  }
  _getPathMediaClosestToMiddle() {
    const { mediaLibrary, setMedia, location } = this.props;
    let media, diff;
    if (location.pathname) {
      const mediaArray = Object.values(mediaLibrary).filter(
        m => m.pathname == location.pathname
      );
      media = mediaArray[0];
      if (mediaArray.length) {
        if (mediaArray.length > 1) {
          diff = Math.abs(this._getMediaMiddleRatio(media.rect, media.offset));
          for (let i = 0; i < mediaArray.length; i++) {
            let newDiff = Math.abs(
              this._getMediaMiddleRatio(
                mediaArray[i].rect,
                mediaArray[i].offset
              )
            );
            if (newDiff < diff) {
              diff = newDiff;
              media = mediaArray[i];
            }
          }
        }
      }
    }
    return {
      media,
      ratio: diff
    };
  }
  detectMedia(force = false) {
    // Do not detect media while expanded
    if (this.props.media.expanded) return false;
    const { setMedia } = this.props;
    const media = this._getPathMediaClosestToMiddle();
    if (media.media !== undefined) {
      this.refTop = media.media.rect.top + media.media.offset - this.rect.top;
      if (
        !this.props.media.id ||
        (this.props.media.id !== media.media.id &&
          (force || (media.ratio <= 200 || this.node.scrollTop <= 10)))
      ) {
        setMedia(media.media);
      }
    } else if (
      this.props.media &&
      this.props.media.id &&
      media.media == undefined
    ) {
      this.refTop = 0;
      setMedia();
    }
  }
  setScroll(props) {
    this.node.scrollTop = props.storyScroll[props.location.pathname] || 0;
  }
  updateScrollHeight = throttle(() => {
    const { location, storyScroll, storyHeight, updateContext } = this.props;
    const path = location.pathname;
    const scrollTop = this.node.scrollTop;
    const height = this.node.scrollHeight - this.node.offsetHeight;

    if (storyScroll[path] !== scrollTop) {
      let scrollState = {};
      scrollState[location.pathname] = scrollTop;
      updateContext("storyScroll", scrollState);
    }

    if (storyHeight[path] !== height) {
      let heightState = {};
      heightState[location.pathname] = height;
      updateContext("storyHeight", heightState);
    }
  }, 300);
  handleScroll = throttle(() => {
    this.detectMedia();
    this.updateScrollHeight();
  }, 200);
  handleResize = throttle(() => {
    this.updateScrollHeight();
    this.rect = this.node.getBoundingClientRect();
  }, 200);
  render() {
    const { id, className } = this.props;
    return (
      <div id={id} className={className}>
        {this.props.children}
        {this.refTop ? (
          <MediaReference
            ref={node => {
              this.mediaRef = node;
            }}
            style={{
              top: this.refTop + "px"
            }}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyScroll: state.context.storyScroll,
    storyHeight: state.context.storyHeight,
    media: state.media,
    mediaLibrary: state.mediaLibrary
  };
};

const mapDispatchToProps = {
  updateContext,
  setMedia
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Story));
