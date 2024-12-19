const Counter = (props) => {
  const { counters, setCounters, index } = props;
  return (
    <div className="counter">
      <h2>Counter {index}</h2>
      <div className="counter-container">
        {
          <button
            style={
              counters[index] < 1
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
            onClick={() => {
              const countersUpdated = [...counters];
              countersUpdated[index]--;
              setCounters(countersUpdated);
            }}
          >
            -
          </button>
        }
        <div className="card">
          <div>{counters[index]}</div>
        </div>
        <button
          style={
            counters[index] > 9
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={() => {
            const countersUpdated = [...counters];
            countersUpdated[index]++;
            setCounters(countersUpdated);
          }}
        >
          +
        </button>
      </div>
      <div className="reset-button-container">
        <button
          onClick={() => {
            const countersUpdated = [...counters];
            countersUpdated[index] = 0;
            setCounters(countersUpdated);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
