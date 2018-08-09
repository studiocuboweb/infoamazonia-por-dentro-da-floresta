import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  transition: all .5s ease-in-out;
  font-size: .8em;
  position: relative;
  margin: 0;
  padding: 0;
  ${media.desktop`
    flex-direction: row;
  `}
  .content {
    flex: 1 1 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
    margin: 2rem auto;
  }
  article {
    width: 100%;
    position: relative;
  }
  ${media.phablet`
    font-size: 1em;
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.8em;
    }
  `}
  ${media.desktopHD`
    font-size: 1.2em;
    h1 {
      font-size: 2.2em;
    }
    h2 {
      font-size: 2em;
    }
  `}
`
