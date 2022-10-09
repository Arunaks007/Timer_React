import React, { useState, useEffect } from "react";
import "./styles.css";
function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState();

  useEffect(() => {
    if (start) {
      setTimer(
        setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000)
      );
    } else {
      clearInterval(timer);
    }
    //return () => console.log("Crayon");
  }, [start]);

  return (
    <div className="App">
      <label>Timer</label>
      <div>
        <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
        <span>{("0" + Math.floor(time / 60)).slice(-2)}:</span>
        <span>{("0" + (time % 60)).slice(-2)}</span>
      </div>
      <div className="button">
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Pause</button>
        <button
          onClick={() => {
            setTime(0);
            setStart(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
