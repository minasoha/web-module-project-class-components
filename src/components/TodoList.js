// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>submit</button>
        <button>Clear</button>
      </div>
    );
  }
}
