import React, { useRef, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export interface BarGraphProps {
  data: { label: string; trades: number }[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    // Agregamos el código para destruir el gráfico cuando el componente se desmonte
    return () => {
      chartRef.current = null;
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} ref={chartRef}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="trades" fill="#FDB52A" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
