import { css } from "@emotion/react";

export const base = (error: any) => css`
  width: 100%;
  max-width: 321px;
  min-width: 215px;
  border: 1px solid rgba(249, 249, 249, 0.16);
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  & > input {
    width: 269px;
    background: rgba(249, 249, 249, 0.04);
    border: none;
    font-size: 16px;
    line-height: 24px;
    color: rgba(249, 249, 249, 0.75);
    padding: 12px 0px 12px 16px;
    outline: none;
    margin: 0;
  }
  & > button {
    border: none;
    width: 52px;
    background: rgba(249, 249, 249, 0.04);
    padding: 0;
    margin: 0;
    height: 48px;
    cursor: pointer;
  }
`;
