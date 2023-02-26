import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <div className="listContainer">
      {props.items.map((item, index) => (
        <ToDoItem
          key={index}
          item={item}
          id={index}
          items={props.items}
          removeItem={() => props.removeItem(index)}
          setItems={props.setItems}
        />
      ))}
    </div>
  );
}

export default ToDoList;
