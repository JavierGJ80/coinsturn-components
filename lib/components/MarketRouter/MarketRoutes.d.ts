/// <reference types="react" />
interface MarketRoutesProps {
    backgroundColor: string;
    fontColor: string;
    resPartner: [{
        [key: string]: any;
    }];
}
declare function MarketRoutes(props: MarketRoutesProps): JSX.Element;
export default MarketRoutes;
