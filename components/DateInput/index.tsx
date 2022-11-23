import React, { EventHandler, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DateInputProps {
    className : string,
    onChange : (params: any) => void
}

const DateInput = (props: DateInputProps) => {
    const { className, onChange } = props;
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=>{
        console.log("Triggering event")
        onChange(startDate.toISOString().split('T')[0]);
    },[startDate])

    return (
        <DatePicker
            selected={startDate} 
            onChange={(date:Date) => setStartDate(date)}
            className={className}
        />
    );
};

export default DateInput;
