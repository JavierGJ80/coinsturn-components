import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
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
const assetList = {
  COVER: "0xe93668a56db4273a7cc079423a8f6a9911ad3c1d",
  ETH: "eth",
  USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
};
const timeList = {
  h: 1 / 24,
  d: 1,
  w: 7,
  m: 30,
  y: 365,
};
const BASE_URL = "wss://api-v4.zerion.io/";
const addressSocket = {
  namespace: "assets",
  socket: io(`${BASE_URL}assets`, {
    transports: ["websocket"],
    timeout: 60000,
    query: {
      api_token: "BackofficeCoinsturn.1Vf6l3CiuLNaEoHsewF6OYiOzAzULZ2x",
    },
  }),
};

const Graphline = React.forwardRef((props, ref) => {
  const { asset, timeSet, borderColor } = props;
  const [graphData, setGraphData] = useState([1, 2, 3, 4]);
  const [graphLabels, setGraphLabels] = useState([1, 2, 3, 4]);
  const [emitter, setEmitter] = useState(null);
  const fetchHistoricBitcoinData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeList[timeSet]}`
    );
    const Labels = data.prices.map((entry) => {
      const epoch = new Date(0);
      epoch.setUTCMilliseconds(entry[0]);
      return epoch;
    });
    const Values = data.prices.map((entry) => entry[1]);
    console.log(Values);
    setGraphData(Values.reverse());
    setGraphLabels(Labels.reverse());
  };

  useEffect(() => {
    if (["COVER", "ETH", "USDT"].includes(asset)) {
      const chartReqBodyEffect = {
        scope: ["charts"],
        payload: {
          asset_codes: [assetList[asset]],
          currency: "usd",
          charts_type: timeSet,
        },
      };
      setEmitter(addressSocket.socket.emit("get", chartReqBodyEffect));
      function handleReceive(data) {
        const Labels = Object.values(data.payload.charts)[0].map((entry) => {
          const epoch = new Date(0);
          epoch.setUTCSeconds(entry[0]);
          return epoch;
        });
        const Values = Object.values(data.payload.charts)[0].map(
          (entry) => entry[1]
        );
        setGraphData(Values.reverse());
        setGraphLabels(Labels.reverse());
      }
      const model = chartReqBodyEffect.scope[0];
      addressSocket.socket.once(
        `received ${addressSocket.namespace} ${model}`,
        handleReceive
      );
      return function unsubscribe() {
        addressSocket.socket.off(
          `received ${addressSocket.namespace} ${model}`,
          handleReceive
        );
        addressSocket.socket.emit("unsubscribe", chartReqBodyEffect);
      };
    }
    if (["BTC", "CBTC"].includes(asset)) {
      try {
        fetchHistoricBitcoinData();
      } catch (e) {
        console.log(e);
      }
    }
  }, [timeSet, asset]);

  return (
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
        },
      }}
    />
  );
});

export default Graphline;
