import React, { useState, useEffect } from "react";
import axios from "axios";
import { client, DataStatus, useAssetsCharts } from "defi-sdk";
import { ChartType } from "defi-sdk/lib/entities/Chart";

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
const assetList: any = {
  COVER: "0xe93668a56db4273a7cc079423a8f6a9911ad3c1d",
  ETH: "eth",
  USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
};
const timeList: any = {
  h: 1 / 24,
  d: 1,
  w: 7,
  m: 30,
  y: 365,
};

export interface CryptoCurrencyV2Props {
    asset: string;
    charts_type: ChartType;
    borderColor: string;
}

const CryptoCurrencyV2 = (props: CryptoCurrencyV2Props) => {
  const { asset, charts_type, borderColor } = props
  const [graphData, setGraphData] = useState([1]);
  const [graphLabels, setGraphLabels] = useState([new Date()]);
  useEffect(() => {
    switch (asset){
      case "BTC":
        try {
        fetchHistoricBitcoinData();
        } catch (e) {
          console.log(e);
        }
        break;
      case "CBTC":
        try {
        fetchHistoricBitcoinData();
        } catch (e) {
          console.log(e);
        }
        break;
      case "USDT":
        try {
        fetchHistoricTetherData();
        } catch (e) {
          console.log(e);
        }
        break;
      case "ETH":
        try {
        fetchHistoricEthData();
        } catch (e) {
          console.log(e);
        }
        break;
      default:
        break;
    };
  }, [charts_type, asset]);

  const fetchHistoricBitcoinData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeList[charts_type]}`
    );
    const Labels = Object.values(data.prices).map((entry:any) => {
      const epoch = new Date(0);
      epoch.setUTCMilliseconds(entry[0]);
      return epoch;
    });
    const Values = Object.values(data.prices).map((entry:any) => entry[1]);
    setGraphData(Values);
    setGraphLabels(Labels);
  };
  const fetchHistoricEthData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${timeList[charts_type]}`
    );
    const Labels = Object.values(data.prices).map((entry:any) => {
      const epoch = new Date(0);
      epoch.setUTCMilliseconds(entry[0]);
      return epoch;
    });
    const Values = Object.values(data.prices).map((entry:any) => entry[1]);
    setGraphData(Values);
    setGraphLabels(Labels);
  };
  const fetchHistoricTetherData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=${timeList[charts_type]}`
    );
    const Labels = Object.values(data.prices).map((entry:any) => {
      const epoch = new Date(0);
      epoch.setUTCMilliseconds(entry[0]);
      return epoch;
    });
    const Values = Object.values(data.prices).map((entry:any) => entry[1]);
    setGraphData(Values);
    setGraphLabels(Labels);
  };


  return(
      <Line
        data={{
          labels: graphLabels,
          datasets: [
            {
              label: asset,
              data: graphData,
              borderColor: borderColor,
              backgroundColor: borderColor,
              tension: 0.2,
              pointRadius: 0,
              pointHitRadius : 8
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
            yAxes: {
              beginAtZero: false,
            },
          },
        }}
        redraw={false}
      />);
};

export default CryptoCurrencyV2;
