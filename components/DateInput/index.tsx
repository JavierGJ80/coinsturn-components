import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DateInputProps {
    className : string,
    onChange : Function
}

const DateInput = (props: DateInputProps) => {
    const { className, onChange } = props;
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=>{
        onChange(startDate);
    },[startDate])

    return (
        <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={startDate} 
            onChange={(date:Date) => setStartDate(date)}
            className={className}
        />
    );
};

export default DateInput;
