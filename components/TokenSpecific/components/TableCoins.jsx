import React from "react";
import CoinRow from "./CoinRow";
import ColorTheme from "../../MarketInfo/components/ColorTheme.json";

const TableCoins = ({ coins, theme }) => {
  if (!coins) return <div>no coins</div>;

  return (
    <table
      className='table table-dark-coinsturn mt-4 '
      style={{
        borderColor: ColorTheme.strokes[theme],
        "--bs-table-bg": ColorTheme.background[theme],
      }}>
      <thead>
        <tr
          style={{
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
            color: ColorTheme.text[theme],
          }}>
          <td className='tit' colSpan={3} style={{ paddingLeft: "20px" }}>
            {"Top Performers"}
          </td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} theme={theme} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
