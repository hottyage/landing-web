/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode } from "react";
import { jsx } from "@emotion/react";
import * as s from "./styles";
import { useTranslation } from "next-i18next";
import { Title } from "../ui/Title/Title";
import CardIcon1 from "../../assests/svg/card-icon-1.svg";
import CardIcon2 from "../../assests/svg/card-icon-2.svg";
import CardIcon3 from "../../assests/svg/card-icon-3.svg";
import ArrowRight from "../../assests/svg/arrow-right.svg";
import Image from "next/image";

const cardItems = [
  {
    logo: CardIcon1,
    heading: "landing.about-section.cards.staking.title",
    text: "landing.about-section.cards.staking.sub-title",
  },
  {
    logo: CardIcon2,
    heading: "landing.about-section.cards.currency.title",
    text: "landing.about-section.cards.currency.sub-title",
  },
  {
    logo: CardIcon3,
    heading: "landing.about-section.cards.governance.title",
    text: "landing.about-section.cards.governance.sub-title",
  },
];

export const AboutBlock = () => {
  const { t } = useTranslation();
  return (
    <div css={s.wrapperCss}>
      <Title label={t("landing.about-section.title")} addCss={s.titleCss} />
      <div css={s.cardsWrapperCss}>
        {cardItems.map((item) => (
          <div css={s.cardWrapperCss} key={item.heading}>
            <div css={s.cardLogoCss}>
              <item.logo />
            </div>
            <div css={s.cardHeadingCss}>{t(item.heading)}</div>
            <div css={s.cardTextCss}>{t(item.text).capitalize()}</div>
          </div>
        ))}
      </div>
      <a href={"https://planetix.gitbook.io/whitepaper/"} css={s.linkStylesCss}>
        {t("landing.about-section.link")} <ArrowRight />
      </a>
    </div>
  );
};
