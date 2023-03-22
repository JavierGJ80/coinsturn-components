import React from "react";

 export interface BatteryMeterProps {
  percent: number;
}

const BatteryMeter: React.FC<BatteryMeterProps> = ({ percent }) => {
  const size = 100;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg viewBox={`0 0 ${size} ${size}`}>
      <circle
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke="#D8D8D8"
        strokeWidth={strokeWidth}
      />
      <circle
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke="#0B93F6"
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
        fill="#0B93F6"
        fontSize="32"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default BatteryMeter;
