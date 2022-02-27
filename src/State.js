import { useState } from "react";

const startState = () => {
  console.log("This is from useState initial");
  return 10;
};

export default function State() {
  console.log("State component was called!");
  const [count, setCount] = useState(startState);
  console.log("start state: ", count);
  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const handleClickButSame = () => {
    console.log("same function -> init: ", count);
    setCount((count) => count);
    console.log("same function -> end: ", count);
  };
  console.log("now state: ", count);

  return (
    <div>
      {count}
      <button onClick={handleClick}>increase</button>
      <button onClick={handleClickButSame}>same</button>
    </div>
  );
}
