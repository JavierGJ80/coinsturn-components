import React from "react";
export interface CoverCompositionProps {
    digital_asset: [
        {
            token_composition: [
                {
                    symbol: string;
                    default_apy: number;
                    name: string;
                }
            ];
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
    hoverOffset: number;
}
declare const CoverComposition: (props: CoverCompositionProps) => React.JSX.Element;
export default CoverComposition;
