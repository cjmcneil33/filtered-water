import "./App.css";
import "./Images.css";
import "./Button.css";
import { useState } from "react";
// import AnimatedComponent from "./Animation";
import Filter from "./Filter";
import TextPressure from "./ReactbitsTextPressure";

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
    return filtered;
  };

  return (
    <>
      <section className="format">
        <section style={{ position: "relative", height: "100px" }}>
          <TextPressure
            text="Filter me!!!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="-webkit-linear-gradient(#4f543d, #0ac4c4)"
            strokeColor="-webkit-linear-gradient(#4f543d, #0ac4c4)"
            minFontSize={130}
          />
        </section>
        <p>{water.join(" ")}</p>
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
