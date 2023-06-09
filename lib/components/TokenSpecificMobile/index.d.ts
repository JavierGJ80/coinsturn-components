import "./index.css";
import React from "react";
import "@fontsource/poppins";
export interface TokenSpecificMobileProps {
    backgroundColor: string;
    fontColor: string;
    asset: string;
    resPartner: [{
        [key: string]: any;
    }];
}
declare const TokenSpecificMobile: (props: TokenSpecificMobileProps) => React.JSX.Element;
export default TokenSpecificMobile;
