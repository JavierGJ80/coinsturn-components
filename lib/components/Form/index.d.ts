import React from "react";
export interface IFormValues extends Record<string, unknown> {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    captcha: string | null;
}
export interface FormProps {
    borderColor: string;
    bgColor: string;
    emailTo: string;
    buttonColor: string;
    serviceId: string;
    templateId: string;
    userId: string;
    recaptchaSiteKey: string;
}
declare const Form: React.FC<FormProps>;
export default Form;
