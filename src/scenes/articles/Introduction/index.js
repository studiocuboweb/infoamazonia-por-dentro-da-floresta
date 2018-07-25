import React from "react";
import { injectIntl, intlShape } from "react-intl";

import pt from "./pt.js";

const map = {
  pt
};

class Introduction extends React.Component {
  render() {
    // const { intl } = this.props;
    let  Article = map["pt"];
    return <Article />;
  }
}

Introduction.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Introduction);
