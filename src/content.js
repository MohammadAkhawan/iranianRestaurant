import { homeComponent } from "./home";
import { menuComponent } from "./menu";
import { aboutComponent } from "./about";

function contentComponent() {
    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "content");

    contentContainer.append(homeComponent(), menuComponent(), aboutComponent());

    return contentContainer;
}

export { contentComponent };
