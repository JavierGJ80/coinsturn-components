import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import TableCoinsTwo from "./components/TableCoinsTwo";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Box, Grid} from "@material-ui/core";
import { numberAbbreviations, prettifyNumber } from "../TokenSpecificMobile/scripts";
import ColorTheme from "./components/ColorTheme.json";

export interface MarketInfoProps {
  theme:string;
  resPartner : [{[key:string] : any;}];
  onChange : (params: any) => void
}


const MarketInfo = (props: MarketInfoProps) => {
  const {theme, resPartner, onChange} = props;
  const [coins, setCoins] = useState<{[key:string] : any;}>([]);
  const [search, setSearch] = useState("");
  console.log(resPartner)
  const language = resPartner[0].coinsturn_language
  const getData = async () => {
    try {
      const global = await axios.get("https://api.coingecko.com/api/v3/global")
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20matic-network%2C%20solana%2C%20chainlink%2C%20wrapped-bitcoin%2C%20aave%2C%20decentraland%2C%20fantom&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h%2C7d"
      );
      res.data.total_supply = global.data.data.total_market_cap.usd
      res.data.total_supply_percentage = global.data.data.market_cap_change_percentage_24h_usd
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row" style={{gap: "15px"}}>
        {language == "es" ?
          // @ts-ignore
          <div className="total-supply" style={{ display: 'flex', flexDirection: 'row', color: ColorTheme.text[theme], fontWeight: 'bold' }}>
          Hoy, la capitalización de mercado global de las criptomonedas es de&nbsp;
          {numberAbbreviations(coins.total_supply)}
          , lo que supone un cambio del&nbsp;
          {prettifyNumber(coins.total_supply_percentage, 2, '%', 'null')}
          &nbsp;en las últimas 24 horas
        </div>:
          // @ts-ignore
          <div className="total-supply" style={{ display: 'flex', flexDirection: 'row', color: ColorTheme.text[theme], fontWeight: 'bold' }}>
          Today, the global cryptocurrency market cap is&nbsp;
          ${numberAbbreviations(coins.total_supply)}
          , which is a change of&nbsp;
          {prettifyNumber(coins.total_supply_percentage, 2, '%', 'null')}
          &nbsp;in the last 24 hours.
        </div>
        }
        <TableCoins coins={coins} search={search} theme={theme} language={language} onChange={onChange} />
        <div style={{fontFamily: "var(--bs-body-font-family)", color: "#5d626d", fontSize: "14px", marginLeft:"-12px"}}>
        Información extraída de:
        <img src="https://res.cloudinary.com/dkczjaruj/image/upload/v1686003770/Coinsturn/cglogo_1_dnicns.png" alt="Imagen" style={{ width: "100px", paddingLeft:"5px", paddingBottom:"3px" }} />
      </div>
      </div>
    </div>
  );
};

export default MarketInfo;