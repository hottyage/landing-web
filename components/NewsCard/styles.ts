import { css } from "@emotion/react";

export const mainWrapCss = css`
  width: 405px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 69px;
  height: 100%;
  @media (max-width: 767px) {
    width: 323px;
    margin-right: 16px;
  }
`;
export const imageWrapCss = css`
  height: 282px;
  width: 405px;
  position: relative;
  border-bottom: 0;
  @media (max-width: 767px) {
    height: 282px;
    width: 323px;
  }
`;
export const footerCss = css`
  padding: 25px 27.56px 27px 24px;
  background: rgba(249, 249, 249, 0.04);
  border: 1px solid rgba(249, 249, 249, 0.08);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
export const dateCss = css`
  font-size: 12px;
  line-height: 18px;
  color: rgba(249, 249, 249, 0.75);
  margin-bottom: 8px;
`;

export const linkCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const linkTextCss = css`
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
  color: #f9f9f9;
  max-width: 282px;
`;
