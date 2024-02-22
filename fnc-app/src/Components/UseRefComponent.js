import { useEffect, useRef } from "react";
function UseRefComponent() {
  const inputRef = useRef();

  const getInputNode = () => {
    console.log("inputRef...", inputRef);
    console.log("inputRef...", inputRef.current.value);
    // inputRef.current.value = "Hello world";
    // inputRef.current.style.color = "red";
    // inputRef.current.style.background = "green";
    //   inputRef.current.style.fontSize = "20px";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>useRefComponent</h2>
      <input type="text" ref={inputRef} />
      <button onClick={getInputNode}>getInput</button>
    </div>
  );
}
export default UseRefComponent;
