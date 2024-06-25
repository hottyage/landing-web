/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { css, jsx } from "@emotion/react";
import DonutChart from "../DonutChart/DonutChart";
import useOnScreen from "../../hooks/useOnScreen";
import * as s from "./styles";
import { Title } from "../ui/Title/Title";
import { useTranslation } from "next-i18next";
import Arrow from "../../assests/svg/allocation-arrow.svg";
import Chart from "./Chart";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const AllocationBlock = () => {
  const ref: any = useRef<HTMLDivElement>();
  const { t } = useTranslation();
  const { width }: { width: number } = useWindowDimensions();
  const [rootMargin, setRootMargin] = useState("0px");
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, rootMargin);
  const chartSizes = {
    mobileSmall: {
      mainHeight: "199px",
      mainWidth: "199px",
      donutChartHeight: 199,
      donutChartWidth: 199,
      donutChartSpacing: 80,
      chartHeight: 350,
      chartWidth: width || 300,
      chartMargin: 50,
      arcLinkLabelsDiagonalLength: 10,
      arcLinkLabelsStraightLength: 5,
    },
    mobile: {
      mainHeight: "199px",
      mainWidth: "199px",
      donutChartHeight: 199,
      donutChartWidth: 199,
      donutChartSpacing: 80,
      chartHeight: 400,
      chartWidth: 500,
      chartMargin: 80,
      arcLinkLabelsDiagonalLength: 10,
      arcLinkLabelsStraightLength: 5,
    },
    medium: {
      mainHeight: "225px",
      mainWidth: "225px",
      donutChartHeight: 225,
      donutChartWidth: 225,
      donutChartSpacing: 80,
      chartHeight: 625,
      chartWidth: 625,
      chartMargin: 175,
      arcLinkLabelsDiagonalLength: 20,
      arcLinkLabelsStraightLength: 10,
    },
    big: {
      mainHeight: "343px",
      mainWidth: "343px",
      donutChartHeight: 343,
      donutChartWidth: 343,
      donutChartSpacing: 125,
      chartHeight: 750,
      chartWidth: 750,
      chartMargin: 175,
      arcLinkLabelsDiagonalLength: 20,
      arcLinkLabelsStraightLength: 10,
    },
  };
  const [chartSize, setChatSize] = useState(chartSizes.big);
  useEffect(() => {
    setRootMargin(width > 700 ? "-350px" : "0px");

    switch (true) {
      case width > 1320:
        setChatSize(chartSizes.big);
        break;
      case width < 1320 && width > 1100:
        setChatSize(chartSizes.medium);
        break;
      case width < 1026 && width > 500:
        setChatSize(chartSizes.mobile);
        break;
      case width < 600:
        setChatSize(chartSizes.mobileSmall);
        break;
    }
  }, [width]);

  return (
    <div ref={ref} css={s.mainWrapCss}>
      <div css={s.textBlockCss}>
        <Title
          label={t("landing.allocation-section.title")}
          addCss={s.titleCss}
        />

        <Arrow />
      </div>

      <div css={s.cartWrapCss(chartSize.mainHeight, chartSize.mainWidth)}>
        {onScreen && (
          <DonutChart
            height={chartSize.donutChartHeight}
            width={chartSize.donutChartWidth}
            spacing={chartSize.donutChartSpacing}
          />
        )}
        <AnimatePresence>
          {onScreen && (
            <motion.div
              css={s.backgroundChartCss}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
            >
              <Chart
                width={chartSize.chartWidth}
                height={chartSize.chartHeight}
                margin={chartSize.chartMargin}
                arcLinkLabelsDiagonalLength={
                  chartSize.arcLinkLabelsDiagonalLength
                }
                arcLinkLabelsStraightLength={
                  chartSize.arcLinkLabelsStraightLength
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllocationBlock;
