import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DonutGraphProps {
    COVER_value: number;
    COVER_color: string;
    BTC_value: number;
    BTC_color: string;
    ETH_value: number;
    ETH_color: string;
    USDT_value: number;
    USDT_color: string;
    hoverOffset : number;
}

const DonutGraph = (props: DonutGraphProps) => {
    const { COVER_value, COVER_color, BTC_value, BTC_color, ETH_value, ETH_color, USDT_value, USDT_color, hoverOffset} = props;
    const graphData = {
        labels: ["COVER", "BTC", "ETH", "USDT"],
        datasets: [
            {
            label: 'Current crypto currency',
            data: [COVER_value, BTC_value, ETH_value, USDT_value],
            backgroundColor: [COVER_color, BTC_color, ETH_color, USDT_color],
            borderColor: [COVER_color, BTC_color, ETH_color, USDT_color],
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
