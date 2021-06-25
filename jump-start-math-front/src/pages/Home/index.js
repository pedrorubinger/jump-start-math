import React from 'react';
import Markdown from '../../components/UI/Markdown';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Hello JumpStart <br />  Math</h1>
      </header>
      <Markdown fileName={'not-found.md'}/>
    </div>
  );
};

export default Home;
