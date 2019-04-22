import React from 'react'
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-content: flex-start;
`

const Logos = () => (
  <Wrapper>
    <span> LOGO 1</span>
    <span> LOGO 2</span>
  </Wrapper>
);

export default Logos;