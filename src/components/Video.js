import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { expandMedia } from "actions/media";

const Wrapper = styled.div`
  background: #000;
  video {
    width: 100%;
    height: auto;
    display: block;
    margin: 0;
  }
  ${props =>
    props.preview &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        transform: translateX(-50%) translateY(-50%);
        width: auto;
        height: auto;
      }
      .play {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.5);
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
    `};
`;

class Video extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.preview) {
      if (nextProps.expanded && !this.props.expanded) {
        this.node.pause();
      } else if (!nextProps.expanded && this.props.expanded) {
        this.node.play();
      }
    }
  }
  handleClick(ev) {
    if (!this.props.expanded && this.props.preview) {
      this.props.expandMedia(true);
    }
  }
  render() {
    const { data, preview } = this.props;
    return (
      <Wrapper onClick={this.handleClick} preview={preview}>
        <video
          ref={node => {
            this.node = node;
          }}
          autoPlay
          loop={preview}
          muted={preview}
          controls={!preview}
          src={data.sources[0]}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Video);
