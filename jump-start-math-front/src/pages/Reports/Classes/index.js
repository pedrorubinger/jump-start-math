import React from 'react';
import { Table } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../../components/UI/Header';
import Titles from '../../../components/UI/Titles';
import ListHeader from '../../../components/UI/ListHeader';
import ActionButton from '../../../components/UI/ActionButton';

const ClassesReports = () => {
  const { location } = useHistory();
  const id = location?.state?.id;
  const records = [
    {
      id: 1,
      student: 'Pedro Henrique Pimenta Rubinger',
      attempts: 3,
      exercise: 'Questão 01',
      time: '3m59s'
    },
    {
      id: 2,
      student: 'João da Silva Fernandes',
      attempts: 2,
      exercise: 'Questão 01',
      time: '12m33s'
    },
    {
      id: 3,
      student: 'Maria dos Santos',
      attempts: 5,
      exercise: 'Questão 01',
      time: '01m07s'
    },
    {
      id: 4,
      student: 'Gabriel da Silva Júnior',
      attempts: 1,
      exercise: 'Questão 01',
      time: '07m59s'
    }
  ];
  const columns = [
    {
      title: 'Aluno',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Tentativas',
      dataIndex: 'attempts',
      key: 'attempts',
    },
    {
      title: 'Questão',
      dataIndex: 'exercise',
      key: 'exercise',
      // render: (description) => description || 'Não Fornecida'
    },
    {
      title: 'Tempo Gasto',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => (
        <ActionButton
          title="Clique para ver detalhes deste relatório"
          onClick={() => {}} // Implementar
        >
          Ver detalhes
        </ActionButton>
      ),
    },
  ];

  if (!id) {
    return <Redirect to="/teacher/classes" />;
  }

  return (
    <>
      <Header />
      <Titles titleName="Relatório da Turma" />
      <Container>
        <ListHeader
          length={records.length}
          emptyMsg="Ainda não há relatórios disponíveis."
          msg={`Atualmente há ${records.length} relatório(s).`}
          title="Relatórios"
        />
        <Table
          columns={columns}
          dataSource={records}
          rowKey={(data) => data.code}
        />
      </Container>
    </>
  );
};

export default ClassesReports;
