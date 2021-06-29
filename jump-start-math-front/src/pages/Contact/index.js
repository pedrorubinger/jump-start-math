import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import contactSchema from '../../components/Forms/ContactForm/schema';
import { sendContactEmail } from '../../services/requests/contact';
import {
  ContactContainer,
  ContactContent,
  ContactHeader,
  ContactHeaderTitle,
  ContactHeaderText,
} from './styles'
import ContactForm from '../../components/Forms/ContactForm';
import Toast from '../../components/UI/Toast';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await contactSchema.validate(data, {
        abortEarly: false,
      });

      await sendContactEmail({ ...data });
      formRef?.current?.reset();
      Toast().fire({
        icon: 'success',
        title: 'Seu email foi enviado com sucesso!',
      });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        Swal.fire({
          title: 'Algo deu errado!',
          text: 'Não foi possível enviar sua mensagem agora. Por favor, tente novamente mais tarde!',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Entendi',
        });
      }
    } finally {
      setIsSubmitting(false);
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
        <ContactForm
          formRef={formRef}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
