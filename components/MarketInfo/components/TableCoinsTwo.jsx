import React from "react";
import CoinRowTwo from "./CoinRowTwo";
import ColorTheme from "./ColorTheme.json";

const titles = [
  { es: "#", en: "#" },
  { es: "Activo", en: "Token" },
  { es: "Precio", en: "Price" },
];

const showTitlesMobile = ["#", "Activo", "Precio", "Price"];

const TableCoinsTwo = ({ coins }) => {
  if (!coins) return <div>no coins</div>;

  return (
    <table className="table table-dark-coinsturn mt-4 table-hover ">
      <thead>
        <tr
          style={{
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
            color: "rgba(174, 174, 174, 1)",
          }}
        >
          {titles.map((title, i) => (
            <th
              key={i}
              className={
                showTitlesMobile.includes(title.en) ? "" : "hide-content"
              }
              style={{
                color: showTitlesMobile.includes(title.en) ? "" : "red",
              }}
            >
              {title.en}
            </th>
          ))}
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
