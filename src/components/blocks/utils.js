import { css } from "styled-components";
import { media } from "styles/utils";

const values = ["1rem", "2rem", "8vw", "10vw"];

export const margins = css`
  margin-left: ${values[0]};
  margin-right: ${values[0]};
  ${media.phablet`
    margin-left: ${values[1]};
    margin-right: ${values[1]};
  `} ${media.desktop`
    margin-left: ${values[2]};
    margin-right: ${values[2]};
  `} ${media.desktopHD`
    margin-left: ${values[3]};
    margin-right: ${values[3]};
  `};
`;

export const paddings = css`
  padding-left: ${values[0]};
  padding-right: ${values[0]};
  ${media.phablet`
    padding-left: ${values[1]};
    padding-right: ${values[1]};
  `} ${media.desktop`
    padding-left: ${values[2]};
    padding-right: ${values[2]};
  `} ${media.desktopHD`
    padding-left: ${values[3]};
    padding-right: ${values[3]};
  `};
`;
