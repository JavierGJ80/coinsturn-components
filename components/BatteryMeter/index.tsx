import React, { useState } from "react";
import "./index.css";

export interface BatteryMeterProps {
  dayPercent: number;
  monthPercent: number;
  yearPercent: number;
  resPartner: {[key:string]:any}[];
}

const BatteryMeter =(props: BatteryMeterProps) => {
  const { dayPercent, monthPercent, yearPercent,resPartner } = props;
  const [percent, setPercent] = useState(dayPercent);
  const [selectedButton, setSelectedButton] = useState("day");
  const size = 100;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference * (1 - percent / 100);
  const language = resPartner[0].coinsturn_language
  const color = resPartner[0].coinsturn_theme

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
    <div style = {{
      display: "flex",
      flexDirection: "column",
      gap: "20px"

    }}>
      <div>
        <button className="button"
          onClick={handleDayClick}
          style={{ backgroundColor: selectedButton === "day" ? "#7DC085" : "" }}
          type = "button"
        >
          {language=="es"?"Dia":"Day"}
        </button>
        <button className="button"
          onClick={handleMonthClick}
          style={{
            backgroundColor: selectedButton === "month" ? "#7DC085" : "",
            color: color=="light"?"525252":"FFFFFF"
          }} type = "button"
        >
          {language=="es"?"Mes":"Month"}
        </button>
        <button className="button"
          onClick={handleYearClick}
          style={{
            backgroundColor: selectedButton === "year" ? "#7DC085" : "",
            color: color=="light"?"525252":"FFFFFF"
          }} type = "button"
        >
          {language=="es"?"Año":"Year"}
        </button>
        
        
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