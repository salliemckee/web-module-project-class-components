import React from "react";

export default class Form extends React.Component {
  render() {
    const { values } = this.props;
    return (
      <div>
        <form>
          <input type="text" placeholder="Type todo" id="textInput"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
