import React from "react";
export interface IFormValues extends Record<string, unknown> {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    captcha: string | null;
}
export interface FormTemplateProps {
    borderColor: string;
    borderRadius: number;
    bgColor: string;
    emailTo: string;
    buttonColor: string;
    serviceId: string;
    templateId: string;
    userId: string;
    recaptchaSiteKey: string;
}
declare const FormTemplate: React.FC<FormTemplateProps>;
export default FormTemplate;
