import { useState, useRef, useEffect } from "react";

export default function Ref() {
  const [count, setCount] = useState(0);
  const refContainer = useRef(0);
  useEffect(() => {
    //refContainer.current = refContainer.current + 1;
  });

  return (
    <>
      <h3>{count}</h3>
      <h4>I like you {refContainer.current} times more!</h4>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
    </>
  );
}
