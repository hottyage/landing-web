import { css } from "@emotion/react";

export const heroBlockWrapperCss = css`
  padding-top: 161.47px;
  display: flex;
  flex-direction: column;
  max-width: 660px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 425px) {
    padding-top: 100px;
  } ;
`;

export const heroIntroTextCss = css`
  text-align: center;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(249, 249, 249, 0.5);
  margin-bottom: 8.39px;
  font-family: "Druk Wide Medium", sans-serif;
  font-weight: 400;
`;
export const heroHeadingCss = css`
  font-size: 51px;
  line-height: 67px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;
  background: -webkit-linear-gradient(
    rgba(208, 223, 245, 1),
    rgba(240, 242, 245, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Druk Wide", sans-serif;
  @media (max-width: 696px) {
    display: none;
  }
`;

export const mobileHeroHeadingCss = css`
  display: none;
  font-size: 28px;
  line-height: 36.54px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;
  background: -webkit-linear-gradient(
    rgba(208, 223, 245, 1),
    rgba(240, 242, 245, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Druk Wide", sans-serif;
  @media (max-width: 696px) {
    display: block;
  }
`;

export const subTitleCss = css`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: rgba(249, 249, 249, 0.75);
  margin-bottom: 30px;
`;

export const heroLinksWrapCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
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
  justify-content: center;
  & > svg {
    margin-right: 11px;
  }
`;
