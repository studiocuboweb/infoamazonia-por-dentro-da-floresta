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
  .size {
    font-size: .4em;
    color: #999;
    margin-left: .25rem;
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
    const { href, size, format } = this.props;
    let icon;
    switch(format) {
      case 'pdf' : {
        icon = 'file-pdf-o';
        break;
      }
      case 'zip' : {
        icon = 'file-zip-o';
      }
      default : {
        icon = 'file-o';
        break;
      }
    }
    return (
      <Wrapper href={href} rel="external" target="_blank">
        {this.props.children}
        <span className={`fa fa-${icon}`} />
        {size ? (
          <span className="size">{size}</span>
        ) : null}
      </Wrapper>
    )
  }
}

export default ExternalLink;
