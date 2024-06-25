import { css } from "@emotion/react";

export const mainCss = (headerOnTop: boolean) => css`
  position: fixed;
  z-index: 50;
  backdrop-filter: blur(13px);
  width: 100%;
  border-bottom: 1px solid
    ${headerOnTop ? "transparent" : "rgba(39, 39, 42, 1)"};
  transition: border-color 0.3s ease-in-out;
`;

export const headerCss = css`
  margin: 0 auto;
  padding: 13px 166px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 13px 93px;
  }
  @media (max-width: 768px) {
    padding: 14px 20px;
  } ;
`;

export const headerLogoCss = css`
  cursor: pointer;
`;

export const col = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
export const selectContainerCss = css`
  margin-left: 20px;
  width: 127px;
`;

export const headerNavWrapCss = css`
  margin-left: 43px;
  width: 100%;
  max-width: 503px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const headerNavBtnCss = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f9f9f9;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const mobileMenuWrapCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(13px);
  z-index: 60;
`;

export const mobileMenuContainer = css`
  width: 100%;
  height: 100%;
  margin-left: auto;
  padding: 24px 24px;
  background-color: #0b0b0c;
  display: flex;
  flex-direction: column;
`;

export const mobileNavHeader = css`
  display: flex;
  & > button {
    margin-left: auto;
    align-self: end;
    border: none;
    background-color: transparent;
  }
`;

export const mobileNavList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > a,
  & > button {
    margin: 0 auto 80px auto;
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
`;

export const burgerMenuCss = css`
  display: none;
  z-index: 60;
  & > button {
    border: 0;
    background: transparent;
  }
  @media (max-width: 860px) {
    display: flex;
  }
`;

export const burgerIconContainerCss = css`
  .burger-container {
    margin-left: 8px;
    position: relative;
    width: 24px;
    height: 24px;
  }
  .burger {
    cursor: pointer;
    display: block;
    height: 24px;
    width: 24px;
    padding: 4px 3px;
  }
  .burger span {
    background: #bdbfc2;
    display: block;
    width: 18px;
    height: 1px;
    margin-bottom: 4px;
    position: relative;
    top: 0;
    transition: all ease-in-out 0.4s;
  }
  .burger-container.open span:nth-of-type(2),
  .burger-container.open span:nth-of-type(3) {
    width: 0;
    opacity: 0;
  }
  .burger-container.open span:nth-of-type(1) {
    transform: rotate(-45deg);
    top: 7px;
    height: 2px;
    width: 20px;
  }
  .burger-container.open span:nth-of-type(4) {
    transform: rotate(45deg);
    top: -9px;
    height: 2px;
    width: 20px;
  }
`;
