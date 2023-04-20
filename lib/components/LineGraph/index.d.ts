import React from 'react';
import 'chartjs-plugin-annotation';
interface DataItem {
    date: string;
    profitLoss: number;
    tradeNumber: number;
    symbol: string;
    x: number;
    y: number;
    pl: number;
}
export interface LineGraphProps {
    data: DataItem[];
}
declare const LineGraph: React.FC<LineGraphProps>;
export default LineGraph;
