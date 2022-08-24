/// <reference types="react" />
export interface DonutGraphProps {
    labels: string[];
    data: number[];
    borderColors: string[];
    hoverOffset: number;
}
declare const DonutGraph: (props: DonutGraphProps) => JSX.Element;
export default DonutGraph;
