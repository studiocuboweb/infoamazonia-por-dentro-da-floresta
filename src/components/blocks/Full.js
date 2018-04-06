import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  padding: 0;
  margin: 6vw 0;
  ${props => props.withMargin && css`
    margin-left: 1rem;
    margin-right: 1rem;
    ${media.tablet`
      margin-left: 4vw;
      margin-right: 4vw;
    `}
  `}
`
