import { Component, PureComponent } from "react";

class PureComponetMethod extends PureComponent {
  constructor() {
    super();
    this.state = { salry: 1000, age: 10 };
  }
  changeAction = () => {
    this.setState({ salry: 2000 });
  };
  changeAge = () => {
    this.setState({ age: this.state.age + 2 });
  };
  render() {
    console.log("====PureComponetMethod is calling====");
    console.log(this.props);
    return (
      <div>
        <h1>-----PureComponetMethod---</h1>
        <h3>salry:{this.state.salry}</h3>
        <h3>Age:{this.state.age}</h3>
        <button onClick={this.changeAction}>action</button>
        <button onClick={this.changeAge}>changeAge</button>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default PureComponetMethod;
