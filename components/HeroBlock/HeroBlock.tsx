/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";
import { A } from "../ui/A/A";
import PlayIcon from "../../assests/svg/play-icon.svg";
import { useTranslation } from "next-i18next";

const HeroBlock = ({ modalHandler }: { modalHandler: () => void }) => {
  const { t } = useTranslation();
  return (
    <div css={s.heroBlockWrapperCss}>
      <div css={s.heroIntroTextCss}>
        {t("landing.hero-section.introducing")}
      </div>
      <h1 css={s.heroHeadingCss}>IX Foundation</h1>
      <h1 css={s.mobileHeroHeadingCss}>THE IX TOKEN</h1>
      <div css={s.subTitleCss}>{t("landing.hero-section.sub-title")}</div>
      <div css={s.heroLinksWrapCss}>
        <button css={s.buttonCss} onClick={modalHandler}>
          <div css={s.playVideoCss}>
            <PlayIcon /> {t("landing.hero-section.links.watch-video")}
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroBlock;
