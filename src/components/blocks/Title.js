import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { paddings } from './utils';

const styles = css`
  border-bottom: 1px solid #ddd;
  margin: 6vw 0;
  padding: 0 1rem 1rem;
  span {
    display: block;
    max-width: 900px;
    margin: 0 auto;
  }
  ${media.phablet`
    padding-left: 4vw;
    padding-right: 4vw;
    padding-bottom: 2rem;
  `}
`

export default ({ as, children }) => {
  as = as || 'h3';
  const Wrapper = styled[as]([styles]);
  return (
    <Wrapper as={as}>
      <span>{children}</span>
    </Wrapper>
  )
}
