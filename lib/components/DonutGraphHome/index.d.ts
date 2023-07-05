import React from "react";
export interface DonutGraphHomeProps {
    data: {
        symbol: string;
        contracts_aggregate: {
            aggregate: {
                sum: {
                    current_value: number;
                };
            };
        };
    }[];
}
declare const DonutGraphHome: (props: DonutGraphHomeProps) => React.JSX.Element;
export default DonutGraphHome;
