import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Todo from "./Todo";
export default class App extends React.Component {
  render() {
    return (
      <div>
        Todo App
        <TodoList />
        <Todo />
        <Form />
        <button>Hide Completed</button>
      </div>
    );
  }
}
