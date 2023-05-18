import React from "react";
import CoinRow from "./CoinRow";
import ColorTheme from "./ColorTheme.json";

const titles = [
  { es: "#", en: "#" },
  { es: "Activo", en: "Token" },
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
    <div style={{ 
      borderRadius: '10px', 
      overflow: 'hidden',
      border: '1px solid #25282F',
      color: ColorTheme.text[theme],
              borderColor: ColorTheme.strokes[theme], 
              background: ColorTheme.background[theme],  // Este es solo un ejemplo, puedes usar el color que necesites
    }}>
      <table className='table table-dark-coinsturn mt-4 table-hover'>
        <thead>
          <tr
            style={{
              color: ColorTheme.text[theme],
              borderColor: ColorTheme.strokes[theme],
            }}>
            {titles.map((title, i) => (
              <td
                style={{
                  "--bs-table-bg": ColorTheme.background[theme],
                  
                }}
                key={i}
                className={
                  showTitles.includes(title) && i !== 2 ? "" : "hide-content"
                }>
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
    </div>
  );
};

export default TableCoins;

