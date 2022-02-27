import "./ReducerTodo.css";
import { useState, useReducer } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "addTodo":
      return [...todos, action.payload];
    case "editTodo":
      return todos.map((todo) => {
        if (todo.id === action.payload.idToEdit) {
          return { ...todo, value: action.payload.newValue };
        }
        return todo;
      });
    case "toggleTodo":
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    case "deleteTodo":
      return todos.filter((todo) => {
        return todo.id !== action.payload;
      });

    default:
      return todos;
  }
}

function InputTodo({ dispatch }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    console.log(id);
    const value = inputValue;
    const isCompleted = false;

    const payload = { id, value, isCompleted };
    dispatch({ type: "addTodo", payload });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

function Todo({ todo, dispatch, index }) {
  const style = { backgroundColor: todo.isCompleted ? "grey" : "#eee" };
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todo.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idToEdit = todo.id;
    const newValue = inputValue;
    const payload = { idToEdit, newValue };
    dispatch({ type: "editTodo", payload });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>{index + 1}.&nbsp;</label>
          <input
            className="todo-value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      ) : (
        <div className="todo-value" style={style}>
          <label>{index + 1}.&nbsp;</label>
          {todo.value}
        </div>
      )}
      <div className="button-container">
        <button className="button" onClick={() => setIsEditing(true)}>
          edit
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "toggleTodo", payload: todo.id })}
        >
          toggle
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "deleteTodo", payload: todo.id })}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default function ReducerTodo() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="todos-board">
      <InputTodo dispatch={dispatch} />
      {todos.map((todo, index) => (
        <Todo key={todo.id} index={index} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
