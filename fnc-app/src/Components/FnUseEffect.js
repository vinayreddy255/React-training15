import { useEffect, useState } from "react";
function FnUseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(5);

  const inCrementCount = () => {
    setCount(count + 1);
  };

  const ageIncrement = () => {
    setAge(age + 2);
  };

  useEffect(() => {
    console.log("Mounting...");
  }, []);

  useEffect(() => {
    console.log("updating...");
  }, [age]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h2>FnUseEffect</h2>
      <h3>Count:{count}</h3>
      <h2>Age:{age}</h2>
      <button onClick={inCrementCount}>IncrementCount</button>
      <button onClick={ageIncrement}>AgeInc</button>
    </div>
  );
}
export default FnUseEffect;
