import { useState } from 'react';

const Object = () => {
  const [person, setPerson] = useState({
    name: 'bibek',
    age: 24,
    message: 'random message',
  });

  const handleChange = () => {
    setPerson({ ...person, message: 'Message Changed' });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button onClick={handleChange}>Change</button>
    </>
  );
};

export default Object;
