import React from "react";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape, defineMessages } from "react-intl";
import { Helmet } from "react-helmet";

const messages = defineMessages({
  title: {
    id: "head.title",
    defaultMessage: "Rodovia BR-319: De atoleiro à rondonização"
  },
  description: {
    id: "head.description",
    defaultMessage:
      "O meião do Amazonas se transforma com a chegada de migrantes, abertura de serrarias, pastagens e áreas de cultivo"
  },
  keywords: {
    id: "head.keywords",
    defaultMessage: "BR-319, desmatamento, Amazonas"
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
        <meta property="og:type" content="article" />
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
