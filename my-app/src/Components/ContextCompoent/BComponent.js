import { Component } from "react";
import CComponent from "./CComponent";
class BComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  counterAction = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("b--", this.props);
    return (
      <div>
        <h1>B Component</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.counterAction}>Click</button>
        <CComponent list={this.props.list} />
      </div>
    );
  }
}
export default BComponent;
