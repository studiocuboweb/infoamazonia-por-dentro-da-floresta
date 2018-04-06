import React from "react";
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

const messages = defineMessages({
  title: {
    id: "about.title",
    defaultMessage: "About"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Digging into the Mining Arc"
  }
});

const About = ({ intl }) => {
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
          <Paragraph big>
            <FormattedMessage
              id="about.intro"
              defaultMessage="This story was produced by {infoamazonia} in partnership with {correo} and support from {pulitzer} through “{grant}” funding."
              values={{
                infoamazonia: (
                  <strong>
                    <a href="http://infoamazonia.org/">InfoAmazonia</a>
                  </strong>
                ),
                correo: (
                  <strong>
                    <a href="http://www.correodelcaroni.com/">
                      Correo del Caroní
                    </a>
                  </strong>
                ),
                pulitzer: (
                  <strong>
                    <a href="http://pulitzercenter.org">
                      Pulitzer Center on Crisis Reporting
                    </a>
                  </strong>
                ),
                grant: <em>Data Journalism and Property Rights Grants</em>
              }}
            />
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.reporter" defaultMessage="Reporter" />
            </strong>
            <br />
            Bram Ebus
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.photos_videos"
                defaultMessage="Photos & videos"
              />
            </strong>
            <br />
            Bram Ebus/InfoAmazonia <br />
            Wilmer González/Correo del Caroní
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.editor_chief"
                defaultMessage="Editor in chief, maps, charts and translation to Portuguese"
              />
            </strong>
            <br />
            Stefano Wrobleski
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage id="about.editors" defaultMessage="Editors" />
            </strong>
            <br />
            Gustavo Faleiros/InfoAmazonia<br />
            Oscar Murillo/Correo del Caroní
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.trans_spanish"
                defaultMessage="Translation to Spanish"
              />
            </strong>
            <br />
            Leonardo Suárez Montoya/Correo del Caroní
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.copy_editors"
                defaultMessage="Copy editors"
              />
            </strong>
            <br />
            Alex Kemman<br />
            Joe Parkin Daniels<br />
            Thomas Martinelli<br />
            Kamran Rahman/Pulitzer Center
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.dev"
                defaultMessage="Web Development and Design"
              />
            </strong>
            <br />
            Miguel Peixe/aparabólica
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.thanks"
                defaultMessage="Special thanks"
              />
            </strong>
            <br />
            Lexys Rendón<br />
            Maria de los Ángeles/Correo del Caroní<br />
            Noraima Ángel/Vicariato de Puerto Ayacucho<br />
            Pedro Ortíz/Red de Defensores y Defensoras Indígenas<br />
            Yonnier Rivera
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.pub_partners"
                defaultMessage="Publishing partners"
              />
            </strong>
            <br />
            <a href="https://armando.info/Reportajes/Resume/2386">
              Armando.info
            </a>,{" "}
            <a href="https://www.elespectador.com/noticias/medio-ambiente/explorando-el-arco-minero-articulo-733555">
              El Espectador
            </a>,{" "}
            <a href="http://www1.folha.uol.com.br/ambiente/2018/01/1950328-mineracao-leva-violencia-e-malaria-a-venezuela.shtml">
              Folha de S. Paulo
            </a>,{" "}
            <a href="https://news.mongabay.com/2018/01/venezuelas-mining-arc-boom-sweeps-up-indigenous-people-and-cultures/">
              Mongabay
            </a>,{" "}
            <a href="https://www.nrc.nl/nieuws/2018/01/15/leger-smokkelt-naar-abc-eilanden-a1588361">
              NRC
            </a>,{" "}
            <a href="https://www.trouw.nl/home/venezolaans-leger-faciliteert-smokkel-naar-antillen~abe0a09b/">
              Trouw
            </a>.
          </Paragraph>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.supporter"
                defaultMessage="Supporter"
              />
            </strong>
            <br />
            <img
              src={require("images/partners/pulitzer-center.png")}
              alt="Pulitzer Center"
            />
          </Paragraph>
          <hr />
          <Paragraph small>
            <FormattedMessage
              id="about.license"
              defaultMessage="Except for the maps, which have different licenses, all the content published at this website is licensed using the Creative Commons BY-ND 4.0 license. For any other use, please write us at contact@infoamazonia.org"
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

export default injectIntl(About);
