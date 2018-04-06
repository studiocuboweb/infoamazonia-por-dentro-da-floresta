import React from "react";
import { injectIntl, intlShape } from "react-intl";

import en from "./en.js";
import es from "./es.js";
import pt from "./pt.js";

const map = {
  en,
  es,
  pt
};

class GripOfTheGuerrilla extends React.Component {
  render() {
    let Article;
    if (map[window.locale]) {
      Article = map[window.locale];
    } else {
      Article = map["en"];
    }
    return <Article />;
  }
}

GripOfTheGuerrilla.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(GripOfTheGuerrilla);
