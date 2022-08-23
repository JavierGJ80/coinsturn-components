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
    labels: string[];
    data: number[];
    borderColor: string;
}

const ContractPerformance = React.forwardRef((props: ContractPerformanceProps, ref) => {
    const { labels, data, borderColor} = props;
    return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: "Contract Performance",
            data: data,
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
    />
  );
});

export default ContractPerformance;
