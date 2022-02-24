import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value === 0) {
      return setValue(0);
    } else {
      return setValue(value - 1);
    }
  };

  const reset = () => setValue(0);

  const increment = () => setValue(value + 1);

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue(prevState => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem' }}>
        <h2>State Counter</h2>
        <h1>{value}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </section>

      <section style={{ margin: '4rem' }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button onClick={complexIncrease}>Increase</button>
      </section>
    </>
  );
};

export default UseStateCounter;
