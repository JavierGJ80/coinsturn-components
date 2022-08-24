/// <reference types="react" />
export interface DonutGraphProps {
    labels: string[];
    data: number[];
    backgroundColors: string[];
    borderColors: string[];
    borderWith: number;
    hoverOffset: number;
}
declare const DonutGraph: (props: DonutGraphProps) => JSX.Element;
export default DonutGraph;
