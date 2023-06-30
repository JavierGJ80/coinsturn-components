import React from 'react';
import "./DonutGraphArray.css";
export interface AssetData {
    symbol: string;
    spot_info: {
        sum_accounts: {
            values: {
                qty: number;
                value: number;
            };
        };
    };
}
export interface DonutGraphArrayProps {
    assets: AssetData[];
    hoverOffset: number;
    borderWidth: number;
}
declare const DonutGraphArray: (props: DonutGraphArrayProps) => React.JSX.Element;
export default DonutGraphArray;
