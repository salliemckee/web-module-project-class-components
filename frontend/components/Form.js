import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Type todo"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
