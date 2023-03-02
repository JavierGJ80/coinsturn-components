import React, { useEffect, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import CSS from 'csstype';
import "./index.css";

export interface DateInputKycProps {
    fontColor : string,
    offset : number,
    initialDate : string,
    onChange : (params: any) => void
}

const changeDate = (originalDate : any) => {
  try{
    const newDate = originalDate instanceof Date? originalDate : new Date(originalDate)
    if(originalDate instanceof Date){
      return newDate
    }
    else{
      newDate.setHours(newDate.getHours() + 6)
      return newDate
    }
  }
  catch{
    return new Date()
  }
};

const DateInputKyc = (props: DateInputKycProps) => {
    const { fontColor, offset, initialDate, onChange } = props;
    const [startDate, setStartDate] = useState(initialDate? changeDate(initialDate) : changeDate(new Date()));
    const [flag , setFlag] = useState(true)

    const dateOffset = offset? (typeof offset == 'number'? offset : parseInt(offset)) : 0;

    const today = new Date();
    const maxDate = new Date(today.getFullYear() + dateOffset, today.getMonth(), today.getDate())
    const minDate = new Date(today.getFullYear() - 100 + dateOffset, today.getMonth(), today.getDate());
    
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
        if(flag && initialDate){
          setStartDate(changeDate(initialDate))
          setFlag(false);
        }
    },[startDate, initialDate])

    
    return (

      <DatePicker
        customInput={<DateInput/>}
        selected={startDate}
        showYearDropdown
        yearDropdownItemNumber={100}
        showMonthDropdown
        maxDate={maxDate}
        minDate={minDate}
        onChange={(date:Date) => setStartDate(date)}
        placeholderText="Select a date"
      />    
    );
};

export default DateInputKyc;
