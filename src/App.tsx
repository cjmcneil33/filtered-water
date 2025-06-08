import "./App.css";
import "./Images.css";
import "./Button.css";
import { useState } from "react";
import AnimatedComponent from "./Animation";
import Filter from "./Filter";

function App() {
  const [water, setWater] = useState<string[]>([
    "salt",
    "dirt",
    "calcite",
    "uranium",
    "rubber",
  ]);

  let contaminants: string[] = ["dirt", "uranium", "rubber"];

  const handleOnClick = () => {
    let filtered: string[] = Filter(water, contaminants);
    setWater(filtered);
  };

  return (
    <>
      <section className="format">
        <h2>Filter me!!!</h2>
        {/* <AnimatedComponent /> */}

        <button onClick={handleOnClick} className="btn">
          Filter!
        </button>

        <section className="overlay-images">
          <img src="empty-water-filter.svg" alt="Empty Filter" />
          <img
            src="filled-water-filter.svg"
            alt="Filled Filter"
            className="front"
          />
        </section>
      </section>
    </>
  );
}

export default App;
