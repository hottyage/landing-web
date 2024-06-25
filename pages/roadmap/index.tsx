/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import type { NextPage } from "next";
import { css, jsx } from "@emotion/react";
import { Trans, useTranslation } from "next-i18next";
import { RootLayout } from "../../components/RootLayout/RootLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import * as s from "../../assests/styles/roadmapStyles";
import { Title } from "../../components/ui/Title/Title";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { ROADMAPITEMS } from "../../constants/constants";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Roadmap: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Roadmap | IX Foundation</title>
        <meta name="description" content="Dive into the future of IXT." />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title1"
        />
      </Head>
      <RootLayout>
        <SectionWrapper backgroundColor={"#0B0B0C"}>
          <div css={s.mainWrapCss}>
            <Title label={t("roadmap.title")} addCss={s.titleCss} />
            <div css={s.roadmapWrapCss}>
              {ROADMAPITEMS.map((item, index) => (
                <div
                  key={index}
                  css={s.cardWrapCss(
                    index % 2 ? "right" : "left",
                    item.complete
                  )}
                >
                  <div css={s.date(index % 2 ? "right" : "left")}>
                    {t("roadmap.card.date", { date: item.date })}
                  </div>
                  <div
                    css={s.cardContent(index % 2 ? "right" : "left")}
                    className={"cardContent"}
                  >
                    <h4 css={s.cardTitle}>{t(item.title)}</h4>
                    <span css={s.mobileDateCss}>
                      {t("roadmap.card.date", { date: item.date })}{" "}
                    </span>
                    <div css={s.cardText}>
                      <Trans
                        components={{
                          ul: <ul />,
                          li: <li />,
                          span: <span />,
                        }}
                      >
                        {t(item.subTitle)}
                      </Trans>
                    </div>
                    <div css={s.cardBorderCss(item.complete)} />
                    <div css={s.mobileBorderTopCss} className="border-top" />
                    <div
                      css={s.mobileBorderBottomCss}
                      className="border-bottom"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </RootLayout>
    </>
  );
};

export default Roadmap;
