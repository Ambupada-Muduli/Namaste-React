const heading1 = React.createElement("h1",{ id:"title",},"Hello");
const heading2 = React.createElement("h2",{id:"title",},"Hello 2");
const container = React.createElement("div",{ id: "container",},[heading1 , heading2]);
console.log(heading1)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);