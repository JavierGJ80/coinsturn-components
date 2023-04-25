/// <reference types="react" />
export interface BarGraphProps {
    data: {
        label: string;
        trades: number;
    }[];
}
declare const BarGraph: ({ data }: BarGraphProps) => JSX.Element;
export default BarGraph;
