import React from "react";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape, defineMessages } from "react-intl";
import { Helmet } from "react-helmet";

const messages = defineMessages({
  title: {
    id: "head.title",
    defaultMessage: "Especial Olhando por Dentro da Floresta Amazônica"
  },
  description: {
    id: "head.description",
    defaultMessage:
      "A luta dos herdeiros de Mata Cavalo pelo título do quilombo"
  },
  keywords: {
    id: "head.keywords",
    defaultMessage: "venezuela, mining arc"
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
          content={`${url}${require("images/facebook-poster.jpg")}`}
        />
      </Helmet>
    );
  }
}

Head.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(withRouter(Head));
