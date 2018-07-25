import React from 'react';
import styled from 'styled-components';
import RelatedNews from "components/RelatedNews";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Wrapper = styled.div`
// background: lightgray;
.video-ending--section {
}
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

var divStyle = {
  'zIndex':'99999',
};

var divStyle2 = {
  'position': 'fixed',
  'right': '0',
  'top': '200px',
  'minWidth': '100%',
  'minHeight': '100%'
};
const VideoContentEnd = ({ data }) => (
  <Wrapper className='video-ending--section' style={divStyle}>
    <div style={divStyle2}>
      <span>{data}</span>
      <RelatedNews className='related-alternative'
          sectionTitle={"Confira também: "}
          title={"A luta dos herdeiros de Mata Cavalo pelo título do quilombo"}
          subtitle={"O território foi formado no século 19, quando negros africanos compraram ou ganharam as terras após o fim da escravidão no Brasil. Agora enfrentam dificuldades para aderir o Cadastro Ambiental Rural (CAR)" }
          imageUrl={require("images/matacavalo_related.jpg")}
          href={"https://infoam-template-multimedia.herokuapp.com/"}
        />
        <div className="link-back">
          <Link to="/">
            <FormattedMessage
              id="general.backToHome"
              defaultMessage="Começar do início"
            />
          </Link>
        </div>
    </div>
  </Wrapper>
)

export default VideoContentEnd
