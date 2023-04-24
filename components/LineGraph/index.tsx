import { Chart, registerables, ChartOptions } from 'chart.js';
import { TooltipItem } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import 'chartjs-plugin-annotation';

Chart.register(...registerables);

interface DataItem {
  date: string;
  profitLoss: number;
  tradeNumber: number;
  symbol: string;
  x:number;
  y:number;
  pl:number
};

interface LabelOptions {
  content: string;
  position: 'start' | 'center' | 'end';
};

export interface LineGraphProps {
  data: DataItem[];
};


const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && data) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        let totalProfitLoss = 0;
        const chartData = data.map((d, i) => {
          totalProfitLoss += d.profitLoss; // actualiza el profit/loss total
          return {
            x: d.tradeNumber,
            y: totalProfitLoss,
            pl: totalProfitLoss - d.profitLoss,
           
             // usa el profit/loss total en el eje Y
          };
        });
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
gradient.addColorStop(0, '#C5C5C5');
gradient.addColorStop(1, '#C5C5C5');
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((d) => d.date),
            datasets: [
              {
                data: chartData, // usa el nuevo conjunto de datos con el profit/loss acumulado
                borderColor: gradient,
              
                backgroundColor: 'rgba(75,192,192,0.2)', // add background color with alpha value
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointRadius: 0,
                pointHoverRadius: 3,
                pointHitRadius: 10,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                fill: {above:'rgba(123,196,133,0.3)',below:'rgba(251,64,64,0.3)', target:{value:0}},
                clip: undefined,
                borderWidth: 2,
                
                  
              },
            ],
          },
          
          
          options: {
            
            scales: {
              x: {
                title: {
                  display: false,
                  text: 'Trade Number',
                  
                },
                grid: {
                  color: 'transparent',
                  
                },
                ticks: {
                  color: 'rgba(0,0,0,0)' // Agrega la propiedad color con valor transparente
                }
                
                
              },
              
              y: {
                grid: {
                  display: true,
                 
                },
                title: {
                  display: false,
                  
                },
                
                ticks: {
                  font: {
                    family: 'Poppins',
                    size: 12,
                    weight: 'bold'
                  },
                  
                  callback: function (value) {
                    return  + value;
                  }, 
                  
                  
                },
              },
              legend: {
                display: false,
                position: "top"
              }
            },
            
            plugins: {
              legend: {
                display: false,
                
              },
              tooltip: {
                callbacks: {
                  title: (tooltipItems: TooltipItem<'line'>[]) => {
                    return `Trade ${data[tooltipItems[0].dataIndex].tradeNumber}`;
                  },
                  label: (tooltipItem: TooltipItem<'line'>) => {
                    const index = tooltipItem.dataIndex;
                    const d = data[index];
                    const pl = chartData[index].pl; // Obtén el profit/loss del chartData
                    const sum = chartData[index].y; // Obtén la sumatoria del chartData
                    const sign = pl < 0 ? '-' : '+';
                    return `${d.date}: $${Math.abs(sum)} (${sign}${
                      Math.abs(pl) !== 1 ? Math.abs(pl) + 'tne' : '1 tne'
                    })`;
                  },
                
                },
              },
              
              

              
            }
            
          },
          
        }
        );

        return () => {
          chart.destroy();
        };
      }
    }
  }, [data]);

  return <canvas ref={canvasRef} />;
};

export default LineGraph;