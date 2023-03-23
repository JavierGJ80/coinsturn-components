import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ResponsiveContainerProps } from 'recharts';

export interface LineGraphProps {
  data: { name: string; Profit: number; pv: number; amt: number }[];
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const xDataKey = 'name';
  const yDataKey = 'Profit';
  const gradient = {
    offset: '5%',
    stopColor: '#E6A828',
    stopOpacity: 1,
    endStopColor: '#E6A828',
    endStopOpacity: 0.01,
    gradientUnits: 'userSpaceOnUse',
  };
  const axisColor = 'transparent';
  const tooltipLabel = '#333333';
  data = typeof data === 'object' ? data : [];

  return (
    <ResponsiveContainer width='100%' height={400} aspect={2}>
      <AreaChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="0" stroke="transparent" />
        <XAxis dataKey={xDataKey} stroke={axisColor} />
        <YAxis stroke={axisColor} />
        <Tooltip labelStyle={{ color: tooltipLabel }} wrapperStyle={{ stroke: '#E6A828' }} />
        {/* Agregamos la propiedad "wrapperStyle" con stroke personalizado */}
        <Area type="monotone" dataKey={yDataKey} stroke="#E6A828" fillOpacity={1} fill={`url(#color-${yDataKey})`} strokeWidth={3}/>
        <defs>
          <linearGradient id={`color-${yDataKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset={gradient.offset} stopColor={gradient.stopColor} stopOpacity={gradient.stopOpacity} />
            <stop offset="95%" stopColor={gradient.endStopColor} stopOpacity={gradient.endStopOpacity} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
    
  );
};

export default LineGraph;



/*
[
  {
    "name": "hola",
    "Profit": 85,
    "pv": 54,
    "amt": 67
  },
  {
    "name": "hola",
    "Profit": 45,
    "pv": 54,
    "amt": 67
  },
  {
    "name": "hola",
    "Profit": 45,
    "pv": 54,
    "amt": 67
  },
  {
    "name": "hola",
    "Profit": 65,
    "pv": 54,
    "amt": 67
  },
  {
    "name": "hola",
    "Profit": 85,
    "pv": 54,
    "amt": 67
  }
]
*/