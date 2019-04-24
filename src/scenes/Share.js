import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";
import styled from "styled-components";
import { media } from "styles/utils";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";
import Full from "components/blocks/Full";
import { Link } from "react-router-dom";

const messages = defineMessages({
  title: {
    id: "share.title",
    defaultMessage: "Compartilhe este vídeo"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Documentário “Uru-Eu-Wau-Wau. Terra em Disputa”"
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
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;

const Buttons = styled.div`
  display: table;
  text-align: center;
  width: 100%;
  ${media.phablet`
    width: 70%;
    margin: 0 auto;
  `} .fa {
    font-size: 3em;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
  > * {
    display: table-cell;
  }
`;

const Share = ({ intl, lastPath }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  const url = process.env.SITE_URL || "http://terraemdisputa.infoamazonia.org";
  const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    EmailShareButton
  } = ShareButtons;
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>
          <Title as="h2">
            <FormattedMessage
              id="share.title"
              defaultMessage="Compartilhe este vídeo"
            />
          </Title>
          <Buttons>
            <FacebookShareButton url={url} quote={siteTitle}>
              <span className="fa fa-facebook" />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={siteTitle} via="InfoAmazonia">
              <span className="fa fa-twitter" />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={siteTitle}>
              <span className="fa fa-whatsapp" />
            </WhatsappShareButton>
          </Buttons>
          <Button>
            <div>
              {
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Continuar assistindo"
                    />
                  </Link>
              }
            </div>
          </Button>
        </Container>
      </section>
    </Page>
  );
};

Share.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(Share));
