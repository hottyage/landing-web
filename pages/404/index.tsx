/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { RootLayout } from "../../components/RootLayout/RootLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { css, jsx } from "@emotion/react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Title } from "../../components/ui/Title/Title";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>PIX Foundation | Page not found</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title1"
        />
      </Head>
      <RootLayout>
        <SectionWrapper backgroundColor={"#0B0B0C"}>
          <div css={mainWrapCss}>
            <Title label={t("not-found-page")} />
          </div>
        </SectionWrapper>
      </RootLayout>
    </>
  );
}

const mainWrapCss = css`
  padding-top: 82px;
  height: calc(100vh - 644px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
