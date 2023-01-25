import React from 'react';
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import MarketInfo from "../MarketInfo";
import TokenSpecific from "../TokenSpecific";

interface MarketRoutesProps {
  resPartner : [{[key:string] : any;}];
  theme : string;
}

function MarketRoutes(props: MarketRoutesProps) {
    const { theme, resPartner } = props
    const location = useLocation()
   
    return (
        <Switch>
            <Route exact path="/markets/:asset/token" component={() => <TokenSpecific theme={theme} resPartner={resPartner}/>}/>
            <Route exact path="/markets" component={MarketInfo}/>
        </Switch>
    );
}

export default MarketRoutes;