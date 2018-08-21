import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
margin-top: -35px;
${media.desktop`
  margin-top:0px;
`} 
${media.desktopHD`
  margin-top:0px;
`}
.background-color {
  background-color:white;
  z-index:-100;
}
.padding-header {
  padding-top:35px;
  ${media.desktop`
    padding-top:0px;
  `} 
  ${media.desktopHD`
    padding-top:0px;
  `}
}
.end-of-content {
  display:block;
  float:left;
  ${media.desktop`
    float:none;
  `} 
  ${media.desktopHD`
    float:none;
  `}
}
.margin-bottom-1 {
  margin-bottom:600px;
  padding-top:10px;
  padding-bottom:10px;
  ${media.desktop`
    padding-top:0px;
    margin-bottom:0px;
    padding-bottom:0px;
  `} 
  ${media.desktopHD`
    padding-top:0px;
    margin-bottom:0px;
    padding-bottom:0px;
  `}
}
.foreground {
  z-index: 100;
}
.background{
    color: #999999;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    ${media.desktop`
      display:none;
    `} 
    ${media.desktopHD`
      display:none;
    `}
}
`;