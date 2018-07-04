import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { resetContext } from "actions/context";
import { media, color } from "styles/utils";

import VideoEndContent from 'components/containers/VideoEndContent';
import Header from 'components/Header';

import { NavLink, Link } from 'react-router-dom';
import YouTubeVideo from "components/YouTube";

import Rcslider from "rc-slider";


const launchDate = process.env.LAUNCH_DATE;

const Wrapper = styled.section`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
  box-sizing: border-box;
  text-shadow: 0 0 2px #000;
  color: #fff;
  .no-cursor {
    cursor:none;
  }
  #video-ended {
    z-index:99;
    border:1px red solid;
  }
  .video-content {
    position: absolute;
    width: 100%;
    z-index:10;
  }
  &.route-transition-enter {
    opacity: 1;
    background-color: transparent;
    .middle {
      opacity: 0;
      transform: translate(0, 15px);
    }
    &:before,
    h2,
    h3,
    a {
      opacity: 0;
    }
  }
  &.route-transition-enter.route-transition-enter-active {
    opacity: 1;
    transition: all 250ms ease-in;
    z-index: 9999;
    background-color: #000;
    &:before,
    .middle,
    h2,
    h3,
    a {
      opacity: 1;
      transform: translate(0, 0);
      transition: all 250ms ease-in;
    }
  }
  &.route-transition-exit {
    opacity: 1;
    background-color: #000;
    &:before,
    .middle,
    h2,
    h3,
    a {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  &.route-transition-exit.route-transition-exit-active {
    opacity: 1;
    transition: all 800ms ease-in;
    background-color: transparent;
    .middle {
      opacity: 0;
      transform: translate(0, 15px);
      transition: all 250ms ease-in;
    }
    &:before,
    h2,
    h3,
    a {
      opacity: 0;
      transition: all 250ms ease-in;
    }
  }
`;

const Spacer = styled.div`
  flex: 1 1 25%;
  .spacer-content {
    position: absolute;
    right: 0;
    padding: 1rem;
  }
  a {
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    margin: -1px -1px 0 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.4) !important;
`;

const Middle = styled.div`
  width: 100%;
  .animate {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  .animate.move {
    bottom: 100%;
    margin-bottom: -50px; /*.animate width*/
  }
  .titleVideoChapters {
    display: block;
    width: 100%;
    border:1px solid white;
    font-size:0.6em;
    text-align:center;
    padding:10px 0;
  }
  .videoChapters * {
    box-sizing: border-box;
    background-color:rgba(0, 0, 0,  .7) !important;
  }
  .videoChapters {
    display: block;
    width: 100%;
    a {
      width: 100%;
      display: block;
    }
    ${media.tablet`
      display: flex;
    `}
  }
  ${media.phablet`
    padding: 0 3rem;
    font-size: 1em;
  `}
  .description {
    text-align: center;
    margin: 0 0 2rem;
    font-size: 1em;
    ${media.desktopHD`
      font-size: 1.2em;
    `};
  }
  .countdown {
    display: inline-block;
    background: #333;
    color: #f0f0f0;
    text-shadow: 0 0 0;
    padding: 1rem 2rem;
    font-size: 0.6em;
    span {
      display: block;
    }
    .count {
      font-family: monospace;
      font-size: 2em;
    }
  }
  a {
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    margin: -1px -1px 0 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;

const videoChapters = [
  {
    seek: 48.607915,
    name: "Lorem ipsum",
  },
  {
    seek: 117.35867002098084,
    name: "Dolor Sit amet",
  },
  {
    seek: 124.4310686015831,
    name: "Consectetur adipiscing elit",
  },
  {
    seek: 134.4310686015831,
    name: "Sed do",
  },
  {
    seek: 144.371942,
    name: "Sunt in culpa",
  }
]

class Scene extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMout Story')

  }

  state = {
    activeChapter: 0,
    ended: false,
    playing: true,
    duration: 0,
    menuOpened: true,
  }

  toogleMenu = () => {
    this.setState((prevState) => ({
      menuOpened: !prevState.menuOpened
    }))
  }

  renderMenu() {
    const { width } = this.state
    const isMobile = width <= 320

    if (isMobile && !this.state.menuOpened) {
      return (
        <Link to="#" onClick={this.toogleMenu}>
          <span>Menu</span>
        </Link>
      )
    }
    return (
      <Fragment>
        <Link
          to="#"
          onClick={() => this._resumeVideo()}>
          <span className="fa fa-play"></span>
        </Link>        
        <Link
          to="#"
          onClick={() => this._pauseVideo()}>
          <span className="fa fa-pause"></span>
        </Link>   
        <Link
          to="#">
          <span>Capítulos: </span>
        </Link>   
        <Fragment>     
          {
            videoChapters.map((video, idx) => {
              const { name, seek } = video
              const { activeChapter } = this.state

              return (
                <Link
                  style={activeChapter === idx ? { color: 'yellow'} :  {}}
                  key={`${name}-${seek}`}
                  to="#"
                  onClick={() => this._goToChapter(video)}>
                  <span>{name}</span>
                </Link>
              )
            })
          }
          {
            isMobile &&
            <Link to="#" onClick={this.toogleMenu}>
              <span>Fechar Menu</span>
            </Link>
          }
        </Fragment>
      </Fragment>
    )
  }

  searchActiveChapter = (obj, actualTime) => {
    let i = -1
    obj.forEach((chapter, index) => {
      if(chapter && obj[index + 1]) {
        if (chapter.seek < actualTime && obj[index + 1].seek >= actualTime) {
          i = index;
        }
      } else {
        return index;
      }
    })
    return i
  }

  componentDidMount = () => {
    if (typeof window !== 'undefined' ) {
      window.addEventListener('resize', this.handleWindowSizeChange)
      // this.setState({
      //   width: window.innerWidth,
      //   height: window.innerHeight })
    }
    setInterval(() => {
      const storedData = localStorage.getItem('elapsed-time')
      if (storedData) {
        const activeChapter = JSON.parse(storedData).elapsedTime
        
        if (activeChapter) this.setState({
          elapsedTime: true,
          activeChapter: this.searchActiveChapter(videoChapters, activeChapter),
        })
      }
    }, 400)
  }

  componentWillUnmount = () => clearInterval();

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
  animationClass = ["animate"];
  togglePointerClass = {cursor:'auto'};
  onMouseMoveHandler(ev) {
    console.log('onMouseMoveHandler');
    ev.togglePointerClass = {cursor:'auto'}
    console.log(ev.togglePointerClass);
  };
  setAnimationTime = setTimeout(() => { 
    this.animationClass.push(" move");
    this.togglePointerClass = {cursor:'none'};
    clearTimeout(this);
  },100);
  render() {
    const { chapter, ended, playing, elapsedTime } = this.state;
    return (
      <Wrapper className={"scene landing"} style={this.togglePointerClass} onMouseMove={this.onMouseMoveHandler(this)}>
        <div className={"video-content "}>
          {
            playing && !ended &&
              <YouTubeVideo
                onRef={ref => (this._video = ref)}
                { ...this.state.playing }
                chapter={chapter}
                autoplay={!elapsedTime ? true : false}
                data={{ id: "b0MjlZWd4Tk" }}
                displayVideoEnd={ this._setVideoEnd }
                preview={false}
                playing={playing}
                startTime={0}
              />
          }
        </div>
        <Header />
        {ended && !playing && <VideoEndContent data="" />}
        <Middle className="middle video-menu"  style={{ zIndex: 999 }}>
          <div className={this.animationClass.join('' )}>
          {
            playing && !ended && this._video &&
            <div>
              {this._video.formatTime(Math.round(this._video.state.position))} / {this._video.formatTime(this._video.state.duration)}
            </div>
          }
          {
            playing && !ended && this._video &&
              <Rcslider style={{ zIndex: 9999 }}
                range={false}
                max={this._video.state.duration}
                value={this._video.state.position}
                onChange={position => {  this._video.getDuration() && this._video.setPosition(position)}}
                onRangeClick={position => { this._video.getDuration() && this._video.setPosition(position)}}
              />
          }
          {
            playing && !ended && this._video &&
            <div className="videoChapters" style={{ zIndex: 99 }}>
              {playing && this.renderMenu()}
            </div>
          }
          </div>
        </Middle>
      </Wrapper>
    );
  }

  _goToChapter = ({ seek }) => this.setState({ chapter: { start: seek }});

  _setVideoEnd = () => this.setState({ ended: true, playing: false });

  //_resumeVideo = () => this.setState({ playing: true, startOver:  false })
  _resumeVideo = () => {
    this._video.node.playVideo();
    //console.log(this.state.playing);
  }

  _pauseVideo = () => {
    this._video.node.pauseVideo();
    //console.log(this.state.playing);
  }

  _startOver = () => this.setState({ startOver: true,  playing: true })
}



const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

const mapDispatchToProps = {
  resetContext
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);