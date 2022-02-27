import "./App.css";
import MathProblem from "./mathProblem";
import RegisterForm from "./registerForm";
import Navbar from "./Navbar";
import State from "./State";
import Effect from "./Effect";
import Ref from "./Ref";
import Memo from "./Memo";
import Reducer from "./Reducer";
import ReducerTodo from "./ReducerTodo";
import ContextProvider from "./ContextProvider";
import Box from "./ContextBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContextProvider>
        <Box />
      </ContextProvider>
    </div>
  );
}

export default App;
