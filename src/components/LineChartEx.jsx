import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const LineChartEx = ({ data }) => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChartEx;
