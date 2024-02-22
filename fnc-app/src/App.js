import logo from "./logo.svg";
import "./App.css";
import FncState from "./Components/FncState";
import FncMap from "./Components/FncMap";
import FnUseEffect from "./Components/FnUseEffect";
import { MyProvidder, MyContext } from "./Components/ContextApi/MyContext";
import {
  ApiContext,
  ApiContextProvider,
} from "./Components/ContextApi/ApiContext";
import ComponetA from "./Components/ComponetA";
import { posts } from "./post";
import UseRefComponent from "./Components/useRefComponent";
function App() {
  const empObj = { name: "Ram", sal: 2000, age: 22, city: "Hyderbad" };

  return (
    <div>
      {/* <FncState />
      <FncMap /> */}
      <FnUseEffect empDetiles={empObj} />
      <UseRefComponent />

      {/* <MyProvidder value={empObj}>
        <ApiContextProvider value={posts}>
          <ComponetA />
        </ApiContextProvider>
      </MyProvidder> */}
    </div>
  );
}

export default App;
