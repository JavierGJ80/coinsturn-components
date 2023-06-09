import React, { useEffect, useState } from "react";
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

const showTitlesMobile = ["#", "Activo", "Token", "Precio", "Price"];

const TableCoins = ({ coins, search, theme, language, onChange }) => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowTitle(window.innerWidth > 990);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  const isMobile = window.innerWidth <= 768;

  return (
    <table className="table table-dark-coinsturn mt-4 table-hover">
      <thead>
        <tr
          style={{
            color: ColorTheme.text[theme],
            borderColor: ColorTheme.strokes[theme],
          }}
        >
          {titles.map((title, i) => {
            if (i === 2 && !showTitle) return null;

            return (
              <th
                style={{
                  fontWeight: "normal",
                  "--bs-table-bg": ColorTheme.background[theme],
                  color:
                    (isMobile &&
                      !showTitlesMobile.includes(title[language]) &&
                      title[language] !== "Precio") ||
                    (!showTitle &&
                      i === 2 &&
                      title[language] === "Ultimos 7 días")
                      ? "red"
                      : "#5d626d",
                }}
                key={i}
                className={
                  (isMobile || !showTitle) &&
                  !showTitlesMobile.includes(title[language])
                    ? "hide-content"
                    : "grey"
                }
              >
                {title[language]}
              </th>
            );
          })}
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





