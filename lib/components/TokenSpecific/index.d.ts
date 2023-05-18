import "./index.css";
import React from "react";
import "@fontsource/poppins";
export interface TokenSpecificProps {
    resPartner: [{
        [key: string]: any;
    }];
    theme: string;
    asset: string;
}
declare const TokenSpecific: (props: TokenSpecificProps) => React.JSX.Element;
export default TokenSpecific;
