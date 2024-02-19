import { Component } from "react";

function Hoc(WraperCompoent, input = 1) {
  return class MyHoc extends Component {
    constructor() {
      super();
      this.state = { counter: 1 };
    }

    counterIncACtion = () => {
      this.setState({ counter: this.state.counter + input });
    };

    render() {
      return (
        <WraperCompoent
          counterIncACtion={this.counterIncACtion}
          counter={this.state.counter}
        />
      );
    }
  };
}
export default Hoc;
