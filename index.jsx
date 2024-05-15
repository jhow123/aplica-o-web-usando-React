import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, toggleItem, deleteItem } from "../actions/index.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main-view.css";

export const MainView = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
      setInputValue("");
    } else {
      alert("You must write something.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  const handleToggleItem = (id) => {
    dispatch(toggleItem(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Container
      className="bg-light d-flex flex-column align-items-center justify-content-center mt-3"
      style={{ minHeight: "80vh", maxWidth: "60vh" }}
    >
      <Row>
        <Col className="m-3">
          <h2>Todo List:</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a new todo"
            className="form-control"
          />
          <Button
            className="mt-3"
            variant="outline-primary"
            onClick={handleAddItem}
          >
            Add Item
          </Button>
          <ul className="mt-3 list-unstyled">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`d-flex align-items-center justify-content-between ${todo.completed ? "strike" : ""}`}
                style={{ cursor: "pointer" }}
                onDoubleClick={() => handleToggleItem(todo.id)}
              >
                <span>{todo.text}</span>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleDeleteItem(todo.id)}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
