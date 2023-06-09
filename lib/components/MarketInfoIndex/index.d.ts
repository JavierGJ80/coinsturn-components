import "./index.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface MarketInfoIndexProps {
    theme: string;
    resPartner: [{
        [key: string]: any;
    }];
    onChange: (params: any) => void;
}
declare const MarketInfoIndex: (props: MarketInfoIndexProps) => React.JSX.Element;
export default MarketInfoIndex;
