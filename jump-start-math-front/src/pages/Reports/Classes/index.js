import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Table } from 'antd';
import { Redirect, useHistory } from 'react-router-dom';

import { Container } from './styles';
import Header from '../../../components/UI/Header';
import Titles from '../../../components/UI/Titles';
import ListHeader from '../../../components/UI/ListHeader';
import ActionButton from '../../../components/UI/ActionButton';
import Swal from 'sweetalert2';
import { getClassroomReport } from '../../../services/requests/report';

const ClassesReports = () => {
  const [hasError, setHasError] = useState(false);
  const [records, setRecords] = useState([]);
  const [avgAttemptsTime, setAvgAttemptsTime] = useState(0);
  const [isFetching, setIsFetching] = useState(true);
  const { location } = useHistory();
  const [individualReport, setIndividualReportModal] = useState(null);
  const id = location?.state?.id;
  // const fakeRecords = [
  //   {
  //     id: 1,
  //     student: 'Pedro Henrique Pimenta Rubinger',
  //     attempts: 3,
  //     q01: 'Questão 01',
  //     q02: 'Questão 02',
  //     q03: 'Questão 03',
  //     time: '3m59s'
  //   },
  //   {
  //     id: 2,
  //     student: 'João da Silva Fernandes',
  //     attempts: 2,
  //     q01: 'Questão 01',
  //     time: '12m33s'
  //   },
  //   {
  //     id: 3,
  //     student: 'Maria dos Santos',
  //     attempts: 5,
  //     exercise: 'Questão 01',
  //     time: '01m07s'
  //   },
  //   {
  //     id: 4,
  //     student: 'Gabriel da Silva Júnior',
  //     attempts: 1,
  //     exercise: 'Questão 01',
  //     time: '07m59s'
  //   }
  // ];
  const columns = [
    {
      title: 'Aluno',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Tempo da Tentativa',
      dataIndex: 'attempt_time',
      key: 'attempt_time',
    },
    {
      title: 'Questão 01',
      dataIndex: 'exercise_one',
      key: 'exercise_one',
      // render: (value) => `${value}`,
    },
    {
      title: 'Questão 02',
      dataIndex: 'exercise_two',
      key: 'exercise_two',
      // render: (description) => description || 'Não Fornecida'
    },
    {
      title: 'Questão 03',
      dataIndex: 'exercise_three',
      key: 'exercise_three',
      // render: (description) => description || 'Não Fornecida'
    },
    {
      title: 'Acertos',
      dataIndex: 'hits',
      key: 'hits',
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <ActionButton
          title="Clique para ver detalhes deste relatório"
          onClick={() => setIndividualReportModal(record)}
        >
          Ver detalhes
        </ActionButton>
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await getClassroomReport(id);

        if (response.data?.length) {
          const attemptsTime = [];
          const formattedList = [...response.data].map((item) => {
            attemptsTime.push(Number(item.tempoTentativa));
            return {
              full_item: item,
              id: item.id,
              student: item.userName,
              userId: item.userId,
              exercise_one: `Gastou ${item?.question1?.tempoGasto} minuto(s) e ${item?.question1?.acerto ? 'acertou' : 'errou'}`,
              exercise_two: `Gastou ${item?.question2?.tempoGasto} minuto(s) e ${item?.question2?.acerto ? 'acertou' : 'errou'}`,
              exercise_three: `Gastou ${item?.question3?.tempoGasto} minuto(s) e ${item?.question3?.acerto ? 'acertou' : 'errou'}`,
              hits: [
                item?.question1?.acerto,
                item?.question2?.acerto,
                item?.question3?.acerto
              ].filter((hit) => hit)?.length,
              attempt_time: `${item?.tempoTentativa || 0} minuto(s)`,
            };
          });

          const filteredAttemptsTime = [...attemptsTime]
            .filter((att) => !['NaN', NaN].includes(att));
          const avg = filteredAttemptsTime.reduce((prev, current) => prev + current);

          setAvgAttemptsTime(avg / filteredAttemptsTime?.length);
          setRecords(formattedList);
        }
      } catch (err) {
        setHasError(true);
        Swal.fire({
          title: 'Erro interno',
          text: 'Desculpe, um erro interno ocorreu. Não foi possível buscar o relatório desta turma. Por favor, tente novamente mais tarde ou entre em contato.',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
        });
      } finally {
        setIsFetching(false);
      }
    })();
  }, [id]);

  if (!id) {
    return <Redirect to="/teacher/classes" />;
  }

  if (hasError) {
    return <h4>Recarregue a página e tente novamente.</h4>;
  }

  const totalAttemptsHits = records?.length
    ? [...records]
        .map((item) => item.hits)
        ?.reduce((prev, cur) => prev + cur)
    : 0;

  return (
    <>
      <Header />
      <Titles titleName="Relatório da Turma" />
      <Container>
        {!!individualReport && (
          <Modal
            animation={false}
            show={individualReport}
            onHide={() => setIndividualReportModal(null)}
          >
            <Modal.Header closeButton closeLabel="">
              <Modal.Title>
                Relatório de Individual
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 style={{ textAlign: 'center', marginBottom: 25, color: 'grey' }}>
                {individualReport?.student}
              </h4>

              <strong>Total de Acertos:</strong> {individualReport?.hits || 0}
              <br />

              <strong>Tempo da tentativa:</strong>{' '}
              {individualReport?.attempt_time}
              <br />
              <hr />

              <strong>Questão 01 -{' '}
                {individualReport?.full_item?.question1?.enunciado}
              </strong>
              <br /><br />

              <strong>Resposta Certa:</strong> {' '}
              {individualReport?.full_item?.question1?.respostaEsperada}
              <br />

              <strong>Resposta Dada:</strong> {' '}
              {individualReport?.full_item?.question1?.resposta}
              <br />

              <strong>Tempo Gasto:</strong> {' '}
              {individualReport?.full_item?.question1?.tempoGasto} minuto(s)
              <br />
              <hr />

              <strong>Questão 02 -{' '}
                {individualReport?.full_item?.question2?.enunciado}
              </strong>
              <br /><br />

              <strong>Resposta Certa:</strong> {' '}
              {individualReport?.full_item?.question2?.respostaEsperada}
              <br />

              <strong>Resposta Dada:</strong> {' '}
              {individualReport?.full_item?.question2?.resposta}
              <br />

              <strong>Tempo Gasto:</strong> {' '}
              {individualReport?.full_item?.question2?.tempoGasto} minuto(s)
              <br />
              <hr />

              <strong>Questão 03 -{' '}
                {individualReport?.full_item?.question3?.enunciado}
              </strong>
              <br /><br />

              <strong>Resposta Certa:</strong> {' '}
              {individualReport?.full_item?.question3?.respostaEsperada}
              <br />

              <strong>Resposta Dada:</strong> {' '}
              {individualReport?.full_item?.question3?.resposta}
              <br />

              <strong>Tempo Gasto:</strong> {' '}
              {individualReport?.full_item?.question3?.tempoGasto} minuto(s)
              <br />
              <hr />
            </Modal.Body>
          </Modal>
        )}
        <ListHeader
          length={records.length}
          emptyMsg="Ainda não há relatórios de alunos disponíveis."
          msg={`Os alunos dessa turma totalizaram ${records.length} tentativa(s).`}
          title="Tentativas"
          addButton={{
            visible: true,
            title: 'Clique para ver o relatório geral desta turma',
            value: 'Ver Dados Gerais',
            onClick: () => Swal.fire({
              title: 'Relatório Geral da Turma',
              text: `A turma teve ao todo ${records?.length} tentativa(s) e um tempo médio de ${avgAttemptsTime?.toFixed(2)} minutos por tentativa. Dentre todas as tentativas, houve um total de ${totalAttemptsHits} acerto(s).`,
              showCancelButton: false,
              showConfirmButton: true,
              confirmButtonText: 'Ok',
              icon: 'info',
            }),
          }}
        />
        <Table
          columns={columns}
          dataSource={records}
          rowKey={(data) => data.id}
          loading={isFetching}
        />
      </Container>
    </>
  );
};

export default ClassesReports;
