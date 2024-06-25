import { css } from "@emotion/react";

export const mainWrapCss = css`
  padding-top: 109px;
  padding-bottom: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 767px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const mainContent = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
export const titleCss = css`
  margin-top: 30px;
  margin-bottom: 68px;
  @media (max-width: 510px) {
    max-width: 350px;
    text-align: center;
    font-size: 28px;
    margin-top: 16px;
    line-height: 38px;
    margin-bottom: 64px;
  }
`;
export const itemBlock = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 295px;
  margin-bottom: 92px;
  z-index: 10;

  & > svg {
    position: absolute;
  }

  @media (max-width: 1024px) {
    margin-bottom: 32px;
  }
`;
export const smallBlockContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: -32px;
  @media (max-width: 860px) {
    flex-wrap: wrap;
    max-width: 360px;
  }
  @media (max-width: 540px) {
    width: 150px;
  }
`;
export const smallBlock = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;
export const smallBlockText = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(249, 249, 249, 0.5);
`;
export const smallBlockTittle = css`
  @media (max-width: 540px) {
    font-size: 28px;
    line-height: 36.5px;
    font-weight: 400;
  }
`;
export const barcode = css`
  @media (max-width: 425px) {
    display: none;
  }
`;
export const barcodeMob = css`
  display: none;
  @media (max-width: 425px) {
    display: block;
  }
`;
