import React from "react";
import "./TodoList.css";

const TodoList = ({ handleModalOpen, listItems }) => {
  return (
    <div className="todoContainer">
      <ul className="listedTodos">
        {listItems.map((item) => {
          const handleModal = () => {
            handleModalOpen(item);
          };
          return (
            <li className="singleTodo" id="todoItem" key={item.id}>
              {item.todo}
              <button className="todoDoneButton" onClick={handleModal}>
                Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
