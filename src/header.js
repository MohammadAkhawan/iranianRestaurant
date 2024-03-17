function headerComponent() {
    const headerElement = document.createElement("header");
    headerElement.classList.add("header");

    const navElement = document.createElement("nav");
    navElement.classList.add("nav");

    const homeBtnElement = document.createElement("button");
    homeBtnElement.setAttribute("id", "homeBtn");
    homeBtnElement.textContent = "HOME";

    const menuBtnElement = document.createElement("button");
    menuBtnElement.setAttribute("id", "menuBtn");
    menuBtnElement.textContent = "MENU";

    const aboutBtnElement = document.createElement("button");
    aboutBtnElement.setAttribute("id", "aboutBtn");
    aboutBtnElement.textContent = "ABOUT";

    headerElement.appendChild(navElement);
    navElement.append(homeBtnElement, menuBtnElement, aboutBtnElement);

    return {
        headerElement,
        homeBtnElement,
        menuBtnElement,
        aboutBtnElement,
    };
}

export { headerComponent };
