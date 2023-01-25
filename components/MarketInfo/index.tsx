import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import TableCoinsTwo from "./components/TableCoinsTwo";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Box, Grid} from "@material-ui/core";

export interface MarketInfoProps {
  theme:string;
}

const MarketInfo = (props: MarketInfoProps) => {
  const {theme} = props;
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20matic-network%2C%20solana%2C%20chainlink%2C%20wrapped-bitcoin%2C%20aave%2C%20decentraland%2C%20fantom&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h%2C7d"
      );
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
      <div className="row">
        {/* <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        /> */}

        <TableCoins coins={coins} search={search} theme={theme} />
      </div>
    </div>
  );
};

export default MarketInfo;