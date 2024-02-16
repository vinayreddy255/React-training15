import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor() {
    super();
    this.state = { city: "Hyderbad", age: 25 };
    console.log("Constrctor calling..."); //1
  }

  /*  static getDerivedStateFromProps(props, state) {
    console.log("state--", state, "---props...", props); //2
  } */

  componentDidMount() {
    /* setTimeout(() => {
      this.setState({ city: "Bangalore" });
    }, 5000); */
    console.log("component did mount..."); //4
  }
  ageAction = () => {
    this.setState({ age: 30 });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("current...", nextState.age, "--previous..", this.state.age);
    if (nextState.age == this.state.age) {
      return false;
    }

    return true;
  }
  componentDidUpdate() {
    console.log("did update calling..");
  }
  render() {
    console.log("render is calling...."); //3
    return (
      <>
        <h1>LifeCycleMethods</h1>
        <h2>City:{this.state.city}</h2>
        <h3>Age:{this.state.age}</h3>
        <button onClick={this.ageAction}>Click</button>
      </>
    );
  }
}

export default LifeCycleMethods;
