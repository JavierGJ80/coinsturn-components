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


const DateInput = (props: DateInputProps) => {
    const { fontColor,technology, onChange } = props;
    const [startDate, setStartDate] = useState(new Date());
    const maxDate = new Date()
    let minDate = subDays(new Date(), 365)
    if(technology && ['trading_cover', 'quantum_cover', 'quantum_trading'].includes(technology)){
      minDate = new Date('2023-02-01')
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
