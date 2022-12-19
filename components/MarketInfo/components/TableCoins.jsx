import React from "react";
import CoinRow from "./CoinRow";

const titles = [
  "#",
  "Activo",
  "Ultimos 7 días",
  "Precio",
  "Ultimos 7 días",
  "Volumen 24h",
  "Cap. de mercado",
];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <table className='table table-dark-coinsturn mt-4 table-hover'>
      <thead>
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
