import { homeComponent } from "./home";

function contentComponent() {
    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "content");

    contentContainer.appendChild(homeComponent());

    return contentContainer;
}

export { contentComponent };
