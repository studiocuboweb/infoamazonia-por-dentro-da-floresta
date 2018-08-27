import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { media, color } from 'styles/utils';
import { NavLink, Link } from 'react-router-dom';

import SiteTitle from './SiteTitle';

const Wrapper = styled.header`
  flex: 0 0 auto;
  padding: .5rem 1rem;
  background: #f3f3f3;
  .header-content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
  ${media.phablet`
    padding: 0.4rem;
    font-size: 1em;
  `}
  ${media.desktop`
    padding: 1.5vw 8vw;
  `}
  ${media.desktopHD`
    padding: 1.5vw 10vw;
  `}
  .site-title {
    flex: 1 1 100%;
    font-size: .6em;
  }
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
      max-height: 15vh;
      max-width: 18vw;
    `}
    ${media.desktop`
      margin: 0 2rem;
      max-height: 5vh;
    `}
    ${media.desktopHD`
      margin: 0 2rem;
      max-height: 5vh;
    `};
  }
  nav {
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: .8em;
    a {
      position: relative;
      color: #999;
      margin-left: 1.5rem;
      transition: all .2s ease-in-out;
      ${media.desktop`
        margin-left: 1rem;
        background: #fff;
        width: 2em;
        height: 2em;
        padding: .3em;
        border-radius: 100%;
        line-height: 2em;
        text-align: center;
        font-size: 1em;
      `}
      &.active,
      &:hover,
      &:active,
      &:focus {
        color: #111;
      }
      &.active {
        transform: scale(1.3);
      }
      .icon-info {
        background: red;
        color: white;
        position: absolute;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        top: -.5rem;
        right: -.5rem;
        display: inline-block;
        text-decoration: none;
        font-size: .5em;
        border-radius: 100%;
        font-weight: 800;
      }
    }
  }
`

class Header extends Component {
  render () {
    const { lastPath,aboutPath, sharePath } = this.props;
    return (
      <Wrapper>
        <div className="header-content">
            <div className="site-title clearfix">
                <a href="//amazoniareal.com.br/" target="_blank">
                  <img src={require("images/partners/amazonia-real.png")} />
                </a>
            </div>
          <nav>
          {
            aboutPath &&
            <NavLink to={aboutPath} title="Learn more">
              <span className="fa fa-info"></span>
            </NavLink>
          }
          {
            sharePath &&
            <NavLink to={aboutPath} title="Share">
              <span className="fa fa-share-alt"></span>
            </NavLink>
           }
          </nav>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath,
    aboutPath: state.context.aboutPath,
    sharePath: state.context.sharePath
  };
};

export default connect(mapStateToProps, null)(Header);
