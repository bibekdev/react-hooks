import { useState } from 'react';

const Basic = () => {
  const [title, setTitle] = useState('Random Title');

  const handleClick = () => {
    if (title === 'Random Title') {
      setTitle('Bibek Chaudhary');
    } else {
      setTitle('Random Title');
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <button onClick={handleClick}>Change Title</button>
    </>
  );
};

export default Basic;
