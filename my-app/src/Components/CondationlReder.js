import { Component } from "react";

class CondationlReder extends Component {
  constructor() {
    super();
    this.state = { city: "Ka" };
  }
  actionAp = () => {
    this.setState({ ...this.state, city: "Ap" });
  };

  actionKa = () => {
    this.setState({ ...this.state, city: "Ka" });
  };
  render() {
    // const city = "Hyderbad";
    return (
      <div>
        <h1>CondationlReder</h1>
        {this.state.city == "Ka" ? (
          <div>
            <h2>Karnata</h2>
          </div>
        ) : (
          <div>
            <h2>Andharpradesh</h2>
          </div>
        )}
        <button onClick={this.actionAp} disabled={this.state.city=='Ap'}>Ap</button>
        <button onClick={this.actionKa} disabled={this.state.city=='Ka'}>Ka</button>
      </div>
    );
  }
}
export default CondationlReder;
