import React from "react";
export interface DonutGraphProps {
    labels: string[];
    data: number[];
    backgroundColors: string[];
    borderColors: string[];
    borderWith: number;
    hoverOffset: number;
}
declare const DonutGraph: React.ForwardRefExoticComponent<DonutGraphProps & React.RefAttributes<unknown>>;
export default DonutGraph;
