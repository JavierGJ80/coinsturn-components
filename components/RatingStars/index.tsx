import React from "react";
import StarsRating from "react-star-rate";

export interface RatingStarsProps {
  stars: number;
  rating: number;
  disable: boolean;
  size: number;
  margin: number;
  obtainValue: Function;
}

const RatingStars = React.forwardRef((props: RatingStarsProps, ref) => {
  const { rating, disable, size, margin, stars, obtainValue } = props;
  React.useImperativeHandle(ref, () => ({
    handleSave() {
      if (value >= 0) obtainValue(value);
    },
  }));
  const [value, setValue] = React.useState(rating);
  return (
    <StarsRating
      count={stars}
      defaultValue={value}
      value={value}
      disabled={disable}
      style={{
        style: { fontSize: `${size}px` },
        full: { star: { marginRight: `${margin}px` } },
        half: { star: { marginRight: `${margin}px` } },
        zero: { star: { marginRight: `${margin}px` } },
      }}
      onChange={(value) => {
        setValue(!value ? 0 : value);
        obtainValue(value);
      }}
    />
  );
});

export default RatingStars;
