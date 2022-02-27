import { useEffect, useMemo, useState } from "react";

const expensiveCalculation = (n) => {
  console.log("This is from expensiveCalculation");
  for (let i = 0; i < 1000000000; i++) {}
  return n + 2;
};

export default function Memo() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [style, setStyle] = useState({
    backgroundColor: "orange",
    height: 100,
    width: 100,
  });

  const theme = useMemo(() => {
    return {
      color: isDark ? "white" : "black",
      backgroundColor: isDark ? "black" : "white",
      width: 100,
      height: 100,
    };
  }, [isDark]);

  useEffect(() => {
    console.log("Theme has changed");
  }, [theme]);

  const expensiveResult = useMemo(() => {
    console.log("This is from expensive result making function");
    return expensiveCalculation(count);
  }, [count]);
  console.log(style);

  return (
    <>
      {console.log("This is from return")}
      <h3>count: {count}</h3>
      <h3>expensiveResult: {expensiveResult}</h3>
      <button onClick={() => setCount((c) => c - 1)}>increase</button>
      <div style={style}></div>
      <input
        type="text"
        value={style.backgroundColor}
        onChange={(e) =>
          setStyle({ ...style, backgroundColor: e.target.value })
        }
      />
      <div style={theme}>wow</div>
      <button onClick={() => setIsDark(!isDark)}>Toggle</button>
    </>
  );
}
