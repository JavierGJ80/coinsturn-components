import React from 'react';
export interface LineGraphProps {
    data: {
        name: string;
        Profit: number;
        pv: number;
        amt: number;
    }[];
}
declare const LineGraph: React.FC<LineGraphProps>;
export default LineGraph;
