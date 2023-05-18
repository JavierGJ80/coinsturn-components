import { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import React from 'react';

export interface BarGraphProps {
  data: { label: string; trades: number }[];
}

const BarGraph = ({ data }: BarGraphProps) => {
  
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartData = {
        labels: data.map((d) => d.label),
        datasets: [
          {
            data: data.map((d) => d.trades),
            backgroundColor: 'rgba(253, 181, 42, 0.2)',
            borderColor: 'rgba(253, 181, 42, 1)',
            borderWidth: 2,
            borderRadius: 6,
          },
        ],
      };
      const chartOptions = {
        responsive: true,  // Agregado para hacer la gráfica responsiva
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: 'Poppins',
                size: 12,
                weight: 'bold',
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: 'Poppins',
                size: 12,
                weight: 'bold',
              },
            },
          },
        },
      };
      chartRef.current.data = chartData;
      chartRef.current.options = chartOptions;
      chartRef.current.update();
    }
  }, [data]);

  return (
    <Bar
      ref={chartRef}
      data={{
        labels: data.map((item) => item.label),
        datasets: [
          {
            label: 'Trade',
            data: data.map((item) => item.trades),
            backgroundColor: '#000',
          },
        ],
      }}
    />
  );
};

export default BarGraph;
