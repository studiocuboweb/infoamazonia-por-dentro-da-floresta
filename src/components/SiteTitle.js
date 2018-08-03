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
  text-align: center;
  .logo {
    border-radius: 100%;
    float: left;
    margin-right: 1.5em;
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
    padding: 0;
    font-size: .8em;
    white-space: nowrap;
    &.title-1 {
      font-size: .8em;
      font-weight: 700;
      letter-spacing: -.03em;
    }
    &.title-2 {
      font-size: .3em;
    }
    &.title-3 {
      display: block;
      letter-spacing: -.03em;
      font-size: 0.54em;
      font-weight: 700;
      padding: 0;
      line-height: 2;
      ${media.tablet`
      font-size: .8em;
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
              <span className="title-item title-1">
                <FormattedMessage
                  id="general.siteTitle1"
                  defaultMessage="A luta dos herdeiros de" />
              </span>
              <span className="title-item title-3">
                <FormattedMessage
                  id="general.siteTitle3"
                  defaultMessage="Mata Cavalo pelo título do quilombo" />
              </span>
            </span>
          </Link>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
