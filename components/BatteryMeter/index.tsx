import React, { useState } from "react";
import "./index.css";

export interface BatteryMeterProps {
  dayPercent: number;
  monthPercent: number;
  yearPercent: number;
}

const BatteryMeter =(props: BatteryMeterProps) => {
  const { dayPercent, monthPercent, yearPercent } = props;
  const [percent, setPercent] = useState(dayPercent);
  const [selectedButton, setSelectedButton] = useState("day");
  const size = 100;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference * (1 - percent / 100);

  const handleDayClick = () => {
    setPercent(dayPercent);
    setSelectedButton("day");
  };

  const handleMonthClick = () => {
    setPercent(monthPercent);
    setSelectedButton("month");
  };

  const handleYearClick = () => {
    setPercent(yearPercent);
    setSelectedButton("year");
  };

  return (
    <div>
      <div>
        <button className="button"
          onClick={handleDayClick}
          style={{ backgroundColor: selectedButton === "day" ? "#7DC085" : "" }}
        >
          Day
        </button>
        <button className="button"
          onClick={handleMonthClick}
          style={{
            backgroundColor: selectedButton === "month" ? "#7DC085" : "",
          }}
        >
          Month
        </button>
        <button className="button"
          onClick={handleYearClick}
          style={{
            backgroundColor: selectedButton === "year" ? "#7DC085" : "",
          }}
        >
          Year
        </button>
        <div className="row">
        <button className="row">
       
        </button>
        </div>
        
      </div>
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="#E4E4E4"
          strokeWidth={strokeWidth}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="#7DC085"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#7DC085"
          fontSize="24"
          fontFamily="poppins"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default BatteryMeter;