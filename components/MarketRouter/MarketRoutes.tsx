import React from 'react';
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import MarketInfo from "../MarketInfo";
import TokenSpecific from "../TokenSpecific";

interface MarketRoutesProps {
  backgroundColor : string;
  fontColor : string;
  resPartner : [{[key:string] : any;}];
}

function MarketRoutes(props: MarketRoutesProps) {
    const { backgroundColor, fontColor, resPartner } = props
    const location = useLocation()
   
    return (
        <Switch>
            <Route path="/:asset" component={() => <TokenSpecific backgroundColor={backgroundColor} fontColor={fontColor} resPartner={resPartner}/>}/>
            <Route exact path="/" component={MarketInfo}/>
        </Switch>
    );
}

export default MarketRoutes;