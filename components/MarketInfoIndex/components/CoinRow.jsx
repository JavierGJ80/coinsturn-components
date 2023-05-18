import React from "react";
import ColorTheme from "./ColorTheme.json";

const CoinRow = ({ coin, index, theme, onChange }) => {
  const color =
    coin.sparkline_in_7d.price[0] <
    coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1]
      ? "green"
      : "red";
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
      <td className='text-muted'>{index}</td>
      <td style={{ display: "flex", flexDirection: "row", height: "77.5px" }}>
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
