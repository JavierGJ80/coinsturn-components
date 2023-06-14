import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
export interface DateInputKycProps {
    fontColor: string;
    offset: number;
    initialDate: string;
    onChange: (params: any) => void;
}
declare const DateInputKyc: (props: DateInputKycProps) => React.JSX.Element;
export default DateInputKyc;
