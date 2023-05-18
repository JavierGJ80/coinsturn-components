import React from "react";
export interface CryptoCurrencyV2Props {
    asset: string;
    charts_type: string;
    borderColor: string;
}
declare const CryptoCurrencyV2: (props: CryptoCurrencyV2Props) => React.JSX.Element;
export default CryptoCurrencyV2;
