import React from "react";

const TodoList = ({ handleModalOpen, listItems }) => {
  return (
    <div className="todoContainer">
      <ul>
        {listItems.map((item) => {
          const handleModal = () => {
            handleModalOpen(item);
          };
          return (
            <li id="todoItem" key={item.id}>
              {item.todo}
              <button onClick={handleModal}>Done</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
