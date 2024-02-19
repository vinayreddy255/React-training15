import { Component } from "react";
import Hoc from "./Hoc";
class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1>Hover Counter.</h1>
        <h2>Hover Count Value:{this.props.counter}</h2>
        <button onMouseOver={this.props.counterIncACtion}>hover</button>
      </div>
    );
  }
}

export default Hoc(HoverCounter);
