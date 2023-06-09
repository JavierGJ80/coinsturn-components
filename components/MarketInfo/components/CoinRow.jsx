import React, { useEffect, useState } from "react";
import { LineChart, Line, YAxis } from "recharts";
import {
  Route,
  useHistory,
  useParams,
  withRouter,
  useLocation,
} from "react-router-dom";
import ColorTheme from "./ColorTheme.json";

const CoinRow = ({ coin, index, theme, onChange }) => {
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
  const isTablet = window.innerWidth <= 990;

  return (
    <tr
      onClick={(e) => {
        onChange(coin.id);
      }}
      style={{
        cursor: "pointer",
        "--bs-table-bg": ColorTheme.background[theme],
        "--bs-table-hover-bg": ColorTheme.hover[theme],
        borderColor: ColorTheme.strokes[theme],
      }}>
      <td className='text-muted' style={{}}>
        {index}
      </td>
      <td
        style={{
          display: "flex",
          displayDirection: "row",
          height: "77.5px",
        }}>
        <img
          src={coin.image}
          alt=''
          className='img-fluid me-4'
          style={{ width: "60px", height: "60px" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: ColorTheme.text[theme] }}>{coin.name}</span>
          <span className='text-muted'>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>

      {!isTablet && (
        <td className='hide-content'>
          <span style={{ cursor: "pointer", display: "flex" }}>
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
      )}

      <td>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: ColorTheme.text[theme] }}>
            ${coin.current_price.toLocaleString()}
          </span>
          <span
            className={
              coin.price_change_percentage_7d_in_currency > 0
                ? "text-success show-content"
                : "text-danger show-content"
            }>
            {`${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`}
          </span>
        </div>
      </td>

      <td
        className={
          coin.price_change_percentage_7d_in_currency > 0
            ? "text-success hide-content"
            : "text-danger hide-content"
        }>
        <span>
          {`${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`}
        </span>
      </td>

      <td style={{ color: ColorTheme.text[theme] }} className='hide-content'>
        ${coin.total_volume.toLocaleString()}
      </td>
      <td style={{ color: ColorTheme.text[theme] }} className='hide-content'>
        ${coin.market_cap.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinRow;
