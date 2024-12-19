import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([0]);
  console.log(counters);
  return (
    <>
      <h1>Counters : {counters.length}</h1>
      {counters.length < 3 && (
        <button
          onClick={() => {
            const countersUpdated = [...counters, 0];
            setCounters(countersUpdated);
          }}
        >
          Add counter
        </button>
      )}
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

      {counters.length > 0 && (
        <button
          onClick={() => {
            const countersUpdated = [...counters];
            countersUpdated.pop();
            setCounters(countersUpdated);
          }}
        >
          Remove counter
        </button>
      )}
    </>
  );
}

export default App;
