/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode } from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";

export const Subtitle = ({
  label,
  marginBottom,
  variant,
  addCss,
}: {
  label: string;
  marginBottom?: number;
  variant: "large" | "medium";
  addCss?: any;
}) => <h3 css={[s.subtitleCss(variant, marginBottom), addCss]}>{label}</h3>;
