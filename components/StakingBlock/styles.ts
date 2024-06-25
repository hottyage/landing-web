import { css } from "@emotion/react";

export const mainWrapCss = css`
  padding-top: 160px;
  padding-bottom: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 65px;
    padding-bottom: 80px;
  }
`;
export const logoCss = css`
  margin-bottom: 31px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const logoTextCss = css`
  letter-spacing: 3px;
  margin-bottom: 9px;
  font-weight: 400;
  color: rgba(249, 249, 249, 0.5);
  font-family: "Druk Wide Medium", sans-serif;
  font-size: 10px;
  line-height: 15px;
`;
export const descriptionCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(249, 249, 249, 0.5);
  @media (max-width: 625px) {
    width: 100%;
  }
`;
export const descriptionItemCss = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 29px;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;
export const footerPicCss = css`
  width: 351px;
  height: 9px;
  margin-top: 48px;
  @media (max-width: 625px) {
    display: none;
  }
`;
export const mainTitle = css`
  text-align: center;
  @media (max-width: 625px) {
    line-height: 38px;
    font-size: 28px;
  }@media (max-width: 425px) {
  max-width: 250px;
  }
`;
export const footerPicMobCss = css`
  text-align: center;
  display: none;
  @media (max-width: 625px) {
    display: flex;
    margin-top: 35px;
  }
`;
