import React from "react";
import { LineChart, Line, YAxis } from "recharts";
import ColorTheme from "../../MarketInfo/components/ColorTheme.json";

const CoinRow = ({ coin, index, theme }) => {
  const data = [];

  return (
    <tr>
      <td className='text-muted'>{index}</td>
      <td style={{ display: "flex", displayDirection: "row" }}>
        <img
          src={coin.image}
          alt=''
          className='img-fluid me-4 img'
          style={{ width: "60px", height: "60px" }}
        />
        <td style={{ display: "flex", flexDirection: "column" }}>
          <span className='normal' style={{ color: ColorTheme.titles[theme] }}>
            {coin.name}
          </span>
          <span className='text-muted normal'>{coin.symbol.toUpperCase()}</span>
        </td>
      </td>
      <td>
        <span className='normal' style={{ color: ColorTheme.numbers[theme] }}>
          ${coin.current_price.toLocaleString()}
        </span>

        <td
          className={
            coin.price_change_percentage_7d_in_currency > 0
              ? "text-success normal"
              : "text-danger normal"
          }>
          <span className='normal'>
            {`${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`}
          </span>
        </td>
      </td>
    </tr>
  );
};

export default CoinRow;
