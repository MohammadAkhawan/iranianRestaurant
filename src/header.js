function headerComponent() {
    const headerElement = document.createElement("header");
    headerElement.classList.add("header");

    const navElement = document.createElement("nav");
    navElement.classList.add("nav");

    const homeElement = document.createElement("button");
    homeElement.setAttribute("id", "homeBtn");

    const menuElement = document.createElement("button");
    menuElement.setAttribute("id", "menuBtn");

    const aboutElement = document.createElement("button");
    aboutElement.setAttribute("id", "aboutBtn");

    headerElement.appendChild(navElement);
    navElement.append(homeElement, menuElement, aboutElement);

    return headerElement;
}

export { headerComponent };
