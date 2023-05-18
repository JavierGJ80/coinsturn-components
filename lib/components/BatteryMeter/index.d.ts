import React from "react";
import "./index.css";
export interface BatteryMeterProps {
    dayPercent: number;
    monthPercent: number;
    yearPercent: number;
    resPartner: {
        [key: string]: any;
    }[];
}
declare const BatteryMeter: (props: BatteryMeterProps) => React.JSX.Element;
export default BatteryMeter;
