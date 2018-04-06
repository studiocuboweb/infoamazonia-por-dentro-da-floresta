import React from "react";
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

const messages = defineMessages({
  title: {
    id: "share.title",
    defaultMessage: "Share this article"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Digging into the Mining Arc"
  }
});

const Buttons = styled.div`
  display: table;
  text-align: center;
  width: 100%;
  ${media.phablet`
    width: 70%;
    margin: 0 auto;
  `} .fa {
    font-size: 3em;
    color: #333;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  > * {
    display: table-cell;
  }
`;

const Share = ({ intl }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  const url = process.env.SITE_URL || "http://google.com";
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
              defaultMessage="Share this article"
            />
          </Title>
          <Buttons>
            <FacebookShareButton url={url} quote={siteTitle}>
              <span className="fa fa-facebook" />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={siteTitle} via="infoamazonia">
              <span className="fa fa-twitter" />
            </TwitterShareButton>
            <TelegramShareButton url={url} title={siteTitle}>
              <span className="fa fa-telegram" />
            </TelegramShareButton>
            <WhatsappShareButton url={url} title={siteTitle}>
              <span className="fa fa-whatsapp" />
            </WhatsappShareButton>
          </Buttons>
        </Container>
      </section>
    </Page>
  );
};

Share.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Share);
