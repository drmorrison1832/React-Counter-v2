import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([0]);
  console.log(counters);
  return (
    <>
      <h1>Counters : {counters.length}</h1>
      <button
        onClick={() => {
          const countersUpdated = [...counters, 0];
          setCounters(countersUpdated);
        }}
        style={
          counters.length < 3
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        Add counter
      </button>

      <div className="counters-container">
        {counters.map((counter, index) => {
          return (
            <Counter
              key={index}
              index={index}
              counters={counters}
              setCounters={setCounters}
            />
          );
        })}
      </div>

      <button
        onClick={() => {
          const countersUpdated = [...counters];
          countersUpdated.pop();
          setCounters(countersUpdated);
        }}
        style={
          counters.length > 1
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        Remove counter
      </button>
    </>
  );
}

export default App;
