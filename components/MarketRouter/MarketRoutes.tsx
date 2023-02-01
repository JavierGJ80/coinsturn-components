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
}

function MarketRoutes(props: MarketRoutesProps) {
    const { resPartner } = props
    const location = useLocation()
    const theme = resPartner[0].coinsturn_theme
   
    return (
        <Switch>
            <Route exact path="/markets/:asset/token" component={() => <TokenSpecific theme={theme} resPartner={resPartner} asset='asdf'/>}/>
            {/* <Route exact path="/markets" component={() => <MarketInfo theme={theme} resPartner={resPartner}/>}/> */}
        </Switch>
    );
}

export default MarketRoutes;