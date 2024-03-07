// https://github.com/withastro/astro/blob/latest/examples/framework-multiple/src/components/react/ReactCounter.tsx

import { useState, type ReactElement } from 'react';

export function Counter({ children }: { children: ReactElement }) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
