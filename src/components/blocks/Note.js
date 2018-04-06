import React, { Component } from "react";
import styled from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const Wrapper = styled.div`
  ${margins} margin-top: 6vw;
  margin-bottom: 6vw;
  padding: 1rem;
  background: #f7f7f7;
  font-size: 0.8em;
  font-style: italic;
  ${media.phablet`
    padding: 2rem;
  `} ${media.desktop`
    padding: 2vw 4vw;
    margin-left: 4vw;
    margin-right: 4vw;
  `} ${media.desktopHD`
    padding: 2vw 4vw;
    margin-left: 6vw;
    margin-right: 6vw;
  `} .note-content {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    display: block;
    ${media.desktopHD`
      max-width: 640px;
    `};
  }
`;
export default ({ children }) => (
  <Wrapper>
    <span className="note-content">{children}</span>
  </Wrapper>
);
