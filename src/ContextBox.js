import { useDarkTheme } from "./ContextProvider";

export default function Box() {
  const [isDarkTheme, toggleTheme] = useDarkTheme();
  console.log(isDarkTheme, toggleTheme);
  return (
    <>
      <div
        style={{
          color: isDarkTheme ? "white" : "black",
          backgroundColor: isDarkTheme ? "black" : "white",
          width: "20rem",
          height: "20rem",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Hellllllllll0
      </div>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  );
}
