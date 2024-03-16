import { headerComponent } from "./header";

function component() {
    const containerElement = document.createElement("div");
    containerElement.appendChild(headerComponent());
    return containerElement;
}

document.body.appendChild(component());
