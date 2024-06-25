/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";

import { Title } from "../ui/Title/Title";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const HorizontalSlider = dynamic(
  () => import("../ui/HorizontalSlider/HorizontalSlider"),
  { ssr: false }
);

const LatestNewsBlock = ({ items }: { items: any }) => {
  const { t } = useTranslation();
  if (!items || !items.length) return null;
  return (
    <div css={s.mainWrapCss}>
      <Title label={t("landing.news-section.title")} addCss={s.titleCss} />
      <HorizontalSlider items={items} />
    </div>
  );
};

export default LatestNewsBlock;
