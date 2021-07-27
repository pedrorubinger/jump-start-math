import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchClassroomsByTeacherId } from '../../services/requests/classroom';
import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import ClassesList from './ClassesList/index';

const Classes = () => {
  const { user } = useSelector((state) => state.User);
  const teacherId = user?.id;
  const [records, setRecords] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchClassroomsByTeacherId(teacherId);

        setRecords(response.data.classrooms);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, [teacherId]);

  if (error) {
    return (
      <h2>
        Desculpe, um erro ocorreu ao buscar as turmas. Por favor, tente novamente mais tarde ou contate-nos.
      </h2>
    );
  }

  if (isLoading) {
    return <h2>Carregando turmas...</h2>
  }

  return (
    <>
      <Header />
      <Titles titleName="Turmas" />
      <ClassesList
        records={records}
        setRecords={setRecords}
        teacherId={teacherId}
      />
    </>
  );
};

export default Classes;
