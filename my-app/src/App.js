import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import StateComponent from "./Components/StateComponent";
import CondationlReder from "./Components/CondationlReder";
import ComponetA from "./Components/ComponetA";
import ListAndKeys from "./Components/ListAndKeys";
import Forms from "./Components/Forms";
import LifeCycleMethods from "./Components/LifeCycleMethods";
import PureComponetMethod from "./Components/PureComponetMethod";
function App() {
  const list = ["Apple", "Ornage", "Grape"];
  return (
    <>
      {/* <Header />
      <StateComponent /> */}
      {/* <CondationlReder/>
      <ComponetA/> */}
      {/**
       * 14-02-2024 
      <ListAndKeys /> 
      */}

      {/**
       * Form Handling
       * 15-02-2024
       */}
      {/* <Forms /> */}

      <LifeCycleMethods name="abc" />
      <PureComponetMethod empObj={{ name: "ram", age: 20 }}>
        {list.map((e, i) => (
          <li key={`${e}-${i}`}>{e}</li>
        ))}
      </PureComponetMethod>
    </>
  );
}

export default App;
