import { useEffect, useState } from 'react';

const Basic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect called');
    if (value >= 1) document.title = `New Message(${value})`;
  });
  console.log('render component');
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};

export default Basic;
