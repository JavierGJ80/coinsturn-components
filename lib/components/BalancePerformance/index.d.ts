/// <reference types="react" />
export interface BalancePerformanceProps {
    dataArray: {
        labels: string[];
        balanceData: number[];
        contractsData: number[];
    };
    borderColorBalance: string;
    borderColorContracts: string;
    resPartner: [{
        [key: string]: any;
    }];
}
declare const BalancePerformance: (props: BalancePerformanceProps) => JSX.Element;
export default BalancePerformance;
