import React from "react";
import CoinRowTwo from "./CoinRowTwo";



const TableCoinsTwo = ({ coins }) => {
  if (!coins) return <div>no coins</div>;
 


  return (
    <table className='table table-dark-coinsturn mt-4 table-hover '>
      <thead>
        <tr
          style={{
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
            color: "rgba(174, 174, 174, 1)",
          }}>
          <td colSpan={3} style={{ paddingLeft: "20px" }}>
            {""}
          </td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRowTwo key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoinsTwo;
