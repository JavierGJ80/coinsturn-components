import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DonutGraphProps {
    labels: string[];
    data: number[];
    backgroundColors: string[];
    borderColors: string[];
    borderWith: number;
    hoverOffset : number;
}

const DonutGraph = (props: DonutGraphProps) => {
    const { labels, data, backgroundColors, borderColors, borderWith, hoverOffset} = props;
    const graphData = {
        labels: labels,
        datasets: [
            {
            label: 'Current crypto currency',
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: borderWith,
            hoverOffset : hoverOffset,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                // position: 'right',
                rtl : true,
                labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: 20,
                },
            },
        },
        cutout: "95%",
    }
    return(<Doughnut options={options} data={ graphData }/>);
};

export default DonutGraph;
