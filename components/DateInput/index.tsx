import React, { useEffect, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import CSS from 'csstype';
import "./index.css";

export interface DateInputProps {
    fontColor : string,
    technology : string,
    onChange : (params: any) => void
}

interface technologyMinDates {
  [key : string] : string
}


const DateInput = (props: DateInputProps) => {
    const { fontColor,technology, onChange } = props;
    const [startDate, setStartDate] = useState(new Date());
    const maxDate = new Date()
    let minDate = subDays(new Date(), 365)
    const technologyMinDates : technologyMinDates = {
      '2' : '2023-05-01',
      '3' : '2023-02-01'
    }

    if(technologyMinDates[technology]){
      minDate = new Date(technologyMinDates[technology])
      if(minDate.getDate() != 1){
        minDate.setDate(1)
        minDate.setMonth(minDate.getMonth() + 1)
      }
    }
    
    let DateInputCss: CSS.Properties = {
        backgroundColor: 'transparent',
        color: fontColor,
        borderColor : 'transparent',
        cursor : 'pointer'
    };

    const DateInput = forwardRef<HTMLButtonElement>(({ value, onClick }:any, ref) => (
    <button  style={DateInputCss} className="DateInputCss" onClick={onClick} ref={ref} type="button">
      {value}
    </button>
  ));

    useEffect(()=>{
        onChange(startDate.toISOString().split('T')[0]);
        if(['quantum_cover', 'trading_cover'].includes(technology) && startDate < new Date(technologyMinDates[technology])){
          setStartDate(new Date())
        }
        
    },[startDate, technology])

    
    return (

        <DatePicker
      customInput={<DateInput/>}
      selected={startDate}
      onChange={(date:Date) => setStartDate(date)}
      minDate={minDate}
      maxDate={maxDate}
      placeholderText="Select a date"
    />    
    );
};

export default DateInput;
