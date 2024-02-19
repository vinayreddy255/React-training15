import { Component } from "react";
import { MyContext } from "./ContextAppi";
class CComponent extends Component {
  render() {
    console.log("c comonet....", this.props.list);
    return (
      <div>
        <h1>C Component</h1>
        <MyContext.Consumer>
          {(data) => {
            return (
              <>
                {data.map((list) => (
                  <li>{list}</li>
                ))}
              </>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}
export default CComponent;
