import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import MarketInfo from "../MarketInfo";
import TokenSpecific from "../TokenSpecific";

export interface MarketRouterProps {
  backgroundColor : string;
  fontColor : string;
  resPartner : [{[key:string] : any;}];
}

function MarketRouter(props: MarketRouterProps) {
    const { backgroundColor, fontColor, resPartner } = props
   
    return (
        // @ts-ignore
        <Router>
            <Switch>
                <Route path="/" component={MarketInfo} />
                <Route path="/:asset">
                    <TokenSpecific backgroundColor={backgroundColor} fontColor={fontColor} resPartner={resPartner}/>
                </Route>
            </Switch>
        </Router>

    );
}

export default MarketRouter;