import { css } from "@emotion/react";

export const sectionCss = (backgroundColor: string) => css`
  width: 100%;
  max-width: 1440px;
  padding: 0 166px;
  margin: 0 auto;
  background: ${backgroundColor};
`;

export const heroBannerWrapperCss = css`
  position: relative;
`;

export const tiltCss = css`
  @media (max-width: 768px) {
    display: none;
  } ;
`;

export const mobileTilt = css`
  display: none;
  padding-top: 32px;
  padding-bottom: 32px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    & > svg {
      height: 335px;
      width: 327px;
    }
  }
  @media (max-width: 374px) {
    & > svg {
      height: 300px;
      width: 300px;
    }
  } ;
`;

export const heroBannerCss = css`
  padding-top: 49.19px;
  padding-bottom: 113.42px;
  display: flex;
  width: 100%;
  justify-content: center;
`;
