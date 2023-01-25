/// <reference types="react" />
export interface MarketRouterProps {
    resPartner: [{
        [key: string]: any;
    }];
    theme: string;
}
declare function MarketRouter(props: MarketRouterProps): JSX.Element;
export default MarketRouter;
