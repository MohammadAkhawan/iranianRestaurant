import { headerComponent } from "./header";
import { contentComponent } from "./content";
import { footerComponent } from "./footer";
import { homeComponent } from "./home";
import { menuComponent } from "./menu";
import { aboutComponent } from "./about";
import "./style.css";

function component() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    containerElement.appendChild(headerComponent().headerElement);
    containerElement.appendChild(contentComponent());
    containerElement.appendChild(footerComponent());
    return containerElement;
}

document.body.appendChild(component());

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

homeBtn.addEventListener("click", () => {
    const contentElement = document.querySelector("#content");
    contentElement.innerHTML = "";
    contentElement.appendChild(homeComponent());
});

menuBtn.addEventListener("click", () => {
    const contentElement = document.querySelector("#content");
    contentElement.innerHTML = "";
    contentElement.appendChild(menuComponent());
});

aboutBtn.addEventListener("click", () => {
    const contentElement = document.querySelector("#content");
    contentElement.innerHTML = "";
    contentElement.appendChild(aboutComponent());
});
