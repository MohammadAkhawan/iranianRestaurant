import { headerComponent } from "./header";
import { contentComponent } from "./content";
import { footerComponent } from "./footer";
import "./style.css";

function component() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    
    containerElement.append(
        headerComponent(),
        contentComponent(),
        footerComponent()
    );

    return containerElement;
}

document.body.appendChild(component());
