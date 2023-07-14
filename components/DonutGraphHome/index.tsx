import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const HomeDonut = (props: any) => {
  const dummyData = [
    {
      symbol: "USDT",
      contracts_aggregate: {
        aggregate: {
          sum: {
            current_value: 64785.4
          }
        }
      }
    },
    {
      symbol: "ETH",
      contracts_aggregate: {
        aggregate: {
          sum: {
            current_value: 4642.44
          }
        }
      }
    },
    {
      symbol: "BTC",
      contracts_aggregate: {
        aggregate: {
          sum: {
            current_value: 886411.87
          }
        }
      }
    },
    {
      symbol: "BTC/BUSD",
      contracts_aggregate: {
        aggregate: {
          sum: {
            current_value: 51000
          }
        }
      }
    },
    {
      symbol: "COVER",
      contracts_aggregate: {
        aggregate: {
          sum: {
            current_value: 827.77
          }
        }
      }
    }
  ];
  
  const data = props.data ? props.data : dummyData;

  const labels = data.map((item : any) => item.symbol);
  const values = data.map((item : any) => item.contracts_aggregate.aggregate.sum.current_value);
  
  const backgroundColor = data.map((item : any) => {
    if (item.symbol === "USDT") {
      return "#41AC8B";
    } else if (item.symbol === "BTC") {
      return "#FFAC0B";
    } else if (item.symbol === "ETH") {
      return "#758EEC";
    } else if (item.symbol === "BTC/BUSD") {
      return "#FFD80B";
    } else if (item.symbol === "COVER") {
      return "#306AFF";
    } else {
      return getRandomColor();
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

  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [currentSymbol, setCurrentSymbol] = useState<string | null>(null);

  const handleHover = (event: any, chartElement: any) => {
    if (chartElement.length > 0) {
      const { index } = chartElement[0];
      setCurrentValue(values[index]);
      setCurrentSymbol(labels[index]);
    } else {
      setCurrentValue(null);
      setCurrentSymbol(null);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
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
                padding: 20,
              },
            },
          },
          cutout: "96%",
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Current crypto currency",
              data: values,
              backgroundColor: backgroundColor,
              borderColor: backgroundColor,
            },
          ],
        }}
      />
      {currentValue !== null && currentSymbol !== null && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          fontSize: '1.5em',
          color: 'grey',
          textAlign: 'center'
        }}>
          <div>{currentSymbol}</div>
          <div>${' ' + currentValue.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default HomeDonut;