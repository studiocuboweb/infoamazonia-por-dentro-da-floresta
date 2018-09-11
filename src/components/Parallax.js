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
.margin-bottom-map {
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
.margin-bottom-photo-gallery {
  margin-bottom:200px;
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
.pointer-events-none {
  pointer-evets:none;
}
.pointer-events-all {
  pointer-evets:all;
}
.foreground {
  z-index: 100;
  pointer-evets:none;
  position:relative;
}
.background{
    color: #999999;
    position: fixed;
    top: 9px;
    left: 0;
    z-index: 99;
    ${media.desktop`
      display:none;
    `} 
    ${media.desktopHD`
      display:none;
    `}
}
`;