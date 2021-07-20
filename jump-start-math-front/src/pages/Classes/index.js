import React from 'react';

import Header from '../../components/UI/Header';
import Titles from '../../components/UI/Titles';
import ClassesList from './ClassesList/index';

const records = [
  {
    id: 1,
    name: 'Turma B - Geometria',
    code: 'TB193',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    created_at: '2021-09-11',
  },
  {
    id: 2,
    name: 'Turma A - Geometria',
    code: 'TA292',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem',
    created_at: '2019-12-05',
  },
  {
    id: 3,
    name: 'Turma D - Geomeatria',
    code: 'TD194',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    created_at: '2021-01-15',
  },
  {
    id: 4,
    name: 'Turma C - Geometria',
    code: 'TC872',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    created_at: '2020-06-05',
  },
];

const Classes = () => {
  return (
    <>
      <Header />
      <Titles titleName="Turmas" />
      <ClassesList records={records} />
    </>
  );
};

export default Classes;
