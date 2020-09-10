import React from "react";

const TodoList = ({ listItems, onFinish }) => {
  return (
    <div className="todoContainer">
      <ul>
        {listItems.map((item) => {
          const handleFinish = () => {
            onFinish(item);
          };
          return (
            <li id="todoItem" key={item.id}>
              {item.todo}
              <button onClick={handleFinish}>Done</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
