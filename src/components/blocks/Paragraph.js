import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const Wrapper = styled.p`
  ${margins} ${props =>
      props.big &&
      css`
        font-size: 1.2em;
        a {
          color: #333;
          &:active,
          &:focus,
          &:hover {
            color: #000;
          }
        }
      `} ${props =>
      props.small &&
      css`
        font-size: 0.8em;
        color: #666;
      `} ${media.desktop`
    margin-bottom: 1.5rem;
  `} ${media.desktopHD`
    margin-bottom: 2rem;
  `} .paragraph-content {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    display: block;
    ${media.desktopHD`
      max-width: 640px;
    `};
  }
`;
export default ({ children, big, small }) => (
  <Wrapper big={big} small={small}>
    <span className="paragraph-content">{children}</span>
  </Wrapper>
);
