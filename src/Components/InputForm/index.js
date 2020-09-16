import React from "react";

const InputForm = ({ onListItemChange }) => {
  const [todoInput, setTodoInput] = React.useState("");

  const inputCheck = (event) => {
    setTodoInput(event.target.value);
  };

  const error = todoInput === "" ? true : false;

  return (
    <form className="todoInputContainer" onSubmit={onListItemChange}>
      <input onChange={inputCheck} id="todoListInput" />
      <button disabled={Boolean(error)}>Let's Do It!</button>
    </form>
  );
};

export default InputForm;
