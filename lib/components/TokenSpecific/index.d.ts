/// <reference types="react" />
import "./index.css";
import "@fontsource/poppins";
export interface TokenSpecificProps {
    resPartner: [{
        [key: string]: any;
    }];
    theme: string;
    asset: string;
}
declare const TokenSpecific: (props: TokenSpecificProps) => JSX.Element;
export default TokenSpecific;
