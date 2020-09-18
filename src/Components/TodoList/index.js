import React from "react";
import "./TodoList.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const red = {
  backgroundColor: "rgba(227, 108, 102, 0.8)",
};

const TodoList = ({ handleItemDelete, handleModalOpen, listItems }) => {
  return (
    <div className="todoContainer">
      <ul className="listedTodos">
        {listItems.map((item) => {
          const handleModal = () => {
            handleModalOpen(item);
          };
          const handleDelete = () => {
            handleItemDelete(item);
          };
          return (
            <li className="singleTodo" id="todoItem" key={item.id}>
              {item.todo}
              <button className="todoDoneButton" onClick={handleModal}>
                <FaCheck className="trash" />
              </button>
              <button
                style={red}
                className="todoDoneButton"
                onClick={handleDelete}
              >
                <FaTrash className="trash" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
