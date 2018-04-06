import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { paddings } from "./utils";

const Wrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  height: 30vw;
  margin: 6vw 0;
  padding: 1rem;
  color: #fff;
  text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
  ${"" /* ${props => props.first && css`
    margin-top: -2rem;
    ${media.desktopHD`
      margin-top: -6vw;
    `}
  `} */} ${paddings} .margin {
    display: block;
    flex: 1 1 100%;
  }
  .image-box-content {
    flex: 0 0 auto;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
`;
export default ({ children, url, first }) => (
  <Wrapper
    first
    style={{
      backgroundImage: `url(${url})`
    }}
  >
    <span className="margin" />
    <div className="image-box-content">{children}</div>
  </Wrapper>
);
