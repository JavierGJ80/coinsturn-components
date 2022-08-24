/// <reference types="react" />
import { ChartType } from "defi-sdk/lib/entities/Chart";
export interface CryptoCurrencyProps {
    asset: string;
    charts_type: ChartType;
    borderColor: string;
}
declare const CryptoCurrency: (props: CryptoCurrencyProps) => JSX.Element;
export default CryptoCurrency;
