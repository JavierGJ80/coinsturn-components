import React, { useRef } from "react";
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
  };
  borderColorBalance: string;
  borderColorContracts: string;
  resPartner: [{ [key: string]: any }];
}

const BalancePerformance = (props: BalancePerformanceProps) => {
  const { dataArray, borderColorBalance, borderColorContracts, resPartner } = props;
  const language = resPartner[0].coinsturn_language;
  const isBalanceZero = dataArray.balanceData.every((val) => val === 0);
  const chartContainer = useRef<HTMLDivElement>(null);

  const data = {
    labels: dataArray.labels,
    datasets: [
      {
        label: isBalanceZero ? "" : language === "es" ? "Rendimiento del Valor de Cobertura" : "Coverage Value Performance",
        data: isBalanceZero ? [] : dataArray.balanceData,
        borderColor: isBalanceZero ? "rgba(0,0,0,0)" : borderColorBalance,
        backgroundColor: isBalanceZero ? "rgba(0,0,0,0)" : borderColorBalance,
        tension: 0.2,
        pointRadius: 0,
        pointHitRadius: 8,
      },
      {
        label: language === "es" ? "Rendimiento del Valor Actual" : "Current Value Performance",
        data: dataArray.contractsData,
        borderColor: borderColorContracts,
        backgroundColor: borderColorContracts,
        tension: 0.2,
        pointRadius: 0,
        pointHitRadius: 8,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        precision: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div ref={chartContainer} style={{ width: "100%", height: "100vh" }}>
      <Line data={data} options={options} width={"100vw"} height={341} redraw={false} />
    </div>
  );
};

export default BalancePerformance;