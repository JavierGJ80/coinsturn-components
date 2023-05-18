import React from "react";
export interface CryptoCurrencyProps {
    asset: string;
    charts_type: string;
    borderColor: string;
}
declare const CryptoCurrency: (props: CryptoCurrencyProps) => React.JSX.Element;
export default CryptoCurrency;
