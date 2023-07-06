import React from "react";
import { Doughnut } from "react-chartjs-2";

// export interface HomeDonutProps {
//   data: {
//     symbol: string;
//     contracts_aggregate: {
//       aggregate: {
//         sum: {
//           current_value: number;
//         };
//       };
//     };
//   }[];
// }

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

  console.log(`Used data in component`);
  console.log(data);
  console.log('Input Data');
  console.log(props)

  const labels = data.map((item : any) => item.symbol);
  const values = data.map((item : any) => item.contracts_aggregate.aggregate.sum.current_value);
  const backgroundColor = data.map((item : any) => {
    if (item.symbol === "USDT") {
      return "#41AC8B"; // Verde suave
    } else if (item.symbol === "BTC") {
      return "#FFDA0C"; // Amarillo suave
    } else if (item.symbol === "ETH") {
      return "#758EEC"; // Morado suave
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

  return (
    <Doughnut
      options={{
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
  );
};

export default HomeDonut;