const heading=React.createElement(
    "h1",
     {id: "heading"}, // used to add attributs.
    "Hello World (using React)"
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

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

const parent=React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("h1",{},"I'm a h1 tag"),
                React.createElement("h2",{},"I'm a h2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("h1",{},"I'm a second h1 tag"),
                React.createElement("h2",{},"I'm a second h2 tag")
            ]
        )
    ]
);

const root2=ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);