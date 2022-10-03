import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { object } from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface CoverCompositionProps {
    digital_asset : [
        {
            token_composition : [
                {
                    symbol: string;
                    default_apy: number;
                    name: string;
                }
            ]
        }
    ];
    color_01: string;
    color_02: string;
    color_03: string;
    color_04: string;
    color_05: string;
    color_06: string;
    color_07: string;
    color_08: string;
    color_09: string;
    hoverOffset : number;
}

const CoverComposition = (props: CoverCompositionProps) => {
    const { digital_asset, color_01, color_02, color_03, color_04, color_05, color_06, color_07, color_08, color_09, hoverOffset} = props;
    
    const values : number[] = [];
    const labels : string[] = [];

    digital_asset[0].token_composition.map(asset => {
        values.push(asset.default_apy);
        labels.push(asset.symbol);
    });
    
    // @ts-ignore
    return(<Doughnut options={
        {
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
            cutout: "96%",
        }
    } 
    data={ 
        {
            labels: labels,
            datasets: [
                {
                label: 'Current crypto currency',
                data: values,
                backgroundColor: [color_01, color_02, color_03, color_04, color_05, color_06, color_07, color_08, color_09],
                borderColor: [color_01, color_02, color_03, color_04, color_05, color_06, color_07, color_08, color_09],
                hoverOffset : hoverOffset,
                },
            ],
        }
    }/>);
};

export default CoverComposition;
