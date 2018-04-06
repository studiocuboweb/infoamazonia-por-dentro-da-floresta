import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import YouTube from "react-youtube";
import { media } from "styles/utils";
import { expandMedia } from "actions/media";

const Wrapper = styled.div`
  background: #000;
  iframe {
    width: 100%;
    height: auto;
    min-height: 40vh;
    display: block;
    margin: 0;
  }
  ${media.desktop`
    iframe {
      min-height: 60vh;
    }
  `} ${props =>
      props.preview &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        .video-container,
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .video-container {
          width: 300%;
          left: -100%;
        }
      `} .play {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 3em;
    text-align: center;
    transition: all 0.4s ease-in-out;
    opacity: 1;
    .fa {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -1.5rem;
      margin-left: -1.5rem;
      text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    }
  }
  &:hover {
    .play {
      opacity: 1;
    }
  }
`;

class YouTubeVideo extends Component {
  constructor(props) {
    super(props);
    this._onReady = this._onReady.bind(this);
    this._onStateChange = this._onStateChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.preview && this.node) {
      if (nextProps.expanded && !this.props.expanded) {
        this.node.pauseVideo();
      } else if (!nextProps.expanded && this.props.expanded) {
        this.node.playVideo();
      }
    }
  }
  _onReady(ev) {
    this.node = ev.target;
    const { preview } = this.props;
    if (preview) {
      ev.target.mute();
    } else {
      ev.target.unMute();
      ev.target.seekTo(0);
    }
  }
  _onStateChange(ev) {
    const { preview } = this.props;
    if (preview && ev.data === 0) {
      ev.target.playVideo();
    }
  }
  _handleClick(ev) {
    if (!this.props.expanded && this.props.preview) {
      this.props.expandMedia(true);
    }
  }
  render() {
    const { data, preview } = this.props;
    let playerVars = {
      showinfo: 0,
      rel: 0,
      autoplay: 1
    };
    if (preview) {
      Object.assign(playerVars, {
        controls: 0,
        loop: 1
      });
    }
    return (
      <Wrapper onClick={this._handleClick} preview={preview}>
        <div className="video-container">
          <YouTube
            videoId={data.id}
            opts={{
              playerVars
            }}
            onReady={this._onReady}
            onStateChange={this._onStateChange}
          />
        </div>
        {preview ? (
          <a href="javascript:void(0);" className="play">
            <span className="fa fa-play" />
          </a>
        ) : null}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.media.expanded
  };
};

const mapDispatchToProps = {
  expandMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(YouTubeVideo);
