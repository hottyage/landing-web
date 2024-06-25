/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ReactNode } from "react";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";
import { useTranslation } from "next-i18next";
import { Title } from "../ui/Title/Title";
import CardIcon1 from "../../assests/svg/card-icon-1.svg";
import { A } from "../ui/A/A";
import PlayIcon from "../../assests/svg/play-icon.svg";
import Planet from "../../assests/svg/planet.svg";
import { Parallax, Background } from "react-parallax";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { RootLayout } from "../RootLayout/RootLayout";
import dynamic from "next/dynamic";
const AnimatedPlanet = dynamic(
  () => import("./AnimatedPlanet/AnimatedPlanet"),
  { ssr: false }
);

const statsItems = [
  { title: "400k+", subtitle: "landing.planet-section.active-users" },
  { title: "45%", subtitle: "landing.planet-section.growth" },

  { title: "Q2 2021", subtitle: "landing.planet-section.launched" },
];

export const PlanetBlock = ({ modalHandler }: { modalHandler: () => void }) => {
  const { t } = useTranslation();
  return (
    <Parallax strength={300}>
      <SectionWrapper backgroundColor={"transparent"}>
        <div css={s.wrapperCss}>
          <div css={s.mainBlockCss}>
            <Title
              label={t("landing.planet-section.title")}
              addCss={s.titleCss}
            />
            <p css={s.subtitleCss}>{t("landing.planet-section.sub-title")} </p>
            <div css={s.linksCss}>
              <A
                path={"https://planetix.com/"}
                label={t("landing.planet-section.btn")}
                variant="primary"
              />
            </div>
          </div>
          <div css={s.statsBlockCss}>
            {statsItems.map((item, index) => (
              <div css={s.statItemCss} key={item.title + index}>
                <h3 css={s.statItemHeadingCss}>{item.title}</h3>
                <p css={s.statItemSubtitleCss}>{t(item.subtitle)}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <Background className="parallax-bg">
        <div css={s.planetCss}>
          <AnimatedPlanet />
        </div>
      </Background>
    </Parallax>
  );
};
