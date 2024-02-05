import { useEffect, useState } from "react";


function App() {
  const [color, setColor] = useState("green");
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  function updatecar() {
    setCar((pr)=>{
      return {...pr, color:"blue"}
    })
  }
  
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setCount((count)=>count+1)
  //   }, 1000);
  // },[])

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);
  return (
<>
  <h1>deepak {color}</h1>
  <h1> {car.name}</h1>
  <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <h1>{count}</h1>
  <button onClick={()=>{setColor("sky blue")}}>change name</button>
  <button onClick={updatecar}>blue</button>
</>
  );
}

export default App;
