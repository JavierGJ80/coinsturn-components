import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import TableCoinsTwo from "./components/TableCoinsTwo";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Box, Grid} from "@material-ui/core";
import { numberAbbreviations, prettifyNumber } from "../TokenSpecificMobile/scripts";
import ColorTheme from "./components/ColorTheme.json";

export interface MarketInfoIndexProps {
  theme:string;
  resPartner : [{[key:string] : any;}];
  onChange : (params: any) => void
}

const MarketInfoIndex = (props: MarketInfoIndexProps) => {
  const {theme, resPartner, onChange} = props;
  const [coins, setCoins] = useState<{[key:string] : any;}>([]);
  const [search, setSearch] = useState("");
  const language = resPartner[0].coinsturn_language
  const getData = async () => {
    try {
      const global = await axios.get("https://api.coingecko.com/api/v3/global")
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=loopring%2Cmatic-network%2Cchainlink%2Cwrapped-bitcoin%2Caave%2Cdecentraland%2Cfantom%2Ccrypto-com-chain%2Cwrapped-solana&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h%2C7d"
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
      <div className="row" style={{gap: "15px", height: "auto"}}>
        <TableCoins coins={coins} search={search} theme={theme} language={language} onChange={onChange} />
      </div>
    </div>
  );
};

export default MarketInfoIndex;