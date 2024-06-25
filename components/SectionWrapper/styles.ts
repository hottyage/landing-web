import { css } from "@emotion/react";

export const mainWrapperCss = (backgroundColor: string) => css`
  background: ${backgroundColor};
`;

export const sectionCss = css`
  width: 100%;
  max-width: 1440px;
  padding: 0 166px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1024px) {
    padding: 0 93px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  } ;
`;
