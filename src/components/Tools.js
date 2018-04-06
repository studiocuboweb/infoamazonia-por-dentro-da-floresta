import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.aside`
  padding: 1rem;
  text-align: right;
  span {
    margin: 0 1rem 0 0;
    color: #bbb;
  }
  ${media.phablet`
    padding: 1rem 10vw;
  `}
  ${media.tablet`
    padding: 1rem 15vw;
  `}
  ${media.desktop`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    padding: 2rem;
    font-size: 1em;
    text-align: center;
    margin-bottom: 4rem;
    div {
      flex-grow: 1;
    }
    span {
      margin: 2rem 0 0;
    }
  `}
`

class Tools extends Component {
  render () {
    return (
      <Wrapper>
        <div></div>
        <span className="fa fa-map-o"></span>
        <span className="fa fa-bullseye"></span>
        <span className="fa fa-download"></span>
      </Wrapper>
    )
  }
}

export default Tools;
