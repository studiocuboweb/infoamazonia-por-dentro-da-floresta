import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { paddings } from './utils';

const styles = css`
  span {
    display: block;
    max-width: 900px;
    margin: 0 auto;
  }
  ${media.phablet`
    padding-left: 10vw;
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
