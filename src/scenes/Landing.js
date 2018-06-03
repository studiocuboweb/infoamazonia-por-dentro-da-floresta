import React, { Component, Fragment } from "react";
import styled from "styled-components";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { resetContext } from "actions/context";
import { media, color } from "styles/utils";
import Countdown from "react-countdown-now";

import SiteTitle from "components/SiteTitle";
import VideoEndContent from 'components/containers/VideoEndContent';
import Menu from 'components/blocks/Menu';

import { NavLink, Link } from 'react-router-dom';
import YouTubeVideo from "components/YouTube";

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
  .video-content {
    position: absolute;
    width: 100%;
  }
  &.route-transition-enter {
    opacity: 1;
    background-color: transparent;
    .partners,
    .site-title {
      opacity: 0;
      transform: translate(0, -15px);
    }
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
    .partners,
    .site-title,
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
    .partners,
    .site-title,
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
    .partners,
    .site-title {
      opacity: 0;
      transform: translate(0, -15px);
      transition: all 250ms ease-in;
    }
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

const Top = styled.div`
  width: 100%;
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  .partners {
    position: absolute;
    top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .help-box {
      margin-right: 2rem;
      display: flex;
      justify-content: space-between;
      width: 5rem;
    }
    .partners-logo {
      align-self: end;
      img {
        width: auto;
        height: auto;
        max-height: 2vh;
        margin: 0 1rem;
        ${media.phablet`
          max-height: 5vh;
          max-width: 8vw;
        `}
        ${media.desktop`
          margin: 0 2rem;
        `};
      }
    }
  }
  h1 {
    font-size: 1.1em;
    color: #fff;
    .logo {
      margin-left: -1rem;
    }
    ${media.tablet`
      font-size: 1.2em;
    `} ${media.desktopHD`
      font-size: 1.6em;
    `};
  }
  h2 {
    white-space: nowrap;
    color: #fff;
    font-size: 0.8em;
    font-style: italic;
    font-weight: normal;
    border-top: 1px solid #fff;
    margin: 2rem 0 0;
    padding: 0.5rem 2rem;
    ${media.tablet`
      font-size: 1em;
    `} ${media.desktopHD`
      margin: 3rem 0 0;
    `};
  }
  h3 {
    font-size: 0.6em;
    font-style: italic;
    font-weight: normal;
    ${"" /* color: rgba(255,255,255,0.8); */};
  }
`;

const Spacer = styled.div`
  flex: 1 1 25%;
  .spacer-content {
    position: absolute;
    right: 0;
    padding: 1rem;
    border: 1px solid #fff;
  }
`;

const Middle = styled.div`
  width: 100%;
  .videoChapters * {
    box-sizing: border-box;
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
    font-family: "Cinzel";
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
    name: "Start",
  },
  {
    seek: 48.607915,
    name: "Capítulo 1",
  },
  {
    seek: 117.35867002098084,
    name: "2",
  },
  {
    seek: 104.4310686015831,
    name: "3",
  },
  {
    seek: 134.4310686015831,
    name: "4",
  },
  {
    seek: 144.371942,
    name: "Fim",
  }
]

const CoverImage = styled.div`
  min-height: 200px;
  background-size: cover;
  background-image: url('https://images3.alphacoders.com/853/85305.jpg')
`
class Scene extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeChapter: 0,
    ended: false,
    playing: false,
    menuOpened: false,
    startOver: false,
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
        {
          videoChapters.map((video, idx) => {
            const { name, seek } = video
            const { activeChapter } = this.state

            console.log('--active chapter', activeChapter)
            console.log('-- chapter time', video.seek)
            let active = false
            // seek: 223.35867002098084,
            // name: "4",

            // seek: 422.35867002098084,
            // name: "Fim",
            const lastChapter = typeof videoChapters[idx + 1] === 'undefined'
            const firstChapter = idx === 0

            if (!lastChapter  && !firstChapter) {
              if (videoChapters[idx - 1].seek <= seek >= activeChapter) {
                if (video.seek >= activeChapter) active = true
              }
            }

            if (firstChapter) {
              if (activeChapter <= seek && activeChapter <  videoChapters[idx + 1].seek) active = true
            }

            if (lastChapter) {
              if (activeChapter >= videoChapters[idx - 1].seek &&  activeChapter <= seek) active = true
            }


            return (
              <Link
                style={active ? { color: 'yellow'} :  {}}
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
    )
  }

  componentDidMount = () => {
    if (typeof window !== 'undefined' ) {
      window.addEventListener('resize', this.handleWindowSizeChange)
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight })
    }

    const storedData = localStorage.getItem('elapsed-time')
    if (storedData) this.setState({
      elapsedTime: true,
      activeChapter: JSON.parse(storedData).elapsedTime,
    })

    setInterval(() => {
      const storedData = localStorage.getItem('elapsed-time')
      if (storedData) this.setState({
        elapsedTime: true,
        activeChapter: JSON.parse(storedData).elapsedTime,
      })
    }, 400)
  }

  componentWillUnmount = () => clearInterval();

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { lastPath, resetContext } = this.props;
    const { chapter, ended, playing, width, height, startOver, elapsedTime } = this.state;

    return (
      <Wrapper className="scene landing">
        <div className="video-content">
          {
            playing && !ended &&
              <YouTubeVideo
                { ...this.state.playing }
                startOver={ this.state.startOver }
                chapter={chapter}
                autoplay={!elapsedTime ? true : false}
                data={{ id: "b0MjlZWd4Tk" }}
                displayVideoEnd={ this._setVideoEnd }
                preview={false}
                startTime={0}
              />
          }
          {!playing && !ended && <CoverImage style={{ height }}/>}
          {ended && !playing && <VideoEndContent data="teste de ending" />}
        </div>
        <Top>
          <div className="partners">
            <div className="partners-logo">
              <img src={require("images/partners/infoamazonia.png")} />
              <img src={require("images/partners/correo.png")} />
            </div>
            <nav className="help-box">
              <NavLink to="/about" title="Learn more">
                <span className="fa fa-info"></span>
              </NavLink>
              <NavLink to="/share" title="Share">
                <span className="fa fa-share-alt"></span>
              </NavLink>
            </nav>
          </div>
        </Top>
        <Spacer>
          {
            !playing &&
              <div className="spacer-content">
                  <button
                    onClick={ this._startOver }>
                    <span>{elapsedTime ? 'Recomeçar' : 'Iniciar'}</span>
                  </button>
              {
                elapsedTime &&
                  <button
                    onClick={ this._resumeVideo }>
                    <span>Continuar Lendo</span>
                  </button>
              }
              </div>
          }
        </Spacer>
        <Middle className="middle"  style={{ zIndex: 999 }}>
            <div className="videoChapters">
              {playing && this.renderMenu()}
            </div>
        </Middle>
      </Wrapper>
    );
  }

  _goToChapter = ({ seek }) => this.setState({ chapter: { start: seek }});

  _setVideoEnd = () => this.setState({ ended: true, playing: false });
x
  _resumeVideo = () => this.setState({ playing: true, startOver:  false })

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
