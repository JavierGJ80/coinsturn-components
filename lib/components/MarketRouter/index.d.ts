import React from 'react';
export interface MarketRouterProps {
    resPartner: [{
        [key: string]: any;
    }];
}
declare function MarketRouter(props: MarketRouterProps): React.JSX.Element;
export default MarketRouter;
