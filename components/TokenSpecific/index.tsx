import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import { prettifyNumber } from "./scripts"
import { LineChart, Line, YAxis, } from 'recharts';
import { ChartType } from "defi-sdk/lib/entities/Chart";
import coinDescription from "./diccionario.json";
import TableCoins from "./components/TableCoins";
import { useParams } from "react-router-dom"
import ColorTheme from "../MarketInfo/components/ColorTheme.json";

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
  resPartner : [{[key:string] : any;}];
  theme: string;
}

interface Coin {
  [key:string] : any;
  image? : string;
  symbol? : string;
}

const TokenSpecific = (props: TokenSpecificProps) => {
  const { resPartner, theme } = props
  const { asset } = useParams<{ asset : string }>();
  const [coin, setCoin] = useState<Coin>({});
  const [time, setTime] = useState('d');
  const [graphData, setGraphData] = useState([1]);
  const [graphLabels, setGraphLabels] = useState([new Date()]);
  const [stats, setStats] = useState([]);
  const [color,setColor] = useState("");
  const [data,setData] =useState<{[key:string] : any}[]>([]);
  const [coins, setCoins] = useState([]);
  const language = resPartner[0].coinsturn_language

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
    <div>
      {/* @ts-ignore */}
      <div className="full-component" style={{"backgroundColor":ColorTheme.content[theme]}}>
        <div className="tokenSpecificMainContainer">
          <div className="tokenSpecificLeftContainer">
            <div className="tokenSpecificHeader">
              <img src={coin.image} style={{width:"60px", height:"60px"}}></img>
              <div className="dividerText">
                {/* @ts-ignore */}
              <span className="tit" style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", "color":ColorTheme.numbers[theme]}}>{coin.name}</span>
              <span className='text-muted'>{coin.symbol}</span>
              </div>
            </div>
            {/* @ts-ignore */}
            <div className="tokenSpecificGraphContainer" style={{"backgroundColor":ColorTheme.background[theme],"borderColor":ColorTheme.strokes[theme]}}>
              <div className="headerGraphContainerTab">
                {/* @ts-ignore */}
                <text className="tit" style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", "color":ColorTheme.text[theme]}}>{language == "es" ? `Precio de ${coin.name}`: `${coin.name} price`}</text>
                <div className="tokenSpecificGraphInfo">
                  {/* @ts-ignore */}
                  <text className="gig" style={{fontWeight:600, fontSize:"40px", lineHeight:"100%", "color":ColorTheme.numbers[theme]}}>{prettifyNumber(coin.current_price, 2, 'null', '$')}</text>
                  <text className="med" style={{fontWeight:400, fontSize:"18px", lineHeight:"100%", color:"#7ac486"}}>
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
                        borderColor: (coinDescription[asset]? coinDescription[asset].color : "white"),
                        // @ts-ignore
                        backgroundColor: (coinDescription[asset]? coinDescription[asset].color : "white"),
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
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'h'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('h')}>{language=="es"?"Hora":"Hour"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'd'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('d')}>{language=="es"?"Día":"Day"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'w'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('w')}>{language=="es"?"Semana":"Week"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'm'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('m')}>{language=="es"?"Mes":"Month"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'y'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('y')}>{language=="es"?"Año":"Year"}</button>
              </div>
            </div>
            {/* @ts-ignore */}
            <div className="tokenSpecificCoinStats" style={{"color":ColorTheme.text[theme]}}>
              {/* @ts-ignore */}
              <header style={{"color":ColorTheme.titles[theme]}}>{language=="es"?`¿Qué es ${coin.name}?`:`What is ${coin.name}?`}</header>
              {/* @ts-ignore */}
              <text>{(coinDescription[asset] ? coinDescription[asset][language] : " ")}</text>
              {/* @ts-ignore */}
              <header style={{"color":ColorTheme.titles[theme],}}>{language=="es"?`El precio de ${coin.name}`:`Price of ${coin.name}`}</header>
              {/* @ts-ignore */}
              <text>{language=="es"?`El precio de ${coin.name} hoy es de ${prettifyNumber(stats.current_price, 2, 'null', '$ ')} con un volumen de comercio de ${prettifyNumber(stats.total_volume, 2, 'null', '$ ')} en 24 horas. El precio cambiado a ${prettifyNumber(stats.price_change_percentage_24h, 0, 'null', 'null')} en las últimas 24 horas. Tiene una oferta circulante de ${prettifyNumber(stats.circulating_supply, 2, 'null', '$ ')} millones${stats.symbol} monedas y una oferta total de ${prettifyNumber(stats.total_supply, 2, 'null', 'null')}. Si quiere comprar ${coin.name}, Coinsturn es actualmente el mercado mas seguro.`:
              /* @ts-ignore */
              `${coin.name} price today is ${prettifyNumber(stats.current_price, 2, 'null', '$ ')} with a 24-hour trade volume of ${prettifyNumber(stats.total_volume, 2, 'null', '$ ')}. The price changed to ${prettifyNumber(stats.price_change_percentage_24h, 0, 'null', 'null')} in the last 24 hours. It has a circulating supply of ${prettifyNumber(stats.circulating_supply, 2, 'null', '$ ')} ${stats.symbol} coins and a total supply of ${prettifyNumber(stats.total_supply, 2, 'null', 'null')}. If you want to buy ${coin.name}, Coinsturn is currently the safest marketplace.`}</text>
            </div>
          </div>
          <div className="tokenSpecificRightContainer">
            {/* @ts-ignore */}
          <div className="tokenSpecificStatsTab" style={{"backgroundColor":ColorTheme.background[theme], "borderColor":ColorTheme.strokes[theme]}}>
              {/* @ts-ignore */}
              <header className="tit" style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", "color":ColorTheme.text[theme]}}>{language=="es"?"Estadísticas de precio":"Price stats"}</header>
              {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?`Precio de ${coin.name}`:`${coin.name} price`}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.current_price, 2, 'null', '$ ')}</text>
              </div>
                {/* @ts-ignore */}
              <div style={{"color":ColorTheme.text[theme]}} className="tokenSpecificStatsDiv">
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Capitalización de mercado":"Market capitalization"}</header>
                {/* @ts-ignore */}
                <text>${prettifyNumber(stats.market_cap, 0, 'null', 'null')}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Ranking Capitalización de mercado":"Market capitalization ranking"}</header>
                {/* @ts-ignore */}
                <text># {stats.market_cap_rank}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Volumen de comercio":"Trade volume"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.total_volume, 2, 'null', '$ ')} </text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Máximo en 24h":"24h maximum"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.high_24h, 2, 'null', '$ ')}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Mínimo en 24h":"24h minimum"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.low_24h, 2, 'null', '$ ')}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Total en circulación":"Total circulation"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.circulating_supply, 2, 'null', 'null')} {stats.symbol}</text>
              </div>
            </div>
                {/* @ts-ignore */}
            <div className="tokenSpecificTableCoinsContainer" style={{"backgroundColor":ColorTheme.background[theme], "borderColor":ColorTheme.strokes[theme]}}>
              <TableCoins coins={coins} theme={theme}/>
            </div>
          </div>
        </div>

        {/* @ts-ignore */}
        <div className="tokenSpecificMainContainerTab" style={{ backgroundColor :  ColorTheme.background[theme], "color":ColorTheme.text[theme] }}>
          <div className="tokenSpecificLeftContainerTab">
          <div className="tokenSpecificHeaderTab">
              <img src={coin.image} style={{width:"60px", height:"60px"}}></img>
              <div className="dividerText">
                {/* @ts-ignore */}
              <span className="tit" style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", "color":ColorTheme.text[theme]}}>{coin.name}</span>
              <span className='text-muted'>{coin.symbol}</span>
              </div>
            </div>
            {/* @ts-ignore */}
            <div className="tokenSpecificStatsTab" style={{"backgroundColor":ColorTheme.background[theme], "borderColor":ColorTheme.strokes[theme]}}>
              {/* @ts-ignore */}
              <header className="tit" style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", "color":ColorTheme.text[theme]}}>{language=="es"?"Estadísticas de precio":"Price stats"}</header>
              {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?`Precio de ${coin.name}`:`${coin.name} price`}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.current_price, 2, 'null', '$ ')}</text>
              </div>
                {/* @ts-ignore */}
              <div style={{"color":ColorTheme.text[theme]}} className="tokenSpecificStatsDiv">
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Capitalización de mercado":"Market capitalization"}</header>
                {/* @ts-ignore */}
                <text>${prettifyNumber(stats.market_cap, 0, 'null', 'null')}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Ranking Capitalización de mercado":"Market capitalization ranking"}</header>
                {/* @ts-ignore */}
                <text># {stats.market_cap_rank}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Volumen de comercio":"Trade volume"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.total_volume, 2, 'null', '$ ')} </text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Máximo en 24h":"24h maximum"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.high_24h, 2, 'null', '$ ')}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Mínimo en 24h":"24h minimum"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.low_24h, 2, 'null', '$ ')}</text>
              </div>
                {/* @ts-ignore */}
              <div className="tokenSpecificStatsDiv" style={{"color":ColorTheme.text[theme]}}>
                {/* @ts-ignore */}
                <header style={{"color":ColorTheme.text[theme]}}>{language=="es"?"Total en circulación":"Total circulation"}</header>
                {/* @ts-ignore */}
                <text>{prettifyNumber(stats.circulating_supply, 2, 'null', 'null')} {stats.symbol}</text>
              </div>
            </div>
            {/* @ts-ignore */}
            <div className="tokenSpecificGraphContainerTab" style={{"backgroundColor":ColorTheme.background[theme], "borderColor":ColorTheme.strokes[theme]}}>
              <div className="headerGraphContainerDesk">
                <text className="tit" style={{fontWeight:400, fontSize:"24px", lineHeight:"100%", color:"#AEAEAE",}}>{language == "es" ? `Precio de ${coin.name}`: `${coin.name} price`}</text>
                <div className="tokenSpecificGraphInfo">
                  <text className="gig" style={{fontWeight:600, fontSize:"34px", lineHeight:"100%"}}>{prettifyNumber(coin.current_price, 2, 'null', '$ ')}</text>
                  <text className="med" style={{fontWeight:400, fontSize:"18px", lineHeight:"100%", color:"#7ac486"}}>
                    {coin.price_change_percentage_7d_in_currency < 0 ? prettifyNumber(Math.abs(coin.price_change_percentage_7d_in_currency),2,'%','↘︎'):prettifyNumber(coin.price_change_percentage_7d_in_currency,2,'%','↗︎')}
                  </text>
                </div>
              </div>
              <div className="tokenSpecificGraphRenderTab">
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
                  width={"99%"}
                  options={{
                    aspectRatio: 2,
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
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'h'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('h')}>{language=="es"?"H":"H"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'd'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('d')}>{language=="es"?"D":"D"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'w'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('w')}>{language=="es"?"S":"W"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'm'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('m')}>{language=="es"?"M":"M"}</button>
                {/* @ts-ignore */}
                <button style={{"color":ColorTheme.text[theme],}} className={time == 'y'? "tokenSpecificActiveButton" : ""} onClick={(e) => setTime('y')}>{language=="es"?"A":"Y"}</button>
              </div>
            </div>
            <div className="tokenSpecificCoinStats">
              {/* @ts-ignore */}
              <header style={{"color":ColorTheme.titles[theme],}}>{language=="es"?`¿Qué es ${coin.name}?`:`What is ${coin.name}?`}</header>
              {/* @ts-ignore */}
              <text>{coinDescription[asset][language]}</text>
              {/* @ts-ignore */}
              <header style={{"color":ColorTheme.titles[theme],}}>{language=="es"?`El precio de ${coin.name}`:`Price of ${coin.name}`}</header>
              {/* @ts-ignore */}
              <text>{`El precio de ${coin.name} hoy es de ${prettifyNumber(stats.current_price, 2, 'null', '$ ')} con un volumen de comercio de ${prettifyNumber(stats.total_volume, 2, 'null', '$ ')} en 24 horas. El precio cambiado a ${prettifyNumber(stats.price_change_percentage_24h, 0, 'null', 'null')} en las últimas 24 horas. Tiene una oferta circulante de ${prettifyNumber(stats.circulating_supply, 2, 'null', '$ ')} millones${stats.symbol} monedas y una oferta total de ${prettifyNumber(stats.total_supply, 2, 'null', 'null')}. Si quiere comprar ${asset}, Coinsturn es actualmente el mercado mas seguro.`}</text>
            </div>
          </div >
          {/* @ts-ignore */}
          <div className="tokenSpecificRightContainerTab">
            {/* @ts-ignore */}
            <div className="tokenSpecificTableCoinsContainerTab" style={{"backgroundColor":ColorTheme.background[theme], "borderColor":ColorTheme.strokes[theme]}}>
              <TableCoins coins={coins} theme={theme}/>
            </div>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSpecific;