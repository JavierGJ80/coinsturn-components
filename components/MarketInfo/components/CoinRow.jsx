import React, { useEffect, useState } from "react";
import { LineChart, Line, YAxis } from "recharts";
import { Route, useHistory, useParams, withRouter } from "react-router-dom";

const CoinRow = ({ coin, index }) => {
  const history = useHistory();
  const data = [];

  for (
    let price_len = 0;
    price_len < coin.sparkline_in_7d.price.length - 1;
    price_len += parseInt(coin.sparkline_in_7d.price.length / 7)
  ) {
    const next_number =
      price_len + parseInt(coin.sparkline_in_7d.price.length / 7);
    data.push(
      next_number >= coin.sparkline_in_7d.price.length - 1
        ? {
            name: "",
            uv: coin.sparkline_in_7d.price[
              coin.sparkline_in_7d.price.length - 1
            ],
          }
        : { name: "", uv: coin.sparkline_in_7d.price[price_len] }
    );
  }
  const color =
    coin.sparkline_in_7d.price[0] <
    coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1]
      ? "green"
      : "red";
  return (
    <tr
      onClick={(e) => {
        history.push(`/markets/${coin.id}`);
      }}>
      <td className='text-muted'>{index}</td>
      <td style={{ display: "flex", displayDirection: "row" }}>
        <img
          src={coin.image}
          alt=''
          className='img-fluid me-4'
          style={{ width: "60px", height: "60px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{coin.name}</span>
          <span className='text-muted'>{coin.symbol}</span>
        </div>
      </td>

      <td>
        <span>
          <LineChart width={80} height={45} data={data}>
            <Line dataKey='uv' stroke={color} dot={false} />
            <YAxis
              type='number'
              domain={["dataMin", "dataMax"]}
              axisLine={false}
              tick={false}
              hide
              dataKey='uv'
            />
          </LineChart>
        </span>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td
        className={
          coin.price_change_percentage_7d_in_currency > 0
            ? "text-success"
            : "text-danger"
        }>
        <span>
          {`${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`}
        </span>
      </td>

      <td>${coin.total_volume.toLocaleString()}</td>
      <td>${coin.market_cap.toLocaleString()}</td>
    </tr>
  );
};

export default withRouter(CoinRow);
