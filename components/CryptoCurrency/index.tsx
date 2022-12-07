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

client.configure({ url: "wss://api-v4.zerion.io/", apiToken: "BackofficeCoinsturn.1Vf6l3CiuLNaEoHsewF6OYiOzAzULZ2x" });

function AssetsCharts({
  asset,
  charts_type,
  borderColor,
}: {
  asset: string;
  charts_type: ChartType;
  borderColor: string;
}){
  let Labels:Date[] = [new Date()];
  let Values:number[] = [1];
  const { data, status } = useAssetsCharts({asset_codes: [assetList[asset]], charts_type, currency : 'usd'})
  // if (status === DataStatus.requested) {
  //   return <span>Loading...</span>;
  // }
  if (!data) {
    return <Line
      data={{
        labels: Labels,
        datasets: [
          {
            label: asset,
            data: Values,
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
    />;
  }
  Labels = Object.values(data!.charts)[0].map((entry) => {
        const epoch = new Date(0);
        epoch.setUTCSeconds(entry[0]);
        return epoch;
      });
  Labels = Labels.reverse()
  Values = Object.values(data!.charts)[0].map(
    (entry) => entry[1]
  );
  Values = Values.reverse()
  return (
    <Line
      data={{
        labels: Labels,
        datasets: [
          {
            label: asset,
            data: Values,
            borderColor: borderColor,
            backgroundColor: borderColor,
            tension: 0.2,
            pointRadius: 0,
            pointHitRadius : 16
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
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
      redraw={false}
    />
  );
}

export interface CryptoCurrencyProps {
    asset: string;
    charts_type: ChartType;
    borderColor: string;
}

const CryptoCurrency = (props: CryptoCurrencyProps) => {
  const { asset, charts_type, borderColor } = props
  const [graphData, setGraphData] = useState([1]);
  const [graphLabels, setGraphLabels] = useState([new Date()]);
  useEffect(() => {
    if (["BTC", "CBTC"].includes(asset)) {
      try {
        fetchHistoricBitcoinData();
      } catch (e) {
        console.log(e);
      }
    }
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


  return(["BTC", "CBTC"].includes(asset)?
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
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        }}
        redraw={false}
      />
    :
    (["COVER", "ETH", "USDT"].includes(asset)? 
      <AssetsCharts asset={asset} charts_type={charts_type} borderColor={borderColor} />
      :
      <span>Invalid token</span>
    )
  );
};

export default CryptoCurrency;
