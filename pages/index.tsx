/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { css, jsx } from "@emotion/react";
import { RootLayout } from "../components/RootLayout/RootLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as s from "../assests/styles/mainStyles";
import HeroBanner from "../assests/svg/hero-banner.svg";
import MobileHeroBanner from "../assests/svg/hero-banner-mobile.svg";
import Tilt from "react-parallax-tilt";
import { AboutBlock } from "../components/AboutBlock/AboutBlock";
import { PlanetBlock } from "../components/PlanetBlock/PlanetBlock";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import StakingBlock from "../components/StakingBlock/StakingBlock";
import LatestNewsBlock from "../components/LatestNewsBlock/LatestNewsBlock";
import AllocationBlock from "../components/AllocationBlock/AllocationBlock";
import axios from "axios";
import IframeModal from "../components/ui/IframeModal/IframeModal";
import { AnimatePresence } from "framer-motion";
import fs from "fs";
import moment from "moment";
import path from "path";

export async function getServerSideProps({ locale }: { locale: string }) {
  let res;
  let items = [];

  try {
    const filePath = path.resolve(__dirname, 'medium.json');
    let file;

    if(fs.existsSync(filePath)) {
      file  = fs.readFileSync( filePath, {encoding:'utf8'});
    }
    const dateForCompare = moment().add(1, 'hours').unix();
    const nowDate = moment().unix();

    if (file) {
      const tempObject = JSON.parse(file);
      if (tempObject.lastUpdate && tempObject.lastUpdate < nowDate) {
        res = await axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@planet_IX"
        );
        console.log('query');
        items = res?.data?.items || [];
        fs.writeFileSync(filePath, JSON.stringify({items, lastUpdate:dateForCompare}));

      }
      else {
        console.log('not query');

        items = tempObject.items;
      }

    }
    else {
      res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@planet_IX"
      );
      console.log('query');
      items = res?.data?.items || [];
      fs.writeFileSync(filePath, JSON.stringify({items, lastUpdate:dateForCompare}));
    }

  } catch (e: any) {
    console.log(e);
    res = e?.response?.data;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      res: items,
    },
  };
}

const Landing = ({ res }: { res: any }) => {
  const [isTrailerModalShown, setTrailerModalShown] = useState(false);

  const modalHandler = () => setTrailerModalShown(!isTrailerModalShown);

  return (
    <>
      <Head>
        <title>Introducing IXT | IX Foundation</title>
        <meta
          name="description"
          content="IX Token (IXT) is the in-game utility token facilitating transactions on the Planet IX Marketplace. Token holders will shape the future of Planet IX by signaling their support for upgrades to the ecosystem and directing usage of a Community Treasury."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <SectionWrapper backgroundColor={"#0B0B0C"}>
          <HeroBlock modalHandler={modalHandler} />
        </SectionWrapper>
        <div css={s.heroBannerWrapperCss}>
          <>
            <div css={s.tiltCss}>
              <Tilt
                tiltReverse={true}
                scale={1.1}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionSpeed={1500}
              >
                <div css={s.heroBannerCss}>
                  <HeroBanner />
                </div>
              </Tilt>
            </div>
            <div css={s.mobileTilt}>
              <MobileHeroBanner />
            </div>
          </>
        </div>
        <SectionWrapper
          backgroundColor={
            "linear-gradient(255.96deg, #1E1F22 0%, #0F0F10 100%)"
          }
        >
          <AboutBlock />
        </SectionWrapper>
        <PlanetBlock modalHandler={modalHandler} />

        <SectionWrapper
          backgroundColor={
            "linear-gradient(255.96deg, #1E1F22 0%, #0F0F10 100%)"
          }
        >
          <StakingBlock />
        </SectionWrapper>
        <SectionWrapper backgroundColor={"#0B0B0C"}>
          <AllocationBlock />
        </SectionWrapper>
        <SectionWrapper backgroundColor={"#0B0B0C"}>
          <LatestNewsBlock items={res} />
        </SectionWrapper>
      </RootLayout>

      <AnimatePresence>
        {isTrailerModalShown && <IframeModal modalHandler={modalHandler} />}
      </AnimatePresence>
    </>
  );
};

export default Landing;
