/// <reference types="react" />
import "./index.css";
export interface BatteryMeterProps {
    dayPercent: number;
    monthPercent: number;
    yearPercent: number;
    resPartner: {
        [key: string]: any;
    }[];
}
declare const BatteryMeter: (props: BatteryMeterProps) => JSX.Element;
export default BatteryMeter;
