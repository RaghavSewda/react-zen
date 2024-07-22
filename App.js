import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement(JS object) => HTMLElement
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

// JSX (transpiled before it reaches the JS engine) - Parcel - Babel

// JSX => Babel compiles it to React.createElement => ReactElement-JS object => HTMLElement(render)
const elem = <span>React Element</span>;
const Title = () => {
  return (
    <h1 className="heading">
      {elem}
      Hello World from JSX
    </h1>
  );
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1 className="heading"> Hello World from JSX Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
