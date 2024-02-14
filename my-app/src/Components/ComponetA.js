import { Component } from "react";
import ComponetB from "./CompoentB";
class ComponetA extends Component {
  constructor() {
    super();
    this.state = {
      empData: { name: "React", pin: 890, phone: 898989, age: 22, text: "" },
    };
  }

  reciveChaildData = (data) => {
    this.setState({ ...this.state, text: data });
  };

  render() {
    return (
      <div>
        <h2>Component A</h2>
        <h3>Text:{this.state.text}</h3>

        <ComponetB
          empolye={this.state.empData}
          city="Banglore"
          county={["apple", "nokia", "samsung"]}
          reciveChaildData={this.reciveChaildData}
        />
      </div>
    );
  }
}

export default ComponetA;
