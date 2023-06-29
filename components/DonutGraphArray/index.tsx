import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

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

    const colorBase = "#E6A828";
    const colorLight = "#F2CC60";
    const backgroundColor = assets.map((_, index) => {
        const color = index % 2 === 0 ? colorBase : colorLight;
        return color;
    });

    const [selectedValue, setSelectedValue] = useState<null | number>(null);
    const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

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
                            position: 'right',
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
                            borderColor: backgroundColor,
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
                    left: '40%', // Cambiado a 40%
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