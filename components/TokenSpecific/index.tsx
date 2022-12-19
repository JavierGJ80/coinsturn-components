import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import { prettifyNumber } from "./scripts"
import { LineChart, Line, YAxis, } from 'recharts';
import { ChartType } from "defi-sdk/lib/entities/Chart";
import coinDescription from "./diccionario.json";
import TableCoins from "./components/TableCoins";

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
import { Line as ChartJsLine } from "react-chartjs-2";

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

const timeList: any = {
  h: 1 / 24,
  d: 1,
  w: 7,
  m: 30,
  y: 365,
};

export interface TokenSpecificProps {
  backgroundColor : string;
  fontColor : string;
  asset : string
  resPartner : [{[key:string] : any;}];
}

interface Coin {
  [key:string] : any;
  image? : string;
  symbol? : string;
}

const TokenSpecific = (props: TokenSpecificProps) => {
  const { backgroundColor, fontColor, asset, resPartner } = props
  const [coin, setCoin] = useState<Coin>({});
  const [time, setTime] = useState('d');
  const [graphData, setGraphData] = useState([1]);
  const [graphLabels, setGraphLabels] = useState([new Date()]);
  const [stats, setStats] = useState([]);
  const [color,setColor] = useState("");
  const [data,setData] =useState<{[key:string] : any}[]>([]);
  const [coins, setCoins] = useState([]);
  const language = resPartner[0].language

  const getData = async () => {
    try {
      const coinData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${asset}&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h%2C7d`
      );
      const { data }= await axios.get(
        `https://api.coingecko.com/api/v3/coins/${asset}/market_chart?vs_currency=usd&days=${timeList[time]}`
      );
      const Labels = Object.values(data.prices).map((entry:any) => {
        const epoch = new Date(0);
        epoch.setUTCMilliseconds(entry[0]);
        return epoch;
      });
      const Values = Object.values(data.prices).map((entry:any) => entry[1]);
      setGraphLabels(Labels);
      setGraphData(Values);
      setCoin(coinData.data[0]);

      const topData = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20matic-network%2C%20solana%2C%20chainlink%2C%20wrapped-bitcoin%2C%20aave%2C%20decentraland%2C%20fantom&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h%2C7d"
      );
      const statsData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${asset}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
      );
      // @ts-ignore
      const topValues = topData.data.sort((a,b) => b.price_change_percentage_7d_in_currency-a.price_change_percentage_7d_in_currency).slice(0,3);
      setCoins(topValues);
      setStats(statsData.data[0]);

      const coin=topData.data[0]
      const dataHistoric = []
      for(let price_len = 0; price_len < coin.sparkline_in_7d.price.length - 1; price_len += Math.round(coin.sparkline_in_7d.price.length/7)){
        const next_number = price_len + Math.round(coin.sparkline_in_7d.price.length/7)
        dataHistoric.push( next_number >= (coin.sparkline_in_7d.price.length - 1) ? {name:"", uv:coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1]} : {name:"", uv:coin.sparkline_in_7d.price[price_len]})
      }
      setData(dataHistoric);
      setColor (coin.sparkline_in_7d.price[0] < coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1] ? "green" : "red");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData()
  }, [time]);

  return (
    <div className="tokenSpecificMainContainer" style={{ backgroundColor :  backgroundColor, color : fontColor }}>
      <div className="tokenSpecificLeftContainer">
        <div className="tokenSpecificHeader">
          <img src={coin.image} style={{width:"60px", height:"60px"}}></img>
          <div className="dividerText">
          <span style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", color:"#FFFFFF"}}>{coin.name}</span>
          <span className='text-muted'>{coin.symbol}</span>
          </div>
        </div>
        <div className="tokenSpecificGraphContainer">
          <div className="headerGraphContainer">
            <text style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", color:"#AEAEAE"}}>{language == "es" ? `Precio de ${asset.replace("-"," ").replace("-"," ")}`: `${asset.replace("-"," ").replace("-"," ")} price`}</text>
            <div className="tokenSpecificGraphInfo">
              <text style={{fontWeight:600, fontSize:"40px", lineHeight:"100%"}}>{prettifyNumber(coin.current_price, 2, 'null', '$')}</text>
              <text style={{fontWeight:400, fontSize:"18px", lineHeight:"100%", color:coin.price_change_percentage_7d_in_currency < 0 ? "#DF5656" : "#4CF049"}}>
                {coin.price_change_percentage_7d_in_currency < 0 ? prettifyNumber(Math.abs(coin.price_change_percentage_7d_in_currency),2,'%','↘︎'):prettifyNumber(coin.price_change_percentage_7d_in_currency,2,'%','↗︎')}
              </text>
            </div>
          </div>
          <div className="tokenSpecificGraphRender">
            <ChartJsLine
              data={{
                labels: graphLabels,
                datasets: [
                  {
                    label: asset,
                    data: graphData,
                    // @ts-ignore
                    borderColor: coinDescription[asset].color,
                    // @ts-ignore
                    backgroundColor: coinDescription[asset].color,
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
                    grid: {
                      drawOnChartArea: false,
                    },
                  },
                },
              }}
              redraw={false}
            />
          </div>
          <div className="tokenSpecificButtonRow">
            <button className={time == 'h'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('h')}>Hour</button>
            <button className={time == 'd'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('d')}>Day</button>
            <button className={time == 'w'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('w')}>Week</button>
            <button className={time == 'm'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('m')}>Month</button>
            <button className={time == 'y'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('y')}>Year</button>
          </div>
        </div>
        <div className="tokenSpecificCoinStats">
          <header>{`¿Que es ${asset.replace("-"," ").replace("-"," ")}?`}</header>
          {/* @ts-ignore */}
          <text>{coinDescription[asset].es}</text>
          <header>{`El precio de ${asset.replace("-"," ").replace("-"," ")} `}</header>
          {/* @ts-ignore */}
          <text>{`El precio de ${asset.replace("-"," ").replace("-"," ")} hoy es de ${stats.current_price} con un volumen de comercio de ${stats.total_volume} en 24 horas. El precio cambiado a ${stats.price_change_percentage_24h} en las últimas 24 horas. Tiene una oferta circulante de ${stats.circulating_supply} millones${stats.symbol} monedas y una oferta total de ${stats.total_supply} millones. Si quiere comprar ${asset.replace("-"," ").replace("-"," ")}, Coinsturn es actualmente el mercado mas seguro.`}</text>
        </div>
      </div>
      <div className="tokenSpecificRightContainer">
      <div className="tokenSpecificStatsTab">
          
          <header style={{fontWeight:400, fontSize:"22px", lineHeight:"100%", color:"#AEAEAE"}}>Estadísticas de precio</header>
          <div className="tokenSpecificStatsDiv">
            <header>{`Precio de ${asset.replace("-"," ")}`}</header>
            {/* @ts-ignore */}
            <text>{prettifyNumber(stats.current_price, 2, 'null', '$ ')}</text>
          </div>
          <div className="tokenSpecificStatsDiv">
            <header>{"Capitalización de mercado"}</header>
            {/* @ts-ignore */}
            <text>${prettifyNumber(stats.market_cap, 0, 'null', 'null')}</text>
          </div>
          <div className="tokenSpecificStatsDiv">
            <header>{"Ranking Capitalización de mercado"}</header>
            {/* @ts-ignore */}
            <text># {stats.market_cap_rank}</text>
          </div>
          <div className="tokenSpecificStatsDiv">
            <header>{"Volumen de comercio"}</header>
            {/* @ts-ignore */}
            <text>{prettifyNumber(stats.total_volume, 2, 'null', 'null')} </text>
          </div>
          <div className="tokenSpecificStatsDiv">
            <header>{"Máximo en 24h"}</header>
            {/* @ts-ignore */}
            <text>{prettifyNumber(stats.high_24h, 2, 'null', '$ ')}</text>
          </div>
          <div className="tokenSpecificStatsDiv">
            <header>{"Mínimo en 24h"}</header>
            {/* @ts-ignore */}
            <text>{prettifyNumber(stats.low_24h, 2, 'null', '$ ')}</text>
          </div>
          <div className="tokenSpecificStatsDiv">
            <header>{"Total en circulación"}</header>
            {/* @ts-ignore */}
            <text>{prettifyNumber(stats.circulating_supply, 2, 'null', '$ ')} {stats.symbol}</text>
          </div>
        </div>
        <div className="tokenSpecificTableCoinsContainer">
          <TableCoins coins={coins}/>
        </div>
      </div>
    </div>
  );
};

export default TokenSpecific;