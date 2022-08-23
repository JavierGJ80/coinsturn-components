import React from "react";
export interface ContractPerformanceProps {
    labels: string[];
    data: number[];
    borderColor: string;
}
declare const ContractPerformance: React.ForwardRefExoticComponent<ContractPerformanceProps & React.RefAttributes<unknown>>;
export default ContractPerformance;
