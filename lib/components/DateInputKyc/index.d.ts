/// <reference types="react" />
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
export interface DateInputKycProps {
    fontColor: string;
    onChange: (params: any) => void;
}
declare const DateInputKyc: (props: DateInputKycProps) => JSX.Element;
export default DateInputKyc;
