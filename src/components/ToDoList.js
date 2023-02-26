import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div className="listContainer">
      {props.items.map((item, index) => (
        <ToDoItem
          key={index}
          item={item}
          id={index}
          removeItem={() => props.removeItem(index)}
          setItems={props.setItems}
        />
      ))}
    </div>
  );
}

export default ToDoList;
