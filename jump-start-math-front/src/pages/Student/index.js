import react, {useEffect, useState} from 'react'
import Header from '../../components/UI/Header'
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import Titles from '../../components/UI/Titles';
import { Container } from '../Reports/Classes/styles';
import ListHeader from '../../components/UI/ListHeader';
import { getUserAttempts } from '../../services/requests/report';
import { Redirect } from 'react-router-dom';

export default function Student(match){
 
  const [records, setRecords] = useState([]);
  const [avgAttemptsTime, setAvgAttemptsTime] = useState(0);
  const { id } = useSelector((state) => state.User);
  const [hasError, setHasError] = useState(false);
  const [hasClass, setHasClass] = useState(true);
  const [goToTry, setGoToTry] = useState(false);

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
      }
  ];
    
  useEffect(()=>{
    (async()=> {
      try{
        const response = await getUserAttempts(id);

        // const responseIfClass = await 
        // responseIfClass

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
      } catch(err) {
        setHasError(true);
      }
    })();
  },[]);

  if (hasError) {
    return <h4>Recarregue a página e tente novamente.</h4>;
  }

  function newTry(){
    if(hasClass){
      setGoToTry(true);
    }else{
      alert("Para fazer uma tentativa, matricule-se em uma turma");
    }
  }

  return(
      <>
        <Header/>
        <Titles titleName="Área Restrita Alunos"/>
        <Container>
          <ListHeader
            length={records.length}
            emptyMsg="Ainda não há relatórios de alunos disponíveis."
            msg={`Você totalizou ${records.length} tentativa(s).`}
            title="Tentativas"
            addButton={{
              visible: true,
              title: 'Clique para fazer umka nova tentativa',
              value: 'Fazer nova tentativa',
              onClick: ()=> newTry()
            }}
          />
          <Table
            columns={columns}
            dataSource={records}
            rowKey={(data) => data.id}
          />
        </Container>
        {
          goToTry && <Redirect to="/student/quiz"/>
        }
    </>
  )
}