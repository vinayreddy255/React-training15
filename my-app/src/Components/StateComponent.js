import { Component } from "react";
class StateComponent extends Component {
  constructor() {
    super();
    this.state = {
      id: 100,
      phone: 12345,
      pin: 9089,
      name: "React",
      age: 23,
      count: 0,
    };
    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    // this.state.count = this.state.count + 1;
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  decrment = () => {
    if (this.state.count > 0) {
      this.setState({ ...this.state, count: this.state.count - 1 });
    } else {
      alert("you can not decrement less than 0");
    }
  };

  incrementDecrement = (input) => {
    if (input == "+") {
      this.setState({ ...this.state, count: this.state.count + 1 });
    } else if (input == "-") {
      if (this.state.count > 0) {
        this.setState({ ...this.state, count: this.state.count - 1 });
      } else {
        alert("you can not decrement less than 0");
      }
    }
  };

  render() {
    return (
      <div>
        <h2>StateComponent</h2>
        <div>
          <div>Id: {this.state.id}</div>
          <div>Phone: {this.state.phone}</div>
          <div>Pin: {this.state.pin}</div>
          <div>Name: {this.state.name}</div>
          <div>Age: {this.state.age}</div>
          <h3>Counter:{this.state.count}</h3>
          {/* <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrment}>Decrement</button> */}
          <button onClick={() => this.incrementDecrement("+")}>
            Increment
          </button>
          <button onClick={() => this.incrementDecrement("-")}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default StateComponent;
