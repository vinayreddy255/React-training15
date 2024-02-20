import { useState } from "react";

function FncState() {
  const [count, putCount] = useState(0);

  const [age, setAge] = useState(5);

  const counterIncrement = () => {
    putCount(count + 1);
  };

  const ageIncrement = () => {
    setAge(age + 2);
  };

  return (
    <div>
      <h1>FncState Component</h1>
      <h2>Counter:{count}</h2>
      <h2>Age:{age}</h2>
      <button onClick={counterIncrement}>CountInc</button>
      <button onClick={ageIncrement}>AgeInc</button>
    </div>
  );
}

export default FncState;
