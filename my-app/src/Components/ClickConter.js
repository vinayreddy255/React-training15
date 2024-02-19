import { Component } from "react";
import Hoc from "./Hoc";
class ClickConter extends Component {
  render() {
    return (
      <div>
        <h1>Click Counter.</h1>
        <h2>Count Value:{this.props.counter}</h2>
        <button onClick={this.props.counterIncACtion}>Click</button>
      </div>
    );
  }
}

export default Hoc(ClickConter, 2);
