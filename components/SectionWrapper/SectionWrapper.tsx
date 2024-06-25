/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";

const SectionWrapper = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) => {
  return (
    <div css={s.mainWrapperCss(backgroundColor)}>
      <div css={s.sectionCss}>{children}</div>
    </div>
  );
};

export default SectionWrapper;
