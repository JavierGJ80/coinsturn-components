import React from "react";
import CoinRow from "./CoinRow";

const TableCoins = ({ coins }) => {
  if (!coins) return <div>no coins</div>;

  return (
    <table className='table table-dark-coinsturn mt-4 '>
      <thead>
        <tr
          style={{
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
            color: "rgba(174, 174, 174, 1)",
          }}>
          <td colSpan={10} style={{ paddingLeft: "20px" }}>
            {"Top Performers"}
          </td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
