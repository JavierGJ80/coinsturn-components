/// <reference types="react" />
export interface MarketRouterProps {
    backgroundColor: string;
    fontColor: string;
    resPartner: [{
        [key: string]: any;
    }];
}
declare function MarketRouter(props: MarketRouterProps): JSX.Element;
export default MarketRouter;
