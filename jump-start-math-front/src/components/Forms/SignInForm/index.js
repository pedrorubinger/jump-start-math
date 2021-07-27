import React from 'react';
import { Form } from '@unform/web';

import Button from '../../UI/Button';
import FormGroup from '../../UI/FormGroup';
import Input from '../../UI/Input';
import Label from '../../UI/Label';

const SignInForm = ({ formRef, onSubmit, isSubmitting }) => {
  return (
    <Form ref={formRef} onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="email" required>Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Seu email"
          autoFocus
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password" required>Senha</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Sua senha"
        />
      </FormGroup>

      <FormGroup>
        <Button
          type="submit"
          title="Clique para entrar"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SignInForm;
