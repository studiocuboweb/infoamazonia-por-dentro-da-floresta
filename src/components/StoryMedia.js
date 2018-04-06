import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { updateMedia, removeMedia } from "actions/media";

import { connect } from "react-redux";

const Wrapper = styled.span`
  border-bottom: 2px solid #f0f0f0;
  transition: all 0.5s ease-in-out;
  line-height: 1.5;
  position: relative;
  padding: 0.13em 0 0.13em 0.13em;
  .fa {
    display: inline-block;
    line-height: 3;
    padding: 0 0.5em;
    margin: 0 2px 0 0.5em;
    font-size: 0.5em;
    color: #999;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }
  ${props =>
    props.active &&
    css`
      border-color: rgb(255, 255, 180);
      background: rgb(255, 255, 180);
      .fa {
        color: #333;
      }
    `};
`;

class StoryMedia extends Component {
  constructor(props) {
    super(props);
    this._getMediaId = this._getMediaId.bind(this);
    this._updateMedia = this._updateMedia.bind(this);
    this._getIcon = this._getIcon.bind(this);
  }
  componentDidMount() {
    this.node = findDOMNode(this);
    // Wait transition
    setTimeout(() => {
      this._updateMedia();
      if (twttr) twttr.events.bind("rendered", this._updateMedia);
    }, 600);
  }
  componentWillUnmount() {
    if (twttr) twttr.events.unbind("rendered", this._updateMedia);
  }
  _getMediaId(media) {
    const { pathname } = this.props;
    return `${pathname}/${media.id}`.replace(/\//g, "-");
  }
  _getStoryOffset(props) {
    props = props || this.props;
    const { pathname, storyScroll } = props;
    return storyScroll[pathname] || 0;
  }
  _updateMedia() {
    const { media, library, updateMedia, pathname } = this.props;
    const inLibrary = library[this._getMediaId(media)];
    const rect = this.node.getBoundingClientRect();
    if (
      !inLibrary ||
      Math.floor(rect.top) != Math.floor(inLibrary.rect.top || 0)
    ) {
      updateMedia({
        ...media,
        icon: this._getIcon(),
        pathname,
        rect,
        offset: this._getStoryOffset(this.props),
        id: this._getMediaId(media)
      });
    }
  }
  _getIcon() {
    const { media } = this.props;
    let { icon } = this.props;
    if (icon) return icon;
    switch (media.type) {
      case "map": {
        icon = "map";
        break;
      }
      case "vr": {
        icon = "binoculars";
        break;
      }
      case "video":
      case "youtube": {
        icon = "play";
        break;
      }
      case "gallery":
      case "image": {
        icon = "image";
        break;
      }
    }
    return icon;
  }
  render() {
    const { activeMedia, media } = this.props;
    const id = this._getMediaId(media);
    const active = activeMedia.id == id;
    return (
      <Wrapper active={active}>
        {this.props.children}
        <span className={`fa fa-${this._getIcon()}`} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyScroll: state.context.storyScroll,
    pathname: state.router.location.pathname,
    activeMedia: state.media,
    library: state.mediaLibrary
  };
};

const mapDispatchToProps = {
  updateMedia,
  removeMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryMedia);
