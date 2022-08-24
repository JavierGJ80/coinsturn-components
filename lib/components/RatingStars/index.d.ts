import React from "react";
export interface RatingStarsProps {
    stars: number;
    rating: number;
    disable: boolean;
    size: number;
    margin: number;
    obtainValue: Function;
}
declare const RatingStars: React.ForwardRefExoticComponent<RatingStarsProps & React.RefAttributes<unknown>>;
export default RatingStars;
