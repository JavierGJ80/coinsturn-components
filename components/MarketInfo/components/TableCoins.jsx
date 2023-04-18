import React from "react";
import CoinRow from "./CoinRow";
import ColorTheme from "./ColorTheme.json";

const titles = [
  { es: "#", en: "#" },
  { es: "Activo", en: "Token" },
  { es: "Ultimos 7 días", en: "Last 7 days" },
  { es: "Precio", en: "Price" },
  { es: "Ultimos 7 días", en: "Last 7 days" },
  { es: "Volumen 24h", en: "24h Volume" },
  { es: "Cap. de mercado", en: "Market cap." },
];

const showTitles = [
  { es: "#", en: "#" },
  { es: "Activo", en: "Token" },
  { es: "Precio", en: "Price" },
];

const TableCoins = ({ coins, search, theme, language, onChange }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <table className='table table-dark-coinsturn mt-4 table-hover'>
      <thead>
        <tr
          style={{
            color: ColorTheme.text[theme],
            borderColor: ColorTheme.strokes[theme],
          }}>
          {titles.map((title, i) => (
            <td
              style={{ "--bs-table-bg": ColorTheme.background[theme] }}
              key={i}
              className={showTitles.includes(title) ? "" : "hide-content"}>
              {title[language]}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow
            key={coin.id}
            coin={coin}
            index={index + 1}
            theme={theme}
            onChange={onChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
