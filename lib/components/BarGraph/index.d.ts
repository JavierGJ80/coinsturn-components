import React from 'react';
export interface BarGraphProps {
    data: {
        label: string;
        trades: number;
    }[];
}
declare const BarGraph: ({ data }: BarGraphProps) => React.JSX.Element;
export default BarGraph;
