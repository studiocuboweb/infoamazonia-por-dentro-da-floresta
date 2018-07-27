import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { resetContext } from "actions/context";
import { media, color } from "styles/utils";

import SiteTitle from "components/SiteTitle";

import { Link } from "react-router-dom";

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
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(${require("images/bg-1.jpg")});
    background-size: cover;
    background-position: center;
    z-index: -1;
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
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  .partners {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: center;
    ${media.phablet`
      border-bottom: none;
      margin-bottom: 0rem;
      padding-bottom: 0rem;
   `}
    ${media.desktop`
      border-bottom: 1px solid #fff;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
    `}
    img {
      width: auto;
      height: auto;
      max-height: 2vh;
      margin: 0 1rem;
      ${media.phablet`
        max-height: 15vh;
        max-width: 18vw;
      `}
      ${media.phone`
        max-height: 30vh;
        max-width: 33vw;
      `}
      ${media.desktop`
        margin: 0 2rem;
        max-height: 15vh;
      `}
      ${media.desktopHD`
        margin: 0 2rem;
        max-height: 8vh;
      `};
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
    `}
  }
  h2 {
    white-space: nowrap;
    color: #fff;
    font-size: 0.5em;
    font-style: italic;
    font-weight: normal;
    border-top: 1px solid #fff;
    margin: 2rem 0 0;
    padding: 0.5rem 2rem;
    ${media.phablet`
      margin: 1rem 0 0;
    `}
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
  ${media.phablet`
    flex: 1 1 6%;
  `}
`;

const Middle = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  color: #fff;
  padding: 0;
  box-sizing: border-box;
  width: 95%;
  text-align: center;
  font-size: 0.8em;
  font-family: 'Merriweather', serif;
  ${media.phablet`
    width: 100%;
    padding: 0 3rem;
    font-size: 0.8em;
  `}
  .description {
    text-align: center;
    margin: 0 0 2rem;
    font-size: 1em;
    ${media.desktopHD`
      font-size: 1.2em;
    `};
    ${media.phablet`
      margin: 0 0 1rem;
    `};
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

class Scene extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { lastPath, resetContext } = this.props;
    return (
      <Wrapper className="scene landing">
        <Top>
          <div className="partners">
            <img src={require("images/partners/amazonia-real.png")} />
          </div>
          <SiteTitle />
          <h2>
            <FormattedMessage
              id="general.author"
              defaultMessage="por Vandré Fonseca e Bruno Kelly"
            />
          </h2>
          <h3>
            <FormattedMessage
              id="general.publishDate"
              defaultMessage="31 de julho de 2018"
            />
          </h3>
        </Top>
        <Spacer />
        <Middle className="middle">
          <p className="description">
            <FormattedMessage
              id="general.tagline"
              defaultMessage="O território foi formado no século 19, quando negros africanos compraram ou ganharam as terras após o fim da escravidão no Brasil. Agora enfrentam dificuldades para aderir o Cadastro Ambiental Rural (CAR)"
            />
          </p>
            <div>
              {lastPath ? (
                <div>
                  <Link to="/story" onClick={resetContext}>
                    <FormattedMessage
                      id="general.startOver"
                      defaultMessage="Começar do início"
                    />
                  </Link>
                  <Link to={lastPath}>
                    <FormattedMessage
                      id="general.continueReading"
                      defaultMessage="Continuar lendo"
                    />
                  </Link>
                </div>
              ) : (
                <Link to="/story">
                  <FormattedMessage
                    id="general.readStory"
                    defaultMessage="Leia a reportagem"
                  />
                </Link>
              )}
            </div>
        </Middle>
      </Wrapper>
    );
  }
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
