import React, { useState } from 'react';
import { Table } from 'antd';
import { Button, Modal } from 'react-bootstrap';

import { Container } from './styles';
import AddClassForm from '../../../components/Forms/AddClassForm';
import ListHeader from '../../../components/UI/ListHeader';
import ActionButton from '../../../components/UI/ActionButton';

const columns = [
  {
    title: 'Código',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Data de Criação',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Ações',
    dataIndex: 'actions',
    key: 'actions',
    render: (text, record) => (
      <>
        {console.log(text, record)}
        <ActionButton
          title="Clique para arquivar esta turma"
          bgColor="#f74c4c"
        >
          Arquivar
        </ActionButton>
      </>
    ),
  }
];

const ClassesList = ({ records = [] }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Container>
      <Modal
        animation={false}
        show={modalIsVisible}
        onHide={() => setModalIsVisible(false)}
      >
        <Modal.Header closeButton closeLabel="">
          <Modal.Title>Cadastrar Turma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddClassForm />
        </Modal.Body>
      </Modal>
      
      <ListHeader
        length={records.length}
        emptyMsg="Ainda não há turmas cadastradas."
        msg={`Atualmente há ${records.length} turma(s) cadastrada(s).`}
        title="Turmas"
        addButton={{
          visible: true,
          value: 'Adicionar Turma',
          title: 'Clique para adicionar uma turma',
          onClick: () => setModalIsVisible(true),
        }}
      />
      <Table
        columns={columns}
        dataSource={records}
        rowKey={(data) => data.id}
      />
    </Container>
  );
};

export default ClassesList;
