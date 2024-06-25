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
  backdrop-filter: blur(10px);
`;

export const contentWrapCss = css`
  width: 80%;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
`;

export const iframeContainerCss = css`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const closeBtnCss = css`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  position: absolute;
  color: white;
  top: -24px;
  right: -24px;
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
