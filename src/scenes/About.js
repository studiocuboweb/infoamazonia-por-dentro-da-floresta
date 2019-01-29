import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";

import { Link } from "react-router-dom";

const messages = defineMessages({
  title: {
    id: "about.title",
    defaultMessage: "Sobre"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "A luta dos herdeiros de Mata Cavalo pelo título do quilombo"
  }
});

const Button = styled.div`
  widht:100%;
  margin-top:50px;
  text-align: center;
  a{
    margin:0 auto;
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #000;
    border: 1px solid #000;
    text-align: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;

const About = ({ intl, lastPath }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>
        <Button>
          <div>
            {
              lastPath &&
                <Link to={lastPath}>
                  <span className="fa fa-arrow-left" />
                  <FormattedMessage
                    id="about.close"
                    defaultMessage="Continuar lendo"
                  />
                </Link>
            }
          </div>
        </Button>
          <Paragraph big>
            <FormattedMessage
              id="about.intro"
              defaultMessage="Esta reportagem foi produzida pela {amazoniareal} e faz parte do especial “{olhandopordentrodafloresta}”."
              values={{
                infoamazonia: (
                  <strong>
                    <a href="http://infoamazonia.org/">InfoAmazonia</a>
                  </strong>
                ),
                amazoniareal: (
                  <strong>
                    <a href="http://amazoniareal.com.br/">
                      Amazônia Real
                    </a>
                  </strong>
                ),
                clua: (
                  <strong>
                    <a href="http://www.climateandlandusealliance.org/">
                      Aliança pelo Clima e Uso da Terra (CLUA)
                    </a>
                  </strong>
                ),
                olhandopordentrodafloresta: (
                  <strong>
                    <a href="http://amazoniareal.com.br/espera-da-terra-firme/">
                      Olhando por Dentro da Floresta Amazônica
                    </a>
                  </strong>
                )
              }}
            />
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.reporter" defaultMessage="Repórter" />
            </strong>
            <br />
            Vandré Fonseca
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.photos_videos"
                defaultMessage="Fotos e vídeos"
              />
            </strong>
            <br />
            Bruno Kelly
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.editor_photo"
                defaultMessage="Editor de fotografia"
              />
            </strong>
            <br />
            Alberto César Araújo
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.intern"
                defaultMessage="Estagiária"
              />
            </strong>
            <br />
            Maria Cecília Costa
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.coordwebdev" defaultMessage="Coordenação de desenvolvimento web" />
            </strong>
            <br />
            Stefano Wrobleski (InfoAmazonia)
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.dev"
                defaultMessage="Desenvolvimento web e design"
              />
            </strong>
            <br />
            <a href="https://github.com/studiocuboweb/infoamazonia-por-dentro-da-floresta">Paulo Campos (Studio Cubo Web)</a> e Caio Alcântara, com base no trabalho desenvolvido por <a href="https://github.com/aparabolica/arco-mineiro">Miguel Peixe (aparabólica)</a>
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.maker"
                defaultMessage="Realização"
              />
            </strong>
            <br />
            <img
              src={require("images/partners/amazonia-real-p.png")}
              alt="Amazônia Real"
            />
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.partnership"
                defaultMessage="Parceria"
              />
            </strong>
            <br />
            <img
              src={require("images/partners/infoamazonia.png")}
              alt="InfoAmazonia"
            />
          </Paragraph>
          <Button>
            <div>
              {
                lastPath &&
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Continuar lendo"
                    />
                  </Link>
              }
            </div>
          </Button>
          <hr />
          <Paragraph small>
            <FormattedMessage
              id="about.license"
              defaultMessage="Todo o conteúdo publicado neste site está licenciado usando a licença Creative Commons – Atribuição 4.0 Internacional. Para qualquer outro uso, escreva-nos em redacao@amazoniareal.com.br"
            />
          </Paragraph>
        </Container>
      </section>
    </Page>
  );
};

About.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(About));
