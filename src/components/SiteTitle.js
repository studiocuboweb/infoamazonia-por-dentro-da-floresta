import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { media, color } from 'styles/utils';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: .8em;
  line-height: 1;
  font-family: 'Merriweather', serif;
  color: #111;
  font-weight: normal;
  .logo {
    border-radius: 100%;
    float: left;
    margin-right: -.5em;
    width: 1.65em;
    margin-top: -.1em;
  }
  a {
    color: inherit;
    &:hover,
    &:active,
    &:focus {
      color: inherit;
    }
  }
  ${media.desktop`
    font-size: 1.4em;
  `}
  img {
    width: 100%;
    height: auto;
    ${media.tablet`
      margin-right: 2vw;
    `}
  }
  .title-text {
    float: left;
  }
  .title-item {
    display: inline-block;
    padding-right: .25em;
    font-size: .8em;
    white-space: nowrap;
    &.title-1 {
      font-size: .75em;
      padding-left: .75em;
    }
    &.title-2 {
      font-size: .5em;
    }
    &.title-3 {
      display: block;
      letter-spacing: -.03em;
      font-size: 1.6em;
      font-weight: 700;
      margin-top:55px;
      padding: 0;
      ${media.phone`
        font-size: 1em;
        margin-top:5px;
        white-space: normal;
        text-align:center;
        padding:0 16px;
        line-height: 1.4;
      `}
      ${media.phablet`
        font-size: 1.4em;
        margin-top:45px;
        white-space: normal;
        text-align:center;
        padding:0 16px;
        line-height: 1.4;
      `}
    }
  }
`

class SiteTitle extends Component {
  render () {
    const { props } = this;
    const logoIndex = props.logo || 0;
    return (
      <div className="site-title clearfix">
        <Title {...props}>
          <Link to="/">
            <span className="title-text">
              <span className="title-item title-3">
                <FormattedMessage
                  id="general.siteTitle3"
                  defaultMessage="BR 319: Bem-Vindo à Realidade" />
              </span>
            </span>
          </Link>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
