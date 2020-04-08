import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

const ToDoItem = ({ isDone, title, todoID }) => {
  const [isTodoItemDone, setTodoItemDone] = useState(isDone);
    const firestore = useFirestore();
    const {uid} = useSelector(state => state.firebase.auth);
  console.log(isTodoItemDone);
  const handleChange = (event) => {
    if (event.currentTarget.type === "checkbox") {
      setTodoItemDone(!isTodoItemDone);
      firestore.collection("users").doc(uid).collection("todos").doc(todoID).update({
          isDone: !isTodoItemDone
      })
    }
  };
  return (
    <div style={{
        textDecoration: isTodoItemDone && "line-through",
        opacity: isTodoItemDone ? 0.5 : 1,
        
    }}>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={handleChange}
        checked={isTodoItemDone}
      />
      {title}
    </div>
  );
};

export default ToDoItem;
