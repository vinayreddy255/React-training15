import { Component } from "react";
import BComponent from "./BComponent";
class AComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>A Component</h1>
        <BComponent list={this.props.list} />
      </div>
    );
  }
}
export default AComponent;
