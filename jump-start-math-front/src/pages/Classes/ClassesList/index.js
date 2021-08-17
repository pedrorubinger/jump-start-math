import React, { useRef, useState } from 'react';
import { Table } from 'antd';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import {
  archiveClassroom,
  storeClassroom,
} from '../../../services/requests/classroom';
import classroomSchema from './schema';
import { Container } from './styles';
import ActionButton from '../../../components/UI/ActionButton';
import AddClassForm from '../../../components/Forms/AddClassForm';
import ListHeader from '../../../components/UI/ListHeader';
import Toast from '../../../components/UI/Toast';

const ClassesList = ({ records = [], setRecords, teacherId }) => {
  const formRef = useRef();
  const history = useHistory();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const columns = [
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (classroomIsActive) => classroomIsActive ? 'Ativa' : 'Arquivada',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
      render: (description) => description || 'Não Fornecida'
    },
    {
      title: 'Data de Criação',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <ActionButton
            title={record.is_active
              ? 'Clique para arquivar esta turma'
              : 'Clique para reativar esta turma'
            }
            bgColor={record.is_active ? '#f74c4c' : 'green'}
            onClick={async () => {
              const { isConfirmed } = await Swal.fire({
                title: 'Você tem certeza?',
                text: record.is_active
                  ? 'Tem certeza que pretende arquivar esta turma?'
                  : 'Tem certeza que pretende reativar esta turma?',
                showCancelButton: true,
                cancelButtonText: record.is_active
                  ? 'Não, manter turma ativa'
                  : 'Não, manter turma inativa',
                showConfirmButton: true,
                confirmButtonText: record.is_active
                  ? 'Sim, arquivar turma'
                  : 'Sim, reativar turma'
              });
    
              if (isConfirmed) {
                try {
                  const newStatus = !record.is_active;

                  await archiveClassroom(record.code, {
                    is_active: newStatus,
                  });
    
                  const updatedRecords = [...records].map((item) => {
                    if (item.code === record.code) {
                      return { ...item, is_active: newStatus };
                    }

                    return item;
                  });

                  setRecords(updatedRecords);
                } catch (error) {
                  Swal.fire({
                    title: 'Erro ao alterar o status desta turma!',
                    text:
                      'Desculpe, um erro aconteceu ao alterar o status da turma. Por favor, tente novamente mais tarde ou contate-nos.',
                    icon: 'error',
                  });
                }
              }
            }}
          >
            {record.is_active ? 'Arquivar' : 'Ativar'}
          </ActionButton>
          <ActionButton
            title="Clique para ver o relatório desta turma"
            style={{ marginLeft: 5 }}
            onClick={() => history.push('/teacher/class/report', {
              id: record._id,
            })}
          >
            Relatório
          </ActionButton>
        </>
      ),
    }
  ];

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      await classroomSchema.validate(values, { abortEarly: false });
      
      const response = await storeClassroom({
        name: values.name,
        code: values.code,
        description: values.description || '',
        teacher_id: teacherId,
      });

      Toast().fire({
        icon: 'success',
        title: 'Essa turma foi cadastrada com sucesso!',
      });
      setRecords([...records, { ...response.data }]);
      setModalIsVisible(false);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        Swal.fire({
          title: 'Erro ao cadastrar nova turma!',
          text:
            'Desculpe, um erro aconteceu ao cadastrar esta turma. Por favor, tente novamente mais tarde ou contate-nos.',
          icon: 'error',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <AddClassForm
            formRef={formRef}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
          />
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
        rowKey={(data) => data.code}
      />
    </Container>
  );
};

export default ClassesList;
