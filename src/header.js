function headerComponent() {
    const headerElement = document.createElement("header");
    headerElement.classList.add("header");

    const navElement = document.createElement("nav");
    navElement.classList.add("nav");

    const homeElement = document.createElement("button");
    homeElement.setAttribute("id", "homeBtn");
    homeElement.textContent = "HOME";

    const menuElement = document.createElement("button");
    menuElement.setAttribute("id", "menuBtn");
    menuElement.textContent = "MENU";

    const aboutElement = document.createElement("button");
    aboutElement.setAttribute("id", "aboutBtn");
    aboutElement.textContent = "ABOUT";

    headerElement.appendChild(navElement);
    navElement.append(homeElement, menuElement, aboutElement);

    return headerElement;
}

export { headerComponent };
