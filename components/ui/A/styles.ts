import { css } from "@emotion/react";

const mainCss = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f9f9f9;
  cursor: pointer;
`;

export const primary = css`
  ${mainCss};
  padding: 14px 20px;
  background: #ff6647;
  border-radius: 0;
  color: #0b0b0c;
`;
export const secondary = css`
  ${mainCss};
`;
export default { primary, secondary };
