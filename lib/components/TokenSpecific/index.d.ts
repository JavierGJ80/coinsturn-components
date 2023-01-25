/// <reference types="react" />
import "./index.css";
import "@fontsource/poppins";
export interface TokenSpecificProps {
    backgroundColor: string;
    fontColor: string;
    resPartner: [{
        [key: string]: any;
    }];
    asset: string;
    theme: string;
}
declare const TokenSpecific: (props: TokenSpecificProps) => JSX.Element;
export default TokenSpecific;
