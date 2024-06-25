/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";
import { useTranslation } from "next-i18next";
import Logo from "../../assests/svg/staking_logo.svg";
import { Title } from "../ui/Title/Title";
import PictureFooter from "../../assests/svg/ruller.svg";
import PictureFooterMob from "../../assests/svg/ruller_mob.svg";

const StakingBlock = () => {
  const { t } = useTranslation();
  return (
    <div css={s.mainWrapCss}>
      <Logo css={s.logoCss} />
      <div css={s.logoTextCss}>
        {t("landing.staking-section.title.coming_soon")}
      </div>
      <div>
        <Title
          addCss={s.mainTitle}
          label={t("landing.staking-section.title")}
        />
      </div>
      {/*<div css={s.descriptionCss}>*/}
      {/*    <div css={s.descriptionItemCss}>{t("landing.staking-section.sub-title-treasury")}</div>*/}
      {/*    <div css={s.descriptionItemCss}>{t("landing.staking-section.sub-title-dropTime")}</div>*/}
      {/*</div>*/}
      <PictureFooter css={s.footerPicCss} />
      <PictureFooterMob css={s.footerPicMobCss} />
    </div>
  );
};

export default StakingBlock;
