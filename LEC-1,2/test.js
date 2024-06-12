import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement(
//     "h1",
//      {id: "heading"}, // used to add attributs.
//     "Hello World (using React)"
// );
// const heading2=React.createElement(
//     "h1",
//      {id: "heading"}, // used to add attributs.
//     "Hello World2 (using React)"
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);

/*
practice :-


<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm second h1 tag</h1>
        <h2>I'm second h2 tag</h2>
    </div>
</div>

*/

// const parent=React.createElement(
//     "div",
//     {id: "parent"},
//     [
//         React.createElement(
//             "div",
//             {id:"child"},
//             [
//                 React.createElement("h1",{},"I'm a h1 tag"),
//                 React.createElement("h2",{},"I'm a h2 tag")
//             ]
//         ),
//         React.createElement(
//             "div",
//             {id:"child"},
//             [
//                 React.createElement("h1",{},"I'm a second h1 tag"),
//                 React.createElement("h2",{},"I'm a second h2 tag")
//             ]
//         )
//     ]
// );

// const root2=ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(parent);


L-3

const jsxHeading=(
    <h1 className="head" tabIndex="5">
        Namaste React 
    </h1>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);