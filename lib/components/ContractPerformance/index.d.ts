/// <reference types="react" />
export interface ContractPerformanceProps {
    dataArray: {
        labels: string[];
        data: number[];
    };
    borderColor: string;
}
declare const ContractPerformance: (props: ContractPerformanceProps) => JSX.Element;
export default ContractPerformance;
