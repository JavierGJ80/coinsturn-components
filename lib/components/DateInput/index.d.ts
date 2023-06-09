/// <reference types="react" />
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
export interface DateInputProps {
    fontColor: string;
    technology: string;
    onChange: (params: any) => void;
}
declare const DateInput: (props: DateInputProps) => JSX.Element;
export default DateInput;
