import { Component } from "react";
import "./styles.css";
class ListAndKeys extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Apple", "Nokia", "Samsung", "Mi", "Appo", "ViVo", "Sony"],
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1
          className="h1-text"
          //   style={{ color: "red", fontSize: "24px", backgroundColor: "black" }}
        >
          ListAndKeys
        </h1>
        {this.state.list.map((e, i) => {
          return (
            <li
              key={`${e}-${i}`}
              //   style={{ color: i % 2 == 0 ? "blue" : "purple" }}
              className={i % 2 == 0 ? "li-even" : "li-odd "}
            >
              {i + 1}-{e}
            </li>
          );
        })}
      </div>
    );
  }
}

export default ListAndKeys;
