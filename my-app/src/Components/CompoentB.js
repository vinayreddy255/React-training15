import { Component } from "react";

class ComponetB extends Component {
  render() {

    const {pin, age , name} = this.props.empolye
    // console.log(this.props.empolye.pin)
    // console.log(pin, age, name)
    console.log(this.props)
    return (
      <div>
        <h2>Component B</h2>
        <h3>Name:{name}</h3>
        <h3>Age:{age}</h3>
      </div>
    );
  }
}

export default ComponetB;