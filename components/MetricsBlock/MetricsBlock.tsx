/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import * as s from "./styles";
import Barcode from "../../assests/svg/barcode.svg";
import BarcodeMob from  "../../assests/svg/barcodeMob.svg"
import { Title } from "../ui/Title/Title";
import { useTranslation } from "next-i18next";
import Hex from "../../assests/svg/hexagon.svg"

const mainItems = [
  {
    amount: "23.7M",
    text: "landing.metrics-section.sub-title.Circulating",
  },
  {
    amount: "121.2M",
    text: "landing.metrics-section.sub-title.Total",
  },
  {
    amount: "$182M",
    text: "landing.metrics-section.sub-title.Market",
  },
];
const smallBlock = [
  {
    amount: "$3.6",
    text: "landing.metrics-section.sub-title.Market.Presale price",
  },
  {
    amount: "$12.6",
    text: "landing.metrics-section.sub-title.Market.Current price",
  },
  {
    amount: "$3.6",
    text: "landing.metrics-section.sub-title.Market.Presale price",
  },
  {
    amount: "$12.6",
    text: "landing.metrics-section.sub-title.Market.Current price",
  },
];

const MetricsBlock = () => {
  const { t } = useTranslation();
  return (
    <div css={s.mainWrapCss}>
      <Barcode css={s.barcode}/>
      <BarcodeMob css={s.barcodeMob}/>
      <Title label={t("landing.metrics-section.title")} addCss={s.titleCss}/>
      
        <div css={s.mainContent}>

          {mainItems.map((item,index) => (
            <div css={s.itemBlock} key={item.text + index} >
              <div>
                <Title label={t(item.amount)} />
              </div>
              <div css={s.smallBlockText}>{t(item.text)}</div>
              <Hex/>
            </div>
          ))}
        </div>
        <div css={s.smallBlockContainer} >
        {smallBlock.map((item,index) => (
            <div css={s.smallBlock} key={item.text + index}>
              <div>
                <Title label={t(item.amount)} addCss={s.smallBlockTittle}/>
              </div>
              <div  css={s.smallBlockText}>{t(item.text)}</div>
            </div>
          ))}
        </div>

    </div>
  );
};

export default MetricsBlock;
