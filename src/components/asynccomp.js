import { useState } from "react";

export default function App(){
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  const setValues = () => {
    setA(100);
    setB(200);
    setC(a+b);
  }

  return(
    <div>
      {a}
      {b}
      {c}
      <button>click me</button>
    </div>
  )
}