/// <reference types="react" />
import { ChartType } from "defi-sdk/lib/entities/Chart";
export interface CryptoCurrencyV2Props {
    asset: string;
    charts_type: ChartType;
    borderColor: string;
}
declare const CryptoCurrencyV2: (props: CryptoCurrencyV2Props) => JSX.Element;
export default CryptoCurrencyV2;
