/// <reference types="react" />
export interface CryptoCurrencyProps {
    asset: string;
    charts_type: string;
    borderColor: string;
}
declare const CryptoCurrency: (props: CryptoCurrencyProps) => JSX.Element;
export default CryptoCurrency;
