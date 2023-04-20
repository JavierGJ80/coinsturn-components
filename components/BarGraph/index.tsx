import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import type { ChartConfiguration, ChartData } from 'chart.js';
import type { RefObject } from 'react';
import React from 'react';

export interface BarGraphProps {
  data: { label: string; trades: number }[];
}

const BarGraph = ({ data }: BarGraphProps) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const chartData: ChartData<'bar', number[], string> = {
      labels: data.map((d) => d.label),
      datasets: [
        {
          label: 'Trades',
          data: data.map((d) => d.trades),
          backgroundColor: 'rgba(253, 181, 42, 0.2)',
          borderColor: 'rgba(253, 181, 42, 1)',
          borderWidth: 2,
          borderRadius: 5,
        },
      ],
    };

    const chartConfig: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false,
            
          },
        },
        scales: {
          y: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'Poppins',
                size: 12,
                weight: 'bold'
              },
              
              
            },
            
            
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'Poppins',
                size: 12,
                weight: 'bold'
              }
            }
            
            
          },
          legend: {
            display: false,
            position: "top"
          }
        }
      },
      
    
    };

    const chart = new Chart(canvasRef.current, chartConfig);

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={canvasRef} />;
};

export default BarGraph;