// import { useFetch } from "./hooks/useFetch";
import "./App.css";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useRef } from "react";

function App() {
  const inputValue = useRef();
  const { counter, dispatch } = useGlobalContext();
  // console.log("s");
  // const { data, error, isPending } = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos"
  // );
  // console.log(data && data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue.current.value);
    dispatch({ type: "ADD_INCREMENT", payload: +inputValue.current.value });
    inputValue.current.value = "";
  };

  const handleMinus = (e) => {
    e.preventDefault();
    console.log(inputValue.current.value);
    dispatch({ type: "ADD_DECREMENT", payload: +inputValue.current.value });
    inputValue.current.value = "";
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <form>
        <button onClick={handleMinus}>MINUS</button>
        <input ref={inputValue} type="number" />
        <button onClick={handleSubmit}>PLUS</button>
      </form>
    </div>
  );
}

export default App;
