import React from "react";
import "./InputForm.css";

const InputForm = ({ onListItemChange }) => {
  const [todoInput, setTodoInput] = React.useState("");

  const inputCheck = (event) => {
    setTodoInput(event.target.value);
  };

  const error = todoInput === "" ? true : false;

  const containerStyle = {
    gridRow: "1",
    display: "flex",
    width: "60%",
    justifySelf: "center",
    justifyContent: "center",
    height: "47px",
    boxShadow: "1px 1px 3px 0px rgba(0, 0, 0, 0.4)",
    borderRadius: "10px 10px 10px 10px",
  };

  const inputStyle = {
    flex: "1",
    textAlign: "center",
    borderRadius: "10px 0px 0px 10px",
    borderStyle: "none",
    fontSize: "27px",
    color: "rgb(80, 80, 80)",
  };

  const buttonStyle = {
    borderRadius: "0px 10px 10px 0px",
    borderStyle: "none",
    backgroundColor: "rgba(227, 108, 102, .8)",
    color: "white",
    fontSize: "20px",
    fontStyle: "italic",
  };

  return (
    <form
      style={containerStyle}
      className="todoInputContainer"
      onSubmit={onListItemChange}
    >
      <input
        className="inputTD"
        style={inputStyle}
        onChange={inputCheck}
        id="todoListInput"
      />
      <button style={buttonStyle} disabled={Boolean(error)}>
        Let's Do It!
      </button>
    </form>
  );
};

export default InputForm;
