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
    resPartner: [{[key:string] : any;}];
}

const BalancePerformance = (props: BalancePerformanceProps) => {
    const { dataArray, borderColorBalance, borderColorContracts, resPartner } = props;
    const language = resPartner[0].coinsturn_language;
    return (
    <Line
      data={{
        labels: dataArray.labels,
        datasets: [
          {
            label: language == "es"? "Rendimiento del Valor de Cobertura": "Coverage Value Performance",
            data: dataArray.balanceData,
            borderColor: borderColorBalance,
            backgroundColor: borderColorBalance,
            tension: 0.2,
            pointRadius: 0,
            pointHitRadius : 8
          },
          {
            label: language == "es"? "Rendimiento del Valor Actual" : "Current Value Performance",
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
          yAxes: {
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
      redraw={false}
    />
  );
};

export default BalancePerformance;
