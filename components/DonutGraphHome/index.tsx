import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import chroma from "chroma-js";

export interface AssetData {
  symbol: string;
  contracts_aggregate: {
    aggregate: {
      sum: {
        current_value: number;
      };
    };
  };
}

export interface DonutGraphProps {
  data: AssetData[];
}

const DonutHome = (props: DonutGraphProps) => {
  const { data } = props;
  const parsedData = data ? data : []
  const labels = parsedData.map((item) => item.symbol);
  const values = parsedData.map(
    (item) => item.contracts_aggregate.aggregate.sum.current_value
  );

  const backgroundColor = parsedData.map((item) => {
    if (item.symbol === "USDT") {
      return "#41AC8B"; // Color personalizado para USDT
    } else if (item.symbol === "BTC") {
      return "#FFAC0B"; // Color personalizado para BTC
    } else if (item.symbol === "ETH") {
      return "#758EEC"; // Color personalizado para ETH
    } else if (item.symbol === "COVER") {
      return "#306AFF"; // Color personalizado para COVER
    } else if (item.symbol === "BTC/BUSD") {
      return "#FFD80B"; // Color personalizado para BTC/BUSD
    } else {
      return getRandomColor(); // Colores aleatorios suaves para las demás monedas
    }
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [selectedValue, setSelectedValue] = useState<null | number>(
    values[0] ? values[0] : null
  );
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(
    labels[0] ? labels[0] : null
  );

  const handleHover = (evt: any, elements: any[], chart: any) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      setSelectedValue(values[index]);
      setSelectedSymbol(labels[index]);
    } else {
      setSelectedValue(null);
      setSelectedSymbol(null);
    }
  };

  const centeredTextStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "35%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    fontSize: "1em",
    color: "grey",
    textAlign: "center"
  };

  return (
    <div className="mainDonutContainer" style={{ position: "relative", width:"100%" }}>
      <Doughnut
        options={{
          onHover: handleHover,
          plugins: {
            legend: {
              position: "right",
              rtl: true,
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: 20
              }
            }
          },
          cutout: "96%"
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Current crypto currency",
              data: values,
              backgroundColor: backgroundColor,
              borderColor: backgroundColor
            }
          ]
        }}
      />
      {selectedValue !== null && selectedSymbol !== null && (
        <div className="centeredText" style={centeredTextStyle}>
          <div>{selectedSymbol}</div>
          <div>${" " + selectedValue? selectedValue.toFixed(2) : " "}</div>
        </div>
      )}
    </div>
  );
};

export default DonutHome;