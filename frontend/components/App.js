import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

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
  handleAdd = (task) => {
    const newTodo = { id: getIndex(), task: task, completed: false };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleHide = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  // handleChange = (evt) => {
  //   this.setState({...this.state, input: evt.target.value})
  // }
  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} handleToggle={this.handleToggle} />

        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleHide}>Hide Completed</button>
      </div>
    );
  }
}
