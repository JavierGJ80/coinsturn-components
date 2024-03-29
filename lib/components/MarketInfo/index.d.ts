import "./index.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface MarketInfoProps {
    theme: string;
    resPartner: [{
        [key: string]: any;
    }];
    onChange: (params: any) => void;
}
declare const MarketInfo: (props: MarketInfoProps) => React.JSX.Element;
export default MarketInfo;
