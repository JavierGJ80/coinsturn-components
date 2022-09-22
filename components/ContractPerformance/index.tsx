import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface ContractPerformanceProps {
    dataArray: {
      labels: string[];
      data: number[];
    }
    borderColor: string;
}

const ContractPerformance = (props: ContractPerformanceProps) => {
    const { dataArray, borderColor} = props;
    return (
    <Line
      data={{
        labels: dataArray.labels,
        datasets: [
          {
            label: "Contract Performance",
            data: dataArray.data,
            borderColor: borderColor,
            backgroundColor: borderColor,
            tension: 0.2,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          xAxes: {
            display: false,
          },
        },
      }}
      redraw={false}
    />
  );
};

export default ContractPerformance;
