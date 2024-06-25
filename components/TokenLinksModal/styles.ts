import { css } from "@emotion/react";

export const wrapCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
`;
export const connectIframeWrapperCss = css`
  background-color: white;
  height: 610px;
  border-radius: 10px;
  margin-bottom: 16px;
`;
export const contentWrapCss = css`
  max-width: 720px;
  min-width: 560px;
  width: 70%;
  height: 80%;
  background: #1d1d20;
  border-radius: 24px;
  padding: 26px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const linksList = css`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const linkCss = css`
  width: 100%;
  background-color: #27272a;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  max-height: 70px;
  transition: border-color 0.2s ease-in-out;
  & > svg {
    margin-right: 16px;
  }
  &:hover {
    border-color: rgba(255, 102, 71, 1);
  }
`;

export const closeBtnCss = css`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  color: white;
  top: 28px;
  right: 26px;
  & > svg > path {
    transition: stroke 0.3s ease-in-out;
  }
  & > svg:hover {
    cursor: pointer;

    & > path {
      stroke: #ff6647;
    }
  }
`;
