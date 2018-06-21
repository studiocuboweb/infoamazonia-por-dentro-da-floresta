import React from 'react';
import styled from 'styled-components';
import RelatedNews from "components/RelatedNews";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Wrapper = styled.div`
// background: lightgray;
.link-back {
  text-align: center;
  a {
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    margin: -1px -1px 0 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
}
`

const VideoContentEnd = ({ data }) => (
  <Wrapper className='video-ending--section'>
    <span>{data}</span>
    <RelatedNews className='related-alternative'
        sectionTitle={"Confira também: "}
        title={"Lorem ipsum 2"}
        subtitle={"The situation in venzuela is critical, the people is suffering and beeing smashed everyday." }
        imageUrl={"http://darkroom-cdn.s3.amazonaws.com/2016/09/APphoto_Venezuela-Opposition-Protest-9.jpg"}
        href={"http://runrun.es/nacional/292903/tsj-declaro-nulas-las-sesiones-del-5-y-el-9-de-enero-de-la-asamblea-nacional.html"}
      />
      <div className="link-back">
        <Link to="/">
          <FormattedMessage
            id="general.backToHome"
            defaultMessage="Start Over"
          />
        </Link>
      </div>
  </Wrapper>
)

export default VideoContentEnd