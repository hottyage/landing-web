import React from "react";
import { Pie } from "@nivo/pie";
import { animated } from "@react-spring/web";

const getColor = () => {
  return "transparent";
};

const data = [
  {
    id: 1,
    label: "Airdrop",
    value: 18.21,
  },
  {
    id: 2,
    label: "Liquidity Event",
    value: 16.23,
  },
  {
    id: 3,
    label: "Ecosystem Fund",
    value: 41.04,
  },
  {
    id: 4,
    label: "Staking Rewards",
    value: 15.99,
  },
  {
    id: 5,
    label: "Investors & Advisors",
    value: 8.53,
  },
];

const Chart = ({
  width,
  height,
  margin,
  arcLinkLabelsDiagonalLength,
  arcLinkLabelsStraightLength,
}: {
  width: number;
  height: number;
  margin: number;
  arcLinkLabelsDiagonalLength: number;
  arcLinkLabelsStraightLength: number;
}) => (
  <Pie
    colors={getColor}
    data={data}
    innerRadius={0.75}
    activeInnerRadiusOffset={3}
    activeOuterRadiusOffset={8}
    arcLinkLabelsTextOffset={12}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsColor="rgba(249, 249, 249, 0.5)"
    arcLinkLabelsThickness={1}
    arcLinkLabelsOffset={-23}
    arcLinkLabelsDiagonalLength={arcLinkLabelsDiagonalLength}
    arcLinkLabelsStraightLength={arcLinkLabelsStraightLength}
    arcLabelsSkipAngle={10}
    isInteractive={false}
    enableArcLabels={false}
    arcLinkLabel={(data) => `${data.value}% ${data.label}`}
    width={width}
    height={height}
    margin={{ top: margin, right: margin, bottom: margin, left: margin }}
    arcLinkLabelComponent={({ style, label, ...props }) => {
      return (
        <animated.g opacity="1">
          <animated.path
            fill="none"
            stroke="rgba(249, 249, 249, 0.5)"
            strokeWidth="1"
            d={style.path}
          />
          <animated.text
            transform={style.textPosition}
            textAnchor={style.textAnchor}
            dominantBaseline="central"
            style={{
              fill: style.textColor,
            }}
          >
            <tspan
              x={props.datum.label === "Liquidity Event" ? "-20px" : "0"}
              dy="-10px"
            >
              {props.datum.value}%
            </tspan>
            <tspan
              x={props.datum.label === "Liquidity Event" ? "-20px" : "0"}
              dy="20px"
            >
              {props.datum.label}
            </tspan>
          </animated.text>
        </animated.g>
      );
    }}
  />
);
export default Chart;
