import React from 'react';

import {
  ContactContainer,
  ContactContent,
  ContactHeader,
  ContactHeaderTitle,
  ContactHeaderText,
} from './styles'
import ContactForm from '../../components/Forms/ContactForm';

const Contact = () => {
  /** TO DO: Implement form handler (react-hook-form | formik | unform) */
  const onSubmit = (values) => {
    console.log('submitted:', values)
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
        <ContactForm onSubmit={onSubmit} />
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
