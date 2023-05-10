/// <reference types="react" />
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface MarketInfoIndexProps {
    theme: string;
    resPartner: [{
        [key: string]: any;
    }];
    onChange: (params: any) => void;
}
declare const MarketInfoIndex: (props: MarketInfoIndexProps) => JSX.Element;
export default MarketInfoIndex;
