import React from 'react';
export interface BarGraphProps {
    data: {
        label: string;
        trades: number;
    }[];
}
declare const BarGraph: React.FC<BarGraphProps>;
export default BarGraph;
