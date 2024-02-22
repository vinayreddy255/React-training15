import { useContext } from "react";
import { MyContext } from "./ContextApi/MyContext";
import { ApiContext } from "./ContextApi/ApiContext";

function ComponetC() {
  const empData = useContext(MyContext);
  const postData = useContext(ApiContext);
  console.log("using use context...emp..", empData);
  console.log("using use context...posts...", postData);
  return (
    <div>
      <h1>ComponetC</h1>
      {postData.map((e) => (
        <li>{e.title}</li>
      ))}
      {/* <MyContext.Consumer>
        {(data) => {
          console.log(data);
          return (
            <ApiContext.Consumer>
              {(apiData) => {
                console.log("api data...", apiData);
              }}
            </ApiContext.Consumer>
          );
        }}
      </MyContext.Consumer> */}
    </div>
  );
}

export default ComponetC;
