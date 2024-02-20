import { useState } from "react";

function FncMap() {
  const [inputName, setInputName] = useState("");
  const [list, setList] = useState(["Apple", "Samsung", "Nokia"]);

  const inputHandler = (event) => {
    setInputName(event.target.value);
  };

  const toAddList = () => {
    if (inputName != "") {
      const newList = [...list];
      newList.push(inputName);
      setList(newList);
      setInputName("");
    } else {
      alert("Please enter the input name..");
    }
  };

  return (
    <div>
      <h2>----List---- </h2>
      <input
        type="text"
        name="inputName"
        onChange={inputHandler}
        value={inputName}
      />
      <button onClick={toAddList}>Add</button>
      {list.map((e, i) => (
        <li key={`${e}-${i}`}>{e}</li>
      ))}
    </div>
  );
}

export default FncMap;
