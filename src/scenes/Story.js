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

const Overlay = styled.div`
  display:block;
  height:100%;
  width:100%;
  z-index: 9999;
`;

const VideoControlls = styled.div`
  div {
    padding:10px 0px;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  a {
    display:inline !important;
    padding:0px !important;
    margin:0 5px !important;
    border:none !important;
    font-size: 0.9em !important;
  }
  .video-time {
    display:inline;
    background-color: transparent !important;
  }
  .text-chapter {
    font-size:0.5em !important;
    padding-left:2vh!important;
  }
  a:hover {
    color: #ffffff !important;
  }
  a:visited {
    color: #ffffff !important;
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
  .animate.move-down {
    opacity: 0;
  }
  .animate.move-up {
    opacity: 1;
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
    seek: 0,
    name: "Início",
  },
  {
    // seek: 154,
    seek: 114,
    name: "Encontro com invasores",
  },
  {
    //seek: 554,
    seek: 314,
    name: "Dados e mapas",
  },
  {
    //seek: 700,
    seek: 420,
    name: "Preso por invadir",
  },
  {
    // seek: 1030,
    seek: 630,
    name: "Quadrilhas",
  }
]

class Scene extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeChapter: 0,
    ended: false,
    playing: true,
    duration: 0,
    menuOpened: true,
    cursor: {cursor:'none'},
    menuClass: '',
    displayChapterMenu: {display:'none'},
    arrowButtonClass: 'fa fa-arrow-up',
  }

  toogleMenu = () => {
    this.setState((prevState) => ({
      menuOpened: !prevState.menuOpened
    }))
  }

  renderMenu() {
    const { width } = this.state
    // if (isMobile && !this.state.menuOpened) {
    //   return (
    //     <Link to="#" onClick={this.toogleMenu}>
    //       <span>Menu</span>
    //     </Link>
    //   )
    // }
    return (
      <Fragment>
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

  // hideAddressBar = () => {
  //   console.log('hideAddressBar');
  //   if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
  //   document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
  //   setTimeout(window.scrollTo(1,1),0);
  // }

  componentDidMount = () => {
    //document.getElementById('video-player').scrollTo(0,10000);
    if (typeof window !== 'undefined' ) {
      this.setState({ width: window.innerWidth })
      window.addEventListener('resize', this.handleWindowSizeChange)

      // window.addEventListener("load",this.hideAddressBar());
      // window.addEventListener("orientationchange",this.hideAddressBar());
      // window.addEventListener("mousemove",this.onMouseMoveHandler.bind(this))
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
  timeout;
  onMouseMoveHandler(ev) {
    this.setState({cursor: {cursor:'default'}});
    //document.body.style.cursor = 'default';
    this.setState({menuClass: 'move-up'});
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function(){
      this.setState({cursor: {cursor:'none'}});
      this.setState({menuClass: 'move-down'});
    }.bind(this), 5000);
  }
  onTouchEndHandler(ev) {
    // this.setState({cursor: {cursor:'default'}});
    this.setState({menuClass: 'move-up'});
  }
  setAnimationTime = setTimeout(() => {
    this.setState({menuClass: 'move-down'});
    this.setState({cursor: {cursor:'none'}});
    //document.body.style.cursor = 'none';
    clearTimeout(this);
  },5000);

  render() {
    const { chapter, ended, playing, elapsedTime } = this.state;
    const { width } = this.state;
    const isMobile = width <= 470;
    return (
      <Wrapper className={"scene landing"}>
        <Header />
        <Overlay onMouseMove={this.onMouseMoveHandler.bind(this)} onClick={() => { this._toggleVideo() }} onTouchEnd={this.onTouchEndHandler.bind(this)} style={this.state.cursor} />
        {
          !isMobile &&
            <div className={"video-content "} >
              {
                !ended &&
                  <YouTubeVideo
                    onRef={ref => (this._video = ref)}
                    { ...this.state.playing }
                    chapter={chapter}
                    autoplay={!elapsedTime ? true : false}
                    data={{ id: "47ci04xmad0" }}
                    displayVideoEnd={ this._setVideoEnd }
                    preview={false}
                    playing={playing}
                    startTime={0}
                    showCaptions={true}
                  />
              }
            </div>
        }
        {
          isMobile &&
            <div className={"video-content "} style={{textAlign:'center'}}>
            {
            !ended &&
              <p style={{padding:'30px',width:'60%',margin:'0 auto'}}><img src={require("images/phone_landscape.svg")} />Gire o celular na horizontal para ver o vídeo.</p>
            }
            </div>
        }
        {ended && !playing && <VideoEndContent data="" />}
        <Middle onTouchEnd={this.onTouchEndHandler.bind(this)} onMouseMove={this.onMouseMoveHandler.bind(this)} className="middle video-menu"  style={{ zIndex: 999 }}>
          <div className={'animate ' + this.state.menuClass}>
          {
            !ended && this._video &&
              <Rcslider style={{ zIndex: 9999 }}
                range={false}
                max={this._video.state.duration}
                value={this._video.state.position}
                onChange={position => {  this._video.getDuration() && this._video.setPosition(position)}}
                onRangeClick={position => { this._video.getDuration() && this._video.setPosition(position)}}
              />
          }
          {
            !ended && this._video &&
            <VideoControlls>
              <div style={{width:'75%',margin:'0',float:'left',display:'block'}}>
              {
                !playing &&
                <Link
                  to="#"
                  onClick={() => this._resumeVideo()}>
                  <span className="fa fa-play"></span>
                </Link>
              }
              {
                playing &&
                <Link
                  to="#"
                  onClick={() => this._pauseVideo()}>
                  <span className="fa fa-pause"></span>
                </Link>
              }
                <div className="video-time">
                  {this._video.formatTime(Math.round(this._video.state.position))} / {this._video.formatTime(this._video.state.duration)}
                </div>
                <Link
                  to="#"
                  onClick={() => this._openChaptersMenu()} className="text-chapter">
                  <span><img src={require("images/chapters_icon.png")} style={{width:'20px'}}/></span> Capítulos <span className={this.state.arrowButtonClass}></span>
                </Link>
              </div>
              <div style={{width:'25%',display:'block',float:'left',margin:'0',textAlign:'right'}}>
                <Link
                  to="#"
                  onClick={() => this._fullScreenVideo()}>
                  <span><img src={require("images/fullscreen.svg")} style={{width:'20px'}}/></span>
                </Link>
              </div>
            </VideoControlls>
          }
          {
            !ended && this._video &&
            <div className="videoChapters" style={this.state.displayChapterMenu}>
              {this.renderMenu()}
            </div>
          }
          </div>
        </Middle>
      </Wrapper>
    );
  }

  _fullScreenVideo = () => {
    var elem = document.getElementById("video-player");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

  _goToChapter = ({ seek }) => {
    this.setState({ chapter: { start: seek }})
  };

  _setVideoEnd = () => this.setState({ ended: true, playing: false });

  //_resumeVideo = () => this.setState({ playing: true, startOver:  false })
  _toggleVideo = () => {
    if (this.state.playing) {
      this._video.node.pauseVideo();
      this.setState({playing: false});
    } else {
      this._video.node.playVideo();
      this.setState({playing: true});
    }
  }
  _resumeVideo = () => {
    if (this._video !== undefined) {
      if (this._video.node !== undefined) {
        this._video.node.playVideo();
      }
    }
    this.setState({playing: true});
    //console.log(this.state.playing);
  }

  _pauseVideo = () => {
    this._video.node.pauseVideo();
    this.setState({playing: false});
    //console.log(this.state.playing);
  }

  _openChaptersMenu = () => {
    if (this.state.arrowButtonClass == 'fa fa-arrow-up') {
      this.setState({displayChapterMenu: {display:'flex'}})
      this.setState({arrowButtonClass: 'fa fa-arrow-down'})
    } else {
      this.setState({displayChapterMenu: {display:'none'}})
      this.setState({arrowButtonClass: 'fa fa-arrow-up'})
    }
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
