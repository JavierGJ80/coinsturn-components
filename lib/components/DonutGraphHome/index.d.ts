import React from "react";
export interface HomeDonutProps {
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
declare const HomeDonut: (props: HomeDonutProps) => React.JSX.Element;
export default HomeDonut;
