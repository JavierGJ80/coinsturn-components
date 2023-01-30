import React from 'react';
import {
    Switch,
    Route,
    Router,
    useHistory
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import MarketRoutes from "./MarketRoutes";

export interface MarketRouterProps {
  resPartner : [{[key:string] : any;}];
}

function MarketRouter(props: MarketRouterProps) {
    const { resPartner } = props
    const history = createBrowserHistory()
   
    return (
        // @ts-ignore
        <Router history={history}>
            <Route path="/" component={()=><MarketRoutes resPartner={resPartner}/>}/>
        </Router>

    );
}

export default MarketRouter;