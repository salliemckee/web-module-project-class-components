import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Todo from "./Todo";

let index = 0;

const getIndex = () => ++index;

// const todos = [
//   {
//     id: getIndex(),
//     text: "walk the dog",
//   },
//   { id: getIndex(), text: "eat lunch" },
//   { id: getIndex(), text: "work out" },
// ];

// const initialState = { errorMessage: "", todos, form: { textInput: "" } };
export default class App extends React.Component {
  // state = initialState;

  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: getIndex(),
          task: "walk the dog",
          completed: false,
        },
        { id: getIndex(), task: "eat lunch", completed: false },
        { id: getIndex(), task: "work out", completed: false },
      ],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList />
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todos.id}>
                {todo.task} {todo.completed ? <span> ✔️ </span> : <span></span>}
              </li>
            );
          })}
        </ul>
        <Todo />
        <Form />
        <button>Hide Completed</button>
      </div>
    );
  }
}
