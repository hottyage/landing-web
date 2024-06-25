/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode } from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";

export const Heading = ({
  label,
  marginBottom,
  variant,
}: {
  label: string | number;
  marginBottom?: number;
  variant: "large" | "medium" | "small";
}) => {
  if (variant === "large") {
    return <h3 css={s.headingCss(marginBottom, variant)}>{label}</h3>;
  } else {
    return <h4 css={s.headingCss(marginBottom, variant)}>{label}</h4>;
  }
};
