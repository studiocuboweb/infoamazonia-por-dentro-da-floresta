import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import YouTube from "react-youtube";
import { media } from "styles/utils";
import { expandMedia } from "actions/media";

require('rc-slider/assets/index.css');

const Wrapper = styled.div`
  background: #000;
  // iframe {
  //   width: 100%;
  //   height: auto;
  //   min-height: 40vh;
  //   display: block;
  //   margin: 0;
  // }
  .rc-slider {
    position:absolute;
    top:650px;
  }
  #video-player {
      z-index: 0;
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%; 
      min-height: 100%;
  }
  ${media.desktop`
    // iframe {
    //   min-height: 60vh;
    // }
  `} ${props =>
      props.preview &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        // .video-container,
        // iframe {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        // }
        // .video-container {
        //   width: 300%;
        //   left: -100%;
        // }
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
    this._handleWindowClose = this._handleWindowClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.interval;

    this.state = {
      currentVideo: 0,
      position: 0,
      playing: false,
      duration: 0,
      volume: 30,
    }
  }

  setPosition(position) {
    this.node.seekTo(position)
    this.setState({position});
  }

  setDuration(duration) {
    this.setState({duration});
  }

  getDuration() {
    return this.state.duration;
  }

  componentDidMount() {
    this.props.onRef(this)
    window.addEventListener('onbeforeunload', this._handleWindowClose);
    this.interval =  setInterval(() => {
      const currentVideoState = JSON.parse(localStorage.getItem('elapsed-time'))
      this._saveVideoState(currentVideoState)
    },  3000)

    this.slideBar =  setInterval(() => {
      if (this.node) {
        this.state.position = this.node.getCurrentTime();
      }
    },  1000)
  }

  playVideo() {
    this.node.playVideo();
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
    clearInterval(this.interval)
    clearInterval(this.slideBar)
    this._saveVideoState();
    window.removeEventListener('onbeforeunload', this._handleWindowClose);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.preview && this.node) {
      if (nextProps.expanded && !this.props.expanded) {
        this.node.pauseVideo();
      } else if (!nextProps.expanded && this.props.expanded) {
        this.node.playVideo();
      }
    }

    if (nextProps.chapter) {
      const { chapter: newChapter } = nextProps;
      const { chapter: oldChapter } = this.props;
      if (newChapter) {
        if((oldChapter === undefined) || (newChapter.start !== oldChapter.start)) {
          this.node.seekTo(newChapter.start)
        }
      }
    }
  }
  
  _onReady(ev) {
    const storedData = localStorage.getItem('elapsed-time')
    const storedObject = storedData ? JSON.parse(storedData) : null
    this.node = ev.target;
    this.setDuration(this.node.getDuration());
    const { preview, playing, startOver } = this.props;

    if (playing) this.node.playVideo();
    
    if (preview) {
      ev.target.mute();
    } else {
      ev.target.unMute();
    }

    if (storedObject) {
      const restoredElapsedTime = storedObject.elapsedTime
      const restoredVideoID = storedObject.videoID
      if (restoredElapsedTime > 0 && (this.node.getVideoData().video_id === restoredVideoID)) {
        this.node.seekTo(restoredElapsedTime)
      }
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

  _handleWindowClose(ev) {
    ev.preventDefault();
    this._saveVideoState();
    ev.returnValue = "false";
  }

  render() {
    const { data, preview, displayVideoEnd, autoplay = false } = this.props;
    return (
      <Wrapper onClick={this._handleClick} preview={preview}>
        <div className="video-container" id="player-yt">
          <YouTube id="video-player"
            videoId={data.id}
            opts={{
              height: '0',
              width: '0',
              playerVars: {
                autoplay: autoplay,
                showinfo: 0,
                rel:0,
                controls:0,
                modestbranding: 1,
                wmode:'opaque'
              },
            }}
            onPlay={this._saveVideoState}
            onPause={this._saveVideoState}
            onReady={this._onReady}
            onStateChange={this._onStateChange}
            // onProgress={this.setPosition}
            onEnd={() => this._handleVideoEnding(displayVideoEnd)}
          />
        </div>
      </Wrapper>
    );
  } 

  formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    return minutes + ':' + seconds;
  }

  _saveVideoState = (currentVideoState = null) => {
    if (this.node) {
      const elapsedTime = this.node.getCurrentTime()
      const videoID = this.node.getVideoData().video_id
      const videoCached = { elapsedTime, videoID }
      if (elapsedTime > 0 && !currentVideoState) localStorage.setItem('elapsed-time', JSON.stringify(videoCached))

      if (currentVideoState && currentVideoState.elapsedTime < elapsedTime) {
        localStorage.setItem('elapsed-time', JSON.stringify(videoCached))
      }
    }
  }
  
  _handleVideoEnding = (callback) => {
    return callback()
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