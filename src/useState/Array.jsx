// USE OF USESTATE HOOK IN ARRAY EXAMPLE

import { useState } from 'react';

import { data } from '../Asset/data';

const Array = () => {
  const [people, setPeople] = useState(data);

  // Remove the name of single person
  const removeName = id => {
    let newList = people.filter(person => person.id !== id);
    setPeople(newList);
  };

  // Remove the name of all peoople
  const removeNames = () => setPeople([]);

  return (
    <>
      {people.map(person => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button onClick={() => removeName(person.id)}>Clear</button>
        </div>
      ))}
      <button onClick={removeNames}>Remove Names</button>
    </>
  );
};

export default Array;
