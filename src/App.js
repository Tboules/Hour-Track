import React, { useEffect } from "react";
import "./App.css";
import InputForm from "./Components/InputForm/index";
import Header from "./Components/Header/index";
import Week from "./Components/Week/index";
import TodoList from "./Components/TodoList";
import { db, auth } from "./firebase";
import firebase from "firebase";
import SignUp from "./Components/SignUp/index";
import SignIn from "./Components/SignIn/index";

function App() {
  const [listItems, setListItems] = React.useState([]);
  const [finishItems, setFinishItems] = React.useState([]);
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [route, setRoute] = React.useState(null);
  const [userId, setUserId] = React.useState(null);

  //todo database listener
  // finished items database listener
  useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .collection("finishList")
        .orderBy("time", "desc")
        .onSnapshot((shot) => {
          setFinishItems(
            shot.docs.map((doc) => {
              return {
                id: doc.id,
                todo: doc.data().todo,
                time: doc.data().time,
              };
            })
          );
        });
      db.collection("users")
        .doc(userId)
        .collection("todoList")
        .orderBy("time", "desc")
        .onSnapshot((shot) => {
          setListItems(
            shot.docs.map((doc) => {
              return { id: doc.id, todo: doc.data().todo };
            })
          );
        });
    }
  }, [userId]);

  // user auth listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setRoute("home");
        setUserId(authUser.uid);
      } else {
        // reset all state here so that when someone signs in, they will not see the previous state
        setListItems([]);
        setFinishItems([]);
        setUserName("");
        setEmail("");
        setPassword("");
        setUserId("HourUser");
        if (route !== "signUp") {
          setRoute("signIn");
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [userId, route]);

  //handles Todo list items
  const handleListItems = (event) => {
    event.preventDefault();
    let todoInputValue = event.target.elements.todoListInput.value;
    db.collection("users").doc(userId).collection("todoList").add({
      todo: todoInputValue,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    event.target.reset();
  };

  //handles finished Todo items
  const finishListItem = (item) => {
    db.collection("users").doc(userId).collection("finishList").add({
      todo: item.todo,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    db.collection("users")
      .doc(userId)
      .collection("todoList")
      .doc(item.id)
      .delete();
  };

  //handles sign up
  const handleRegister = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        const userUid = authUser.user.uid;
        const email = authUser.user.email;

        const info = {
          username: userName,
          email: email,
          finishList: [],
          todoList: [],
        };
        setUserId(userUid);
        db.collection("users").doc(userUid).set(info);
      })
      .catch((error) => alert(error.message));
  };

  //handles sign in
  const handleSignIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setUserId(authUser.user.uid);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="App">
      <Header
        route={route}
        toSignIn={() => setRoute("signIn")}
        toSignUp={() => setRoute("signUp")}
      />
      {route === "home" ? (
        <div>
          <InputForm onListItemChange={handleListItems} />
          <TodoList onFinish={finishListItem} listItems={listItems} />
          <Week finishItems={finishItems} />
        </div>
      ) : route === "signUp" ? (
        <SignUp
          email={(e) => setEmail(e.target.value)}
          passWord={(e) => setPassword(e.target.value)}
          userName={(e) => setUserName(e.target.value)}
          onRegister={handleRegister}
        />
      ) : (
        <SignIn
          email={(e) => setEmail(e.target.value)}
          passWord={(e) => setPassword(e.target.value)}
          onSignIn={handleSignIn}
        />
      )}
    </div>
  );
}

export default App;
