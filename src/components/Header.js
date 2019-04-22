import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';
import { NavLink, Link } from 'react-router-dom';

import SiteTitle from './SiteTitle';

const Top = styled.div`
  z-index: 2;
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:999999999;
  .partners {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    padding-top: 1rem;
    justify-content: space-between;
    // background-color: #000;
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
        max-height: 15vh;
        max-width: 18vw;
        `}
        ${media.phone`
          max-height: 19vh;
          max-width: 22vw;
        `}
        ${media.desktop`
          margin: 0 2rem;
          max-height: 5vh;
        `}
        ${media.desktopHD`
          margin: 0 2rem;
          max-height: 7vh;
        `};
      }
    }
  }
  .color-white {
    color:#fff !important;
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

class Header extends Component {
  render () {
    return (
      <Top>
      <div className="partners">
        <div className="partners-logo">
          <a href="//infoamazonia.org/" target="_blank">
            <img src={require("images/partners/infoamazonia.png")} />
          </a>
        </div>
        <nav className="help-box">
          <NavLink to="/about" className="color-white" title="Sobre este trabalho">
            <span className="fa fa-info"></span>
          </NavLink>
          <NavLink to="/share" className="color-white" title="Compartilhe">
            <span className="fa fa-share-alt"></span>
          </NavLink>
        </nav>
      </div>
    </Top>
    )
  }
}


export default Header;
