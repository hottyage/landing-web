/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import type { NextPage } from "next";
import { css, jsx } from "@emotion/react";
import { Trans, useTranslation } from "next-i18next";
import { RootLayout } from "../../components/RootLayout/RootLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import * as s from "../../assests/styles/privacyStyles";
import { Title } from "../../components/ui/Title/Title";
import Head from "next/head";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Privacy: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>PIX Foundation/Privacy</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title1"
        />
      </Head>
      <RootLayout>
        <SectionWrapper backgroundColor={"#0B0B0C"}>
          <div css={s.mainWrapCss}>
            <Title label={t("privacy.title")} addCss={s.titleCss} />
            <p css={s.subtitleCss}>{t("privacy.update-date")}</p>

            <div css={s.textWrapCss}>
              <Trans
                components={{
                  p: <p />,
                  h: <h4 />,
                  ul: <ul />,
                  li: <li />,
                  span: <span />,
                }}
              >
                {t("privacy.text")}
              </Trans>
            </div>
          </div>
        </SectionWrapper>
      </RootLayout>
    </>
  );
};

export default Privacy;
