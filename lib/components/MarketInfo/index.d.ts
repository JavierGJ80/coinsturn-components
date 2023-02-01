/// <reference types="react" />
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface MarketInfoProps {
    theme: string;
    resPartner: [{
        [key: string]: any;
    }];
    onChange: (params: any) => void;
}
declare const MarketInfo: (props: MarketInfoProps) => JSX.Element;
export default MarketInfo;
