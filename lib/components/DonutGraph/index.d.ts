/// <reference types="react" />
export interface DonutGraphProps {
    COVER_value: number;
    COVER_color: string;
    BTC_value: number;
    BTC_color: string;
    ETH_value: number;
    ETH_color: string;
    USDT_value: number;
    USDT_color: string;
    hoverOffset: number;
}
declare const DonutGraph: (props: DonutGraphProps) => JSX.Element;
export default DonutGraph;
