import React, { useEffect } from "react";
import "./App.css";
import InputForm from "./Components/InputForm/index";
import Header from "./Components/Header/index";
import Week from "./Components/Week/index";
import TodoList from "./Components/TodoList";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
  const [listItems, setListItems] = React.useState([]);
  const [finishItems, setFinishItems] = React.useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("time", "desc")
      .onSnapshot((shot) => {
        setListItems(
          shot.docs.map((doc) => {
            return { id: doc.id, todo: doc.data().todo };
          })
        );
      });
  }, []);

  useEffect(() => {
    db.collection("finished")
      .orderBy("time", "desc")
      .onSnapshot((shot) => {
        setFinishItems(
          shot.docs.map((doc) => {
            return { id: doc.id, todo: doc.data().todo };
          })
        );
      });
  }, []);

  const handleListItems = (event) => {
    event.preventDefault();
    let todoInputValue = event.target.elements.todoListInput.value;
    db.collection("todos").add({
      todo: todoInputValue,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    event.target.reset();
  };

  const finishListItem = (item) => {
    db.collection("finished").add({
      todo: item.todo,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    db.collection("todos").doc(item.id).delete();
  };

  return (
    <div className="App">
      <Header />
      <InputForm onListItemChange={handleListItems} />
      <TodoList onFinish={finishListItem} listItems={listItems} />
      <Week finishItems={finishItems} />
    </div>
  );
}

export default App;
