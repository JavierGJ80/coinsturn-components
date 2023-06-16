import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import Modal from 'react-modal';

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
  textColor: string;
  inputBgColor: string;
  emailTo: string;
  buttonColor: string;
  serviceId: string;
  templateId: string;
  userId: string;
  recaptchaSiteKey: string;
  backdropFilterOn: boolean;
}

const FormTemplate: React.FC<FormTemplateProps> = ({ borderColor, borderRadius, bgColor, textColor, inputBgColor, emailTo, buttonColor, serviceId, templateId, userId, recaptchaSiteKey, backdropFilterOn }) => {
  const [formValues, setFormValues] = useState<IFormValues>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    captcha: null,
  });

  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [isCaptchaCompleted, setIsCaptchaCompleted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: `1px solid ${borderColor}`,
    width: "100%",
    color: textColor,
    backgroundColor: inputBgColor,
  };

  const checkFormFilled = () => {
    for (let key in formValues) {
      if (key !== 'captcha' && (formValues[key as keyof IFormValues] === '')) {
        return false;
      }
    }
    return true;
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });

    setIsFormFilled(checkFormFilled());
  };

  const handleCaptchaChange = (value: string | null) => {
    setFormValues({
      ...formValues,
      captcha: value,
    });

    setIsCaptchaCompleted(!!value);
    setIsFormFilled(checkFormFilled());
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (formValues.captcha) {
      emailjs.send(serviceId, templateId, formValues as unknown as Record<string, unknown>, userId)
        .then((result) => {
          console.log(result.text);
          setIsModalOpen(true); // Abrir el modal al enviar el formulario con éxito
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formStyle = {
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    borderRadius: '10px',
    maxWidth: '752px',
    padding: '20px',
    ...(backdropFilterOn && {
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
    }),
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgb(20 20 20 / 81%)",
    },
    content: {
      height: '30%',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '70%',
      margin: 'auto',
      borderRadius: `${borderRadius}px`,
      border: `1px solid ${borderColor}`,
      backgroundColor: bgColor.length == 9? bgColor.slice(0,-2) : bgColor,
      color: 'white',
      ...(backdropFilterOn && {
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      }),
    },
  };
  

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} style={inputStyle} required />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} style={inputStyle} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} style={inputStyle} required />
      <input type="text" name="company" placeholder="Company" onChange={handleInputChange} style={inputStyle} required />
      <textarea name="message" placeholder="Message" onChange={handleInputChange} style={{ ...inputStyle, resize: 'none', height: '100px' }} required />
      <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={handleCaptchaChange} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} />
      <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
        <input type="submit" value="Send" className="sendButton" style={{ ...inputStyle, cursor: 'pointer', marginTop: '20px', backgroundColor: isFormFilled && isCaptchaCompleted ? buttonColor : '#b5b0b0', maxWidth: '212px', borderRadius: `${borderRadius}px`, color: isFormFilled && isCaptchaCompleted ? 'white' : 'black' }} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Submitted"
        ariaHideApp={false}
        style={modalStyle as Modal.Styles}
      >
        <h2>Sent with Success</h2>
        <p>Your form has been successfully submitted.</p>
        <button
          onClick={closeModal}
          style={{
            padding: '8px 16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: `${borderRadius}px`,
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Close
        </button>
      </Modal>
    </form>
  );
}

export default FormTemplate;