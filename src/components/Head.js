import React from "react";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape, defineMessages } from "react-intl";
import { Helmet } from "react-helmet";

const messages = defineMessages({
  title: {
    id: "head.title",
    defaultMessage: "Documentário “BR 319: Bem-Vindo à Realidade”"
  },
  description: {
    id: "head.description",
    defaultMessage:
      "Uma vila localizada na estrada mais erma do Brasil se torna a nova fronteira para madeireiros de Rondônia. A cada dia, novos moradores chegam abrindo negócios, em busca de oportunidades na Amazônia"
  },
  keywords: {
    id: "head.keywords",
    defaultMessage: "desmatamento, Amazonas, Amazônia, Rondônia, BR 319"
  }
});

class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { intl, location } = this.props;
    const title = intl.formatMessage(messages.title);
    const description = intl.formatMessage(messages.description);
    const keywords = intl.formatMessage(messages.keywords);
    const url = process.env.SITE_URL || "";
    return (
      <Helmet>
        <html lang={intl.locale} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`${url}${location.pathname}`} />
        <meta property="og:url" content={`${url}${location.pathname}`} />
        <meta
          property="og:image"
          content={`${url}${require("images/socialmedia.jpg")}`}
        />
        <meta property="og:title" content="{title}" />
        <meta property="og:description" content="{description}" />
        <meta property="og:type" content="video.movie" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:src" content={`${url}${require("images/socialmedia.jpg")}`}/>
        <meta name="twitter:site" content="@amazonia_real"/>
        <meta name="twitter:domain" content="Amazônia Real"/>
        <meta name="twitter:creator" content="@amazonia_real"/>
      </Helmet>
    );
  }
}

Head.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(withRouter(Head));
