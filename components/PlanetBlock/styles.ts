import { css } from "@emotion/react";

export const wrapperCss = css`
  padding-top: 178px;
  padding-bottom: 337px;
  position: relative;
  display: flex;
  @media (max-width: 767px) {
    padding-top: 64px;
    padding-bottom: 64px;
    flex-direction: column;
    align-items: center;
  }
`;

export const mainBlockCss = css`
  padding-right: 40px;
  @media (max-width: 767px) {
    padding-right: 0;
  }
`;
export const titleCss = css`
  margin-bottom: 9px;
  max-width: 470px;
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 38px;
    text-transform: uppercase;
  }
`;
export const subtitleCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(249, 249, 249, 0.75);
  margin-bottom: 25px;
  max-width: 460px;
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 23px;
  }
`;
export const linksCss = css`
  display: flex;
  align-items: center;

  & > a {
    flex: 1;
    text-align: center;
  }
  & > a:first-of-type {
    margin-right: 33px;
    width: 100%;
    max-width: 190px;
    white-space: nowrap;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    margin-bottom: 64px;
    & > a:first-of-type {
      margin-right: 0;
      margin-top: 24px;
    }
  }
`;
export const buttonCss = css`
  padding: 0;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f9f9f9;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  svg > path {
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    color: #ff6647;
    svg > path {
      fill: #ff6647;
    }
  }
`;

export const playVideoCss = css`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 11px;
  }
`;
export const statsBlockCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 47px;
  max-width: 370px;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    & > div:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const statItemCss = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  white-space: nowrap;
  @media (max-width: 767px) {
    margin-bottom: 32px;
    align-items: center;
  }
`;

export const statItemHeadingCss = css`
  font-size: 28px;
  line-height: 37px;
  text-align: center;
  text-transform: uppercase;
  color: #f9f9f9;
  font-family: "Druk Wide Medium", sans-serif;
  @media (max-width: 767px) {
    font-size: 21px;
    line-height: 27px;
  }
`;
export const statItemSubtitleCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgba(249, 249, 249, 0.75);
`;

export const planetCss = css`
  padding-top: 200px;
  @media (max-width: 767px) {
    display: none;
  }
`;
