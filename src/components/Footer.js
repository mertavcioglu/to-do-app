import React from "react";
import "./Footer.css";

function Footer(props) {
  const incompleteItemCount = props.items.filter(
    (item) => !item.completed
  ).length;

  function clearCompleted() {
    props.setItems((prevState) => prevState.filter((item) => !item.completed));
  }

  function handleClick(status) {
    document.querySelectorAll(".itemContainer").forEach((item) => {
      if (status === "All") item.style.display = "flex";
      else if (status === "Active")
        item.classList.contains("checkedItems")
          ? (item.style.display = "none")
          : (item.style.display = "flex");
      else if (status === "Completed")
        item.classList.contains("uncheckedItems")
          ? (item.style.display = "none")
          : (item.style.display = "flex");
    });
  }

  return (
    <div className="footerContainer">
      <ul>
        <li>{incompleteItemCount} items left</li>
        <li>
          <a
            href="#/"
            onClick={() => handleClick("All")}
            className="footerButton"
          >
            All
          </a>
          <a
            href="#/Active"
            onClick={() => handleClick("Active")}
            className="footerButton"
          >
            Active
          </a>
          <a
            href="#/Completed"
            onClick={() => handleClick("Completed")}
            className="footerButton"
          >
            Completed
          </a>
        </li>
        <li
          id="clearCompleted"
          className="clearCompleted"
          onClick={clearCompleted}
        >
          Clear Completed
        </li>
      </ul>
      <div className="footerText">
        <p>Click to edit todo</p>
        <p>Created by Mert Avcioglu</p>
        <p>2023</p>
      </div>
    </div>
  );
}

export default Footer;
