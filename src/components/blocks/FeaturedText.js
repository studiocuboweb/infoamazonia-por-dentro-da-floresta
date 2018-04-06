import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const Wrapper = styled.div`
  padding: 2rem;
  background: #f7f7f7;
  font-size: 1.2em;
  position: relative;
  z-index: 1;
  ${media.desktop`
    width: 20vw;
    margin: 0 2vw;
    margin-bottom: 1.5rem;
    ${props => css`
      float: ${props.float || "left"};
    `}
  `}
  ${media.desktopHD`
    margin-bottom: 2rem;
  `}
  .featured-text-content {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    display: block;
    ${media.desktopHD`
      max-width: 640px;
    `};
  }
`;
export default ({ children, float }) => (
  <Wrapper float={float}>
    <span className="featured-text-content">{children}</span>
  </Wrapper>
);
