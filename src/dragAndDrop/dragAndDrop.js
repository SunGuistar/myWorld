import React, { Component } from 'react';
import list from "./list";

require("./dragAndDrop.less");

class DragMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      draggingIndex: -1,
      startPageY: 0,
      offsetPageY: 0,
    }
    this.state.list = list;
  }
  render() {
    return (
      <div className="drag-content">
        <ul>
          {this.state.list.map((text, i) => (
            <li
              key={text}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DragMain;