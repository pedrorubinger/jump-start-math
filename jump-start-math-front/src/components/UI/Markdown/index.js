import React, { useEffect, useState } from 'react';
import MarkDown from 'markdown-to-jsx';

const Markdown = (props) => {
  const file_name = props ? props.fileName : 'not-found.md'; //Should be dynamic
  const [post, setPost] = useState('');

  useEffect(() => {
    console.log('useEffect');
    import(`../../../markdowns/${file_name}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res));
      })
      .catch(err => console.log(err));
  });

  return (
    <div>
      <MarkDown>
        {post}
      </MarkDown>
    </div>
  );
};

export default Markdown;
