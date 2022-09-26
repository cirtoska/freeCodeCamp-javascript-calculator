import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [val, setVal] = useState("");

  const clear = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const calculate = () => {
    try {
      setVal(eval(val));
      console.log(eval(val));
    } catch (error) {
      setVal("ERROR");
    }
  };
  return (
    <div className="container">
      <header className="header">
        <h1>JavaScript Calculator</h1>
      </header>
      <div id="calculator">
        <div id="display">
          <input type="text" value={val} />
        </div>

        <button id="clear" value="C" onClick={() => clear()}>
          AC
        </button>
        <button
          id="divide"
          value="/"
          onClick={(e) => setVal(val + e.target.value)}
        >
          /
        </button>
        <button
          id="multiply"
          value="*"
          onClick={(e) => setVal(val + e.target.value)}
        >
          *
        </button>

        <button
          id="seven"
          value="7"
          onClick={(e) => setVal(val + e.target.value)}
        >
          7
        </button>
        <button
          id="eight"
          value="8"
          onClick={(e) => setVal(val + e.target.value)}
        >
          8
        </button>
        <button
          id="nine"
          value="9"
          onClick={(e) => setVal(val + e.target.value)}
        >
          9
        </button>
        <button
          id="substract"
          value="-"
          onClick={(e) => setVal(val + e.target.value)}
        >
          -
        </button>

        <button
          id="four"
          value="4"
          onClick={(e) => setVal(val + e.target.value)}
        >
          4
        </button>
        <button
          id="five"
          value="5"
          onClick={(e) => setVal(val + e.target.value)}
        >
          5
        </button>
        <button
          id="six"
          value="6"
          onClick={(e) => setVal(val + e.target.value)}
        >
          6
        </button>
        <button
          id="add"
          value="+"
          onClick={(e) => setVal(val + e.target.value)}
        >
          +
        </button>

        <button
          id="one"
          value="1"
          onClick={(e) => setVal(val + e.target.value)}
        >
          1
        </button>
        <button
          id="two"
          value="2"
          onClick={(e) => setVal(val + e.target.value)}
        >
          2
        </button>
        <button
          id="three"
          value="3"
          onClick={(e) => setVal(val + e.target.value)}
        >
          3
        </button>
        <button id="equals" value="=" onClick={() => calculate()}>
          =
        </button>
        <button
          id="zero"
          value="0"
          onClick={(e) => setVal(val + e.target.value)}
        >
          0
        </button>
        <button
          id="decimal"
          value="."
          onClick={(e) => setVal(val + e.target.value)}
        >
          .
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
