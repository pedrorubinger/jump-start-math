import React, { useEffect, useState } from 'react';
import MarkDown from 'markdown-to-jsx';

const Markdown = () => {
  const file_name = 'my-md.md'; //Should be dynamic
  const [post, setPost] = useState('');

  useEffect(() => {
    console.log('useEffect');
    import(`../../markdown/${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res));
      })
      .catch(err => console.log(err));
  });

  return (
    <div>
      <header className="App-header">
        <h1>Hello JumpStart <br />  João here!</h1>
      </header>
      <MarkDown>
        {post}
      </MarkDown>
    </div>
  );
};

export default Markdown;
