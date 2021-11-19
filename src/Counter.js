import {React, useEffect, useState} from 'react';

function Counter () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <p> You clicked {count} times</p>
      <button onClick = {() => setCount(count + 1)}>add 1</button>
      <button onClick = {() => setCount(count - 1)}>minus 1</button>
      <button onClick = {() => setCount(0)}>reset</button>

    </div>
  );
}

export default Counter;
