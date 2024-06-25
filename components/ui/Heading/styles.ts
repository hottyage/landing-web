import { css } from "@emotion/react";

export const headingCss = (
  marginBottom: number | undefined,
  variant: string
) => css`
  font-weight: ${variant === "large" ? 700 : variant === "medium" ? 500 : 400};
  font-size: ${variant === "large" ? 28 : variant === "medium" ? 21 : 16}px;
  line-height: ${variant === "large"
    ? 34
    : variant === "medium"
    ? 26.25
    : 24}px;
  color: #ffffff;
  ${marginBottom ? `margin-bottom: ${marginBottom}px` : ""};
`;
