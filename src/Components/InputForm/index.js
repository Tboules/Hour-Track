import React from "react";

const InputForm = ({ onListItemChange }) => {
  return (
    <form onSubmit={onListItemChange}>
      <input id="todoListInput" />
      <button>Let's Do It!</button>
    </form>
  );
};

export default InputForm;
