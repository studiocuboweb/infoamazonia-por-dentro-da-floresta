import styled from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  margin: 0;
  position: relative;
  ${media.phablet`
    margin: 2rem 0;
  `}
  ${media.tablet`
    margin: 6vw 0;
  `}
  .twitter-tweet {
    margin: 0 auto;
  }
  hr {
    margin: 6rem 0;
  }
`
