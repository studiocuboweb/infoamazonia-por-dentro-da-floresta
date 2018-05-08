import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: lightgray;
`

const VideoContentEnd = ({ data }) => (
  <Wrapper className='video-ending--section'>
    <span>{data}</span>
  </Wrapper>
)

export default VideoContentEnd