import React from "react";
import { LineChart, Line, YAxis } from "recharts";

const CoinRow = ({ coin, index }) => {
  const data = [];

  return (
    <tr>
      <td className='text-muted'>{index}</td>
      <td style={{ display: "flex", displayDirection: "row" }}>
        <img
          src={coin.image}
          alt=''
          className='img-fluid me-4'
          style={{ width: "60px", height: "60px" }}
        />
        <td style={{ display: "flex", flexDirection: "column" }}>
          <span>{coin.name}</span>
          <span className='text-muted'>{coin.symbol}</span>
        </td>
         </td>
          <td>
          <span>${coin.current_price.toLocaleString()}</span>

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
      </td>
    </tr>
  );
};

export default CoinRow;
