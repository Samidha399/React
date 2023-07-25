// const heading = document.createElement("h1");
// heading.innerHTML = "This is text from Javascript.";
// const root1 = document.getElementById("root");
// root1.appendChild(heading);

// const para = document.createElement("p");
// para.innerHTML = "This is Paragraph text.";
// para.style.color = "red";
// const root2 = document.getElementById("root");
// root2.appendChild(para);

// const para2 = document.createElement("h2");
// para2.innerHTML = "Hello World!";
// para2.style = "color:yellow;font-size:50px;";
// const root3 = document.getElementById("root");
// root3.appendChild(para2);


// React Js Start

// const heading = React.createElement("h1",{},"This is text from React!");
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(heading);

// const para = React.createElement("p",{id:"para"},"This is paragraph.");
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(para);

// const heading2 = React.createElement("h2",{id:'abc'},"New text!");
// const root3 = ReactDOM.createRoot(document.getElementById("root"));
// root3.render(heading2);

// const parent = React.createElement("div",{id:"parent"},
// ("div",{id:"child"},
// ("h1",{id:"heading"},"This text is from child div.")))
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(parent);

const parent = React.createElement("div",{id:"parent"},
("div",{id:"child"},
[('h1',{},"Child1"),('h1',{},"Child2"),('p',{},"This is Paragraph")]));
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);