import { css } from "@emotion/react";

export const mainWrapCss = css`
  padding-top: 129px;
  padding-bottom: 32px;
`;

export const titleCss = css`
  margin-bottom: 4px;
`;

export const subtitleCss = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f9f9f9;
  margin-bottom: 36.54px;
`;

export const textWrapCss = css`
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
&>h4 {
  margin-bottom: 36px;
  font-size: 21px;
  line-height: 26.25px;
}
& > p {
  margin-bottom: 34px;
  font-size: 16px;

  line-height: 24px;
}
  
  & > ul > li:last-of-type {
    margin-bottom: 36px;
  }

& li {
  list-style: disc;
  margin-left: 25px;
  margin-bottom: 12px;
}
& span {
  display: block;
  margin-bottom: 12px;
}
`;

