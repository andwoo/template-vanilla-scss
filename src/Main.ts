import "../scss/main.scss";

let node : HTMLParagraphElement = document.createElement("p");
node.textContent = "Hello There!";
document.getElementById("app").appendChild(node);