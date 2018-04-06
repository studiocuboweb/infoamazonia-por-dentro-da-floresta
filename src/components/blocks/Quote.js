import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: block;
  color: #999;
  font-style: italic;
  text-align: right;
  margin: 6vw 0;
  font-size: 1.2em;
  ${media.phablet`
    padding: 0 8vw 0 10vw;
  `}
  blockquote {
    position: relative;
    max-width: 450px;
    float: right;
    margin: 0;
    .fa {
      position: absolute;
      color: #f3f3f3;
      left: -.5em;
      top: -.5em;
      font-size: 2em;
    }
    .quote {
      position: relative;
      z-index: 2;
    }
    cite {
      color: #333;
      font-size: .6em;
    }
  }
`

export default ({ children, author }) => (
  <Wrapper>
    <blockquote>
      <span className="fa fa-quote-left" />
      <section className="quote">
        {children}
      </section>
      {author ? (
        <footer>
          <cite>— {author}</cite>
        </footer>
      ) : null}
    </blockquote>
    <div className="clear" />
  </Wrapper>
)
