/// <reference types="react" />
import "react-datepicker/dist/react-datepicker.css";
export interface DateInputProps {
    className: string;
    onChange: (params: any) => void;
}
declare const DateInput: (props: DateInputProps) => JSX.Element;
export default DateInput;
