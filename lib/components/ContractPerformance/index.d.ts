import React from "react";
export interface ContractPerformanceProps {
    dataArray: {
        labels: string[];
        data: number[];
    };
    borderColor: string;
}
declare const ContractPerformance: (props: ContractPerformanceProps) => React.JSX.Element;
export default ContractPerformance;
