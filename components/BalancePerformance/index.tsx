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

export interface BalancePerformanceProps {
    dataArray: {
      labels: string[];
      balanceData: number[];
      contractsData: number[];
    }
    borderColorBalance: string;
    borderColorContracts: string;

}

const BalancePerformance = (props: BalancePerformanceProps) => {
    const { dataArray, borderColorBalance, borderColorContracts} = props;
    return (
    <Line
      data={{
        labels: dataArray.labels,
        datasets: [
          {
            label: "Balance Performance",
            data: dataArray.balanceData,
            borderColor: borderColorBalance,
            backgroundColor: borderColorBalance,
            tension: 0.2,
            pointRadius: 0,
            pointHitRadius : 8
          },
          {
            label: "Balance Performance of contracts",
            data: dataArray.contractsData,
            borderColor: borderColorContracts,
            backgroundColor: borderColorContracts,
            tension: 0.2,
            pointRadius: 0,
            pointHitRadius : 8
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: true,
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

export default BalancePerformance;
