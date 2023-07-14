import React from "react";
export interface AssetData {
    symbol: string;
    contracts_aggregate: {
        aggregate: {
            sum: {
                current_value: number;
            };
        };
    };
}
export interface DonutGraphProps {
    data: AssetData[];
}
declare const DonutHome: (props: DonutGraphProps) => React.JSX.Element;
export default DonutHome;
