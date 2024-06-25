/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode } from "react";
import { jsx, SerializedStyles } from "@emotion/react";
import * as s from "./styles";
import { useTranslation } from "next-i18next";

export const Title = ({
  label,
  addCss,
}: {
  label: string;
  addCss?: SerializedStyles;
}) => {
  return <h2 css={[s.titleCss, addCss && addCss]}>{label}</h2>;
};
