import React from "react";
import ReactDOM from "react-dom/client";

// JSX or React Element
const heading=(
    <h1 className="head" tabIndex="5">
        Namaste React 
    </h1>
);

// React Component

const Title = () => (
    <h1 className="title">
        Namaste React  
    </h1>
);

// Component Composition -- using one component in other. 

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);