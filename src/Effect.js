import { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  console.log("This is from component");
  useEffect(() => {
    console.log("This is from useEffect");
    return () => {
      console.log("This is from useEffect CLEANUP!");
    };
  }, [count, fruit]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      {console.log("returned from compnent")}
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>++++</button>
      <button onClick={() => setCount((count) => count - 1)}>----</button>
      <h3>{fruit}</h3>
      <button onClick={() => setFruit("apple")}>Apple</button>
      <button onClick={() => setFruit("orange")}>Orange</button>
      <button onClick={() => setFruit("grape")}>Grape</button>
      <button onClick={() => setFruit("Bob")}>Bob</button>
      <h3>{resourceType}</h3>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      {items.map((item, index) => (
        <pre key={index}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}
