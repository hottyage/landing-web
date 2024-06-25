import { css } from "@emotion/react";

export const mainWrapCss = css`
  padding: 181px 0 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1162px) {
    flex-direction: column;
    padding: 120px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 64px 0;
  }
`;

export const textBlockCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 460px;
  @media (max-width: 1162px) {
    text-align: center;
    margin-bottom: 97px;
    & > svg {
      display: none;
    }
  }
`;

export const titleCss = css`
  margin-bottom: 13px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    text-align: center;
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 16px;
  }
`;

export const subTitleCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(249, 249, 249, 0.75);
  margin-bottom: 41px;
`;

export const cartWrapCss = (height: string, width: string) => css`
  position: relative;
  height: ${height};
  width: ${width};
  margin-right: 109px;
  @media (max-width: 1162px) {
    margin-right: 0;
  }
`;

export const backgroundChartCss = css`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  overflow: hidden;
  & text {
    fill: #f9f9f9 !important;
    font-size: 14px !important;
    line-height: 14px !important;
    white-space: pre-wrap !important;
    position: relative;
    font-family: "Apercu Medium", sans-serif !important;
    font-weight: 400;
    @media (max-width: 490px) {
      font-size: 10px !important;
      line-height: 10px !important;
    }
    @media (max-width: 408px) {
      font-size: 8px !important;
      line-height: 10px !important;
    }
  }
`;
