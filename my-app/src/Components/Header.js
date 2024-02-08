import { Component } from "react";

class Header extends Component {
  render() {
    const city = "Hyderbad";
    const name = "Test";
    const age = 25;

    return (
      <div>
        <h1>Header component..</h1>
        <h3>Name:{name}</h3>
        <h3>Age:{age}</h3>
        <h3>City:{city}</h3>
      </div>
    );
  }
}
export default Header;
