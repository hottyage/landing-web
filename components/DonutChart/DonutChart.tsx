import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({
  height,
  width,
  spacing,
}: {
  height: number;
  width: number;
  spacing: number;
}) => {
  const chartData = Array(100).fill(1);

  const getBackgroundColors = (array: any) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].percent; j++) {
        result.push(array[i].color);
      }
    }
    return result;
  };

  const data = {
    labels: [],

    datasets: [
      {
        spacing: spacing,
        cutout: "65%",
        data: chartData,
        backgroundColor: getBackgroundColors([
          { percent: 18, color: "#303030" },
          { percent: 16, color: "#E7E7E7" },
          { percent: 41, color: "#84D5BC" },
          { percent: 15, color: "#FF6647" },
          { percent: 8, color: "#F6BA1E" },
        ]),

        borderWidth: 0,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      width={width}
      height={height}
      id={"test"}
      options={{
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
