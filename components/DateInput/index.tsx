import React, { useEffect, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import CSS from 'csstype';

export interface DateInputProps {
    fontColor : string,
    onChange : (params: any) => void
    
}
const SubDays = (new Date)

const DateInput = (props: DateInputProps) => {
    const { fontColor, onChange } = props;
    const [startDate, setStartDate] = useState(new Date());
    
    let DateInputCss: CSS.Properties = {
        backgroundColor: 'transparent',
        color: fontColor,
        borderColor : 'transparent',
        cursor : 'pointer'
    };

    const DateInput = forwardRef<HTMLButtonElement>(({ value, onClick }:any, ref) => (
    <button  style={DateInputCss} className="DateInputCss" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

    useEffect(()=>{
        onChange(startDate.toISOString().split('T')[0]);
    },[startDate])

    
    return (
        <DatePicker
      selected={startDate}
      onChange={(date:Date) => setStartDate(date)}
      minDate={subDays(new Date(), 365)}
      maxDate={startDate}
      placeholderText="Select a date"
    />    
    );
};

export default DateInput;
