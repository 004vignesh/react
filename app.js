const parent=React.createElement("parent",{},
[React.createElement("child",{},[React.createElement("h1",{},"this is h1"),React.createElement("h2",{},"this is h2")]),
React.createElement("child",{},[React.createElement("h1",{},"this is h1"),
React.createElement("h2",{},"this is h2")])]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);