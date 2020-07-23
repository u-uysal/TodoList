import React from "react";

import "./App.css";

export class Todolist extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter task"></input>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
}
export default Todolist;
