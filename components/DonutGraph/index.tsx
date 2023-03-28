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
        }
    }/>);
};

export default DonutGraph;

/*
{                
  "EnvVars": [],                
  "TypeComponent": "",               
  "name": "CoverComposition",                
  "attrs":[                                
    {"name":"COVER_value", "type":"dynamic", "required":true},                          
    {"name":"COVER_color", "type":"scalar", "required":true},                  
    {"name":"BTC_value", "type":"dynamic", "required":true},                          
    {"name":"BTC_color", "type":"scalar", "required":true},                  
    {"name":"ETH_value", "type":"dynamic", "required":true},                          
    {"name":"ETH_color", "type":"scalar", "required":true},                  
    {"name":"USDT_value", "type":"dynamic", "required":true},                          
    {"name":"USDT_color", "type":"scalar", "required":true},                            
    {"name":"hoverOffset", "type":"scalar", "required":true}                
  ],                
  "events": [],                
  "isWrapper": false,                
  "PackageName": "coinsturn-plugins",                
  "version": "0.0.3",             
  "exportType": "named",                
  "description": "Coinsturn external components",                
  "origin": "https://github.com/JavierGJ80/coinsturn-components.git"    
}
*/