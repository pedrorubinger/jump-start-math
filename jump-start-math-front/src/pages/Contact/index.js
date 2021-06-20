import React, { useRef } from 'react';
import * as Yup from 'yup';

import contactSchema from '../../components/Forms/ContactForm/schema';
import {
  ContactContainer,
  ContactContent,
  ContactHeader,
  ContactHeaderTitle,
  ContactHeaderText,
} from './styles'
import ContactForm from '../../components/Forms/ContactForm';
import { sendContactEmail } from '../../services/requests/contact';

const Contact = () => {
  const formRef = useRef();

  const onSubmit = async (data) => {
    console.log('submitted:', data)

    try {
      await contactSchema.validate(data, {
        abortEarly: false,
      });

      /** TO DO: Submit form, handle response and displays feedback... */
      const response = await sendContactEmail({ ...data });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <ContactHeaderTitle>
          Precisa de nós? Entre em contato!
        </ContactHeaderTitle>
        <ContactHeaderText>
          Preencha o formulário abaixo para enviar um email para a nossa equipe.
        </ContactHeaderText>
      </ContactHeader>

      <ContactContent>
        <ContactForm formRef={formRef} onSubmit={onSubmit} />
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
