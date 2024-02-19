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
import ClickConter from "./Components/ClickConter";
import HoverCounter from "./Components/HoverCounter";
import AComponent from "./Components/ContextCompoent/AComponent";
import DComponent from "./Components/ContextCompoent/DComponent";
import { MyContext } from "./Components/ContextCompoent/ContextAppi";
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

      {/* <LifeCycleMethods name="abc" />
      <PureComponetMethod empObj={{ name: "ram", age: 20 }}>
        {list.map((e, i) => (
          <li key={`${e}-${i}`}>{e}</li>
        ))}
      </PureComponetMethod> */}

      {/**
       * Hoc expmples
       */}
      {/* <ClickConter />
      <HoverCounter /> */}

      {/**---------Context------------ */}
      <MyContext.Provider value={list}>
        <AComponent />
        <DComponent />
      </MyContext.Provider>
    </>
  );
}

export default App;
