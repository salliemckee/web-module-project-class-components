import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <li key={this.props.todo.id}>
        {this.props.todo.task}{" "}
        {this.props.todo.completed ? <span> ✔️ </span> : <span></span>}
      </li>
    );
  }
}
