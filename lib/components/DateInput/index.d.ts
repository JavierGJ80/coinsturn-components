/// <reference types="react" />
import "react-datepicker/dist/react-datepicker.css";
export interface DateInputProps {
    className: string;
    onChange: Function;
}
declare const DateInput: (props: DateInputProps) => JSX.Element;
export default DateInput;
