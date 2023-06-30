import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chroma from 'chroma-js';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface AssetData {
    symbol: string,
    spot_info: {
        sum_accounts: {
            values: {
                qty: number,
                value: number
            }
        }
    }
}

export interface DonutGraphArrayProps {
    assets: AssetData[],
    hoverOffset: number,
    borderWidth: number
}

const DonutGraphArray = (props: DonutGraphArrayProps) => {
    const { assets, hoverOffset, borderWidth } = props;

    const labels = assets.map(asset => asset.symbol);
    const data = assets.map(asset => asset.spot_info.sum_accounts.values.value);

    const colorScale = chroma.scale(['#E6A828', '#7BC485']).colors(assets.length);
    const backgroundColor = colorScale;

    const [selectedValue, setSelectedValue] = useState<null | number>(data[0]);
    const [selectedSymbol, setSelectedSymbol] = useState<string | null>(labels[0]);

    const handleHover = (evt: any, elements: any[], chart: any) => {
        if (elements.length > 0) {
            const index = elements[0].index;
            setSelectedValue(data[index]);
            setSelectedSymbol(labels[index]);
        } else {
            setSelectedValue(null);
            setSelectedSymbol(null);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <Doughnut
                options={{
                    onHover: handleHover,
                    plugins: {
                        legend: {
                            position: 'top',
                            rtl: true,
                            labels: {
                                usePointStyle: true,
                                pointStyle: "circle",
                                padding: 20,
                            },
                        },
                    },
                    cutout: "96%",
                }}
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Current crypto currency',
                            data: data,
                            backgroundColor: backgroundColor,
                            borderColor: "white",
                            borderWidth: borderWidth,
                            hoverOffset: hoverOffset,
                        },
                    ],
                }}
            />
            {selectedValue !== null && selectedSymbol !== null && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%', // Cambiado a 40%
                    transform: 'translate(-50%, -50%)',
                    fontWeight: 'bold',
                    fontSize: '1.5em',
                    color: 'grey', // Cambiado a gris
                    textAlign: 'center' // Añadido para centrar el texto
                }}>
                    <div>{selectedSymbol}</div>
                    <div>${' ' + selectedValue.toFixed(2)}</div>
                </div>
            )}
        </div>
    );
};

export default DonutGraphArray;