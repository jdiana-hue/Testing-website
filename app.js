const heading = document.createElement("h1");
heading.textContet = "Hello from JavaScript!";
document.body.appendChild(heading);

const button = document.createElement("button")
button.textContent = "Click me";
button.onclick = () => alert("It works!");
document.body.appendChild(button);
