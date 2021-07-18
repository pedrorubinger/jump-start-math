import React from 'react';

import { StyledForm } from './styles';
import Button from '../../UI/Button';
import FormGroup from '../../UI/FormGroup';
import Input from '../../UI/Input';
import Label from '../../UI/Label';

const ClassForm = ({ formRef, onSubmit, isSubmitting }) => {
  return (
    <StyledForm ref={formRef} onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="name" required>Nome da Turma</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Nome da Turma"
          autoFocus
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="code" required>Código da Turma</Label>
        <Input
          type="text"
          name="code"
          id="code"
          placeholder="Código da Turma"
          autoFocus
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="description">Descrição</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Descrição"
        />
      </FormGroup>

      <FormGroup>
        <Button
          type="submit"
          title="Clique para cadastrar esta turma"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </FormGroup>
    </StyledForm>
  );
};

export default ClassForm;
