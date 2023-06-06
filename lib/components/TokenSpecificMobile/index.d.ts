/// <reference types="react" />
import "./index.css";
import "@fontsource/poppins";
export interface TokenSpecificMobileProps {
    backgroundColor: string;
    fontColor: string;
    asset: string;
    resPartner: [{
        [key: string]: any;
    }];
}
declare const TokenSpecificMobile: (props: TokenSpecificMobileProps) => JSX.Element;
export default TokenSpecificMobile;
