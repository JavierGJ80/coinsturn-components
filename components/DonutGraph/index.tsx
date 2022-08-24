import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DonutGraphProps {
    labels: string[];
    data: number[];
    borderColors: string[];
    hoverOffset : number;
}

const DonutGraph = (props: DonutGraphProps) => {
    const { labels, data, borderColors, hoverOffset} = props;
    const graphData = {
        labels: labels,
        datasets: [
            {
            label: 'Current crypto currency',
            data: data,
            backgroundColor: borderColors,
            borderColor: borderColors,
            hoverOffset : hoverOffset,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                position: 'right',
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
    // @ts-ignore
    return(<Doughnut options={options} data={ graphData }/>);
};

export default DonutGraph;
