import { useState } from "react";

  function Laptop() {
    let [object, setObject] = useState({
      prop1: "Apple",
      prop2: "Macbook Pro",
      prop3: "2023",
      prop4: "Space gray"
    })

    function changeColor() {
      const copy  = Object.assign({}, object);
      copy.prop4 = "Silver";
      setObject(copy);
    };

  return (
    <>
      <h1>My laptop is {object.prop1}</h1>
      <p>It is a {object.prop4} {object.prop2} from {object.prop3}.
      </p>
      <button onClick={changeColor}>Change Color</button>
    </>
  )
  }

export default Laptop;
