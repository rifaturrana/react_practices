import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    console.log("Increment", counter);
    const _counters = [...counters];
    const index = _counters.indexOf(counter);
    _counters[index] = { ...counter };
    _counters[index].value++;
    setCounters(_counters);
  };

  const handleDecrement = (counter) => {
    console.log("Decrement", counter);
    const _counters = [...counters];
    const index = _counters.indexOf(counter);
    _counters[index] = { ...counter };
    _counters[index].value--;
    setCounters(_counters);
  };

  const handleReset = () => {
    const _counters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(_counters);
  };

  const handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const _counters = counters.filter((c) => c.id !== counterId);

    setCounters(_counters);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main role="main" className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
