import { Component } from "react";
import ComponetB from "./CompoentB";
class ComponetA extends Component {
  constructor() {
    super();
    this.state = {
      empData: { name: "React", pin: 890, phone: 898989, age: 22 },
    };
  }
  render() {
    return (
      <div>
        <h2>Component A</h2>
        <ComponetB empolye={this.state.empData} city="Banglore" county={['apple','nokia','samsung']}/>
      </div>
    );
  }
}

export default ComponetA;
