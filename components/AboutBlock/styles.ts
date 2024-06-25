import { css } from "@emotion/react";

export const wrapperCss = css`
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 131px;
  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;
export const titleCss = css`
  text-align: center;
  margin-bottom: 77px;
  @media (max-width: 768px) {
    text-align: start;
    font-size: 28px;
    line-height: 37px;
    margin-bottom: 64px;
  }
`;
export const cardsWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const cardWrapperCss = css`
  display: flex;
  flex-direction: column;
  max-width: 314px;
  margin-right: 40px;
  margin-bottom: 105px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 64px;
  }
`;
export const cardLogoCss = css`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(249, 249, 249, 0.04);
  border-radius: 8px;
  margin-bottom: 33px;
  @media (max-width: 768px) {
    background: #0b0b0c;
    margin-bottom: 27px;
  }
`;

export const cardHeadingCss = css`
  font-family: "Druk Wide Medium", sans-serif;
  font-weight: 400;
  font-size: 21px;
  line-height: 27.4px;
  color: #f9f9f9;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const cardTextCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(249, 249, 249, 0.75);
`;

export const linkStylesCss = css`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 27.5px 31px 32px;
  background: rgba(249, 249, 249, 0.04);
  border: 1px solid rgba(249, 249, 249, 0.16);
  box-sizing: border-box;
  border-radius: 8px;
  font-weight: 700;
  font-size: 21px;
  line-height: 28px;
  color: #f9f9f9;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  font-family: "Druk Wide", sans-serif;
  &:hover {
    border-color: #ff6647;
  }
`;
