import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  position: relative;
  margin-right: .5rem;
  .fa {
    font-size: .6em;
    margin-left: .25rem;
    position: relative;
    z-index: 1;
    color: #999;
    background: #fff;
  }
  .lang-label {
    font-size: .6em;
    text-transform: uppercase;
    color: #999;
    position: absolute;
    right: -1em;
    font-weight: 600;
    bottom: 1.2em;
    line-height: 1;
    box-shadow: 0 0 .2rem rgba(0,0,0,0.1);
    padding: .2rem;
    border-radius: 3px;
    font-family: sans-serif;
  }
  &:hover,
  &:active,
  &:focus {
    .lang-label,
    .fa {
      color: #333;

    }
  }
`;

class ExternalLink extends Component {
  render () {
    const { href, language } = this.props;
    return (
      <Wrapper href={href} rel="external" target="_blank">
        {this.props.children}
        <span className="fa fa-external-link-square">
          {language ? (
            <span className="lang-label">{language}</span>
          ) : null}
        </span>
      </Wrapper>
    )
  }
}

export default ExternalLink;
