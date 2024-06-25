import { css } from "@emotion/react";

export const mainWrapCss = css`
  padding-top: 128px;
  padding-bottom: 64px;
`;

export const titleCss = css`
  text-align: center;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 37px;
  }
`;
export const roadmapWrapCss = css`
  width: 100%;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    background: linear-gradient(
      rgba(255, 102, 71, 0),
      rgba(255, 102, 71, 1),
      rgba(249, 249, 249, 0.16) 13%,
      rgba(249, 249, 249, 0.16) 80%,
      rgba(249, 249, 249, 0.16) 50%,
      rgba(249, 249, 249, 0)
    );
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  @media (max-width: 767px) {
    &:after {
      content: none;
    }
    & > div:first-of-type {
      padding-top: 0;
      .border-top {
        display: none;
      }
      &:after {
        top: 10px;
      }
    }
    & > div:last-of-type {
      .border-bottom {
        display: none;
      }
    }
  }
`;

export const cardWrapCss = (direction: string, complete: boolean) => css`
  padding-top: 70px;
  position: relative;
  background: inherit;
  width: 50%;
  left: ${direction === "left" ? "0%" : "50%"};
  ${direction === "left" ? "padding-right: 81px" : "padding-left: 81px"};
  z-index: 5;
  &:after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    top: calc(50% + 20px);
    ${direction === "left" ? "right: -7px" : "left: -7px"};
    background: ${complete ? "#FF6647" : "white"};
    border: 5px solid ${complete ? "#3C1D18" : "#313132"};
    box-shadow: 0px 0px 0px 2px ${complete ? "#FF6647" : "#515152"};
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 767px) {
      top: 8px;
      ${direction === "left" ? "right: 8px" : "right: 8px"};
      left: unset;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;

    left: 0;
    right: 0;
    padding-bottom: 74px;
  }
`;

export const date = (direction: string) => css`
  font-family: "Druk Wide", sans-serif;
  font-size: 21px;
  line-height: 27px;
  text-transform: uppercase;
  color: #f9f9f9;
  position: absolute;
  display: inline-block;
  top: calc(50% + 14px);
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 1;
  ${direction === "left" ? "right: -229px;" : "left: -229px;"};
  @media (max-width: 767px) {
    display: none;
  } ;
`;

export const cardContent = (direction: string) => css`
  width: 100%;
  max-width: 473px;
  padding: 32px;
  background: #1d1d20;
  position: relative;

  // ${direction === "right" && "margin-left: 81px;"};

  &:before {
    content: "";
    display: block;
    position: absolute;
    border-top: 8px solid #0b0b0c;
    border-bottom: 10px solid #0b0b0c;
    height: 100%;
    top: -8px;
    width: 100%;
    left: 0;
    z-index: 1;
  }

  &:after {
    display: block;
    position: absolute;
    content: "";
    border-right: 10px solid #0b0b0c;
    border-left: 10px solid #0b0b0c;
    height: 100%;
    width: 100%;
    top: 0;
    left: -8px;
    right: -8px;
    z-index: 1;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const cardTitle = css`
  font-size: 21px;
  line-height: 27px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: "Druk Wide", sans-serif;
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const mobileDateCss = css`
  display: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(249, 249, 249, 0.5);
  margin-bottom: 16px;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const cardText = css`
  font-size: 16px;
  line-height: 24px;
  color: rgba(249, 249, 249, 0.75);
  & > span {
    display: block;
    margin-top: 36px;
  }
  & > ul {
    list-style-type: disc;
    & > li {
      margin-left: 18px;
    }
  }
`;

export const cardBorderCss = (complete: boolean) => css`
  position: absolute;
  top: -8px;
  right: -8px;
  left: -8px;
  bottom: -8px;
  border: 1px solid rgba(249, 249, 249, 0.32);
  @media (max-width: 767px) {
    ${complete && "border-color: #FF6647"}
  }
`;
export const mobileBorderTopCss = css`
  display: none;
  position: absolute;
  top: -8px;
  bottom: 100%;
  width: 1px;
  background-color: rgba(249, 249, 249, 0.16);
  z-index: 3;
  left: 50%;
  @media (max-width: 767px) {
    display: block;
  } ;
`;
export const mobileBorderBottomCss = css`
  display: none;
  position: absolute;
  top: 100%;
  bottom: -74px;
  width: 1px;
  background-color: rgba(249, 249, 249, 0.16);
  z-index: 3;
  left: 50%;
  @media (max-width: 767px) {
    display: block;
  } ;
`;
