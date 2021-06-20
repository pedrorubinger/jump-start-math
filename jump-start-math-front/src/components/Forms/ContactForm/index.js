import React from 'react';

import { StyledForm } from './styles';
import Button from '../../UI/Button';
import FormGroup from '../../UI/FormGroup';
import Input from '../../UI/Input';
import Label from '../../UI/Label';

const ContactForm = ({ formRef, onSubmit }) => {
  return (
    <StyledForm ref={formRef} onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="name" required>Nome</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Nome Completo"
          autoFocus
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email" required>Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="school">Escola/Empresa</Label>
        <Input
          type="text"
          name="school"
          id="school"
          placeholder="Escola/Empresa"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message" required>Mensagem</Label>
        <Input
          type="textarea"
          name="message"
          id="message"
          placeholder="Sua mensagem..."
        />
      </FormGroup>

      <FormGroup>
        <Button
          type="submit"
          title="Clique para enviar um email para nós!"
        >
          Enviar
        </Button>
      </FormGroup>
    </StyledForm>
  );
};

export default ContactForm;
