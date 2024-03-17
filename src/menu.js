function menuComponent() {
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu");

    const menuH1Element = document.createElement("h1");
    menuH1Element.setAttribute("id", "menu-h1");
    menuH1Element.textContent = "Reyhoon Menu.";
    const menuTitleHr = document.createElement("hr");
    menuTitleHr.classList.add("titleHr");

    const qormeSabziElement = document.createElement("div");
    qormeSabziElement.setAttribute("id", "qs-container");

    const qormeSabziTitle = document.createElement("h2");
    qormeSabziTitle.classList.add("menuTitles");
    qormeSabziTitle.textContent = "Qorme Sabzi";
    const qormeSabziDes = document.createElement("p");
    qormeSabziDes.classList.add("menuDes");
    qormeSabziDes.textContent =
        "Qorme Sabzi: A cherished Persian stew featuring a vibrant mix of fresh herbs, tender meat, and fragrant spices. Served with aromatic saffron rice.";
    const qormeSabziPrice = document.createElement("p");
    qormeSabziPrice.classList.add("menuPrice");
    qormeSabziPrice.textContent = "$24.99";
    const qormeSabziHr = document.createElement("hr");
    qormeSabziHr.classList.add("menuHr");

    qormeSabziElement.append(
        qormeSabziTitle,
        qormeSabziDes,
        qormeSabziPrice,
        qormeSabziHr
    );

    const koobidehElement = document.createElement("div");
    koobidehElement.setAttribute("id", "koobideh-container");

    const koobidehTitle = document.createElement("h2");
    koobidehTitle.classList.add("menuTitles");
    koobidehTitle.textContent = "Koobideh";
    const koobidehDes = document.createElement("p");
    koobidehDes.classList.add("menuDes");
    koobidehDes.textContent =
        "Koobideh: Traditional Persian ground meat kebabs, seasoned to perfection and grilled to juicy perfection. served with fluffy saffron rice.";
    const koobidehPrice = document.createElement("p");
    koobidehPrice.classList.add("menuPrice");
    koobidehPrice.textContent = "$27.99";
    const koobidehHr = document.createElement("hr");
    koobidehHr.classList.add("menuHr");

    koobidehElement.append(
        koobidehTitle,
        koobidehDes,
        koobidehPrice,
        koobidehHr
    );

    const joojeElement = document.createElement("div");
    joojeElement.setAttribute("id", "jooje-container");

    const joojeTitle = document.createElement("h2");
    joojeTitle.classList.add("menuTitles");
    joojeTitle.textContent = "jooje";
    const joojeDes = document.createElement("p");
    joojeDes.classList.add("menuDes");
    joojeDes.textContent =
        "Koobideh: Traditional Persian ground meat kebabs, seasoned to perfection and grilled to juicy perfection. served with fluffy saffron rice.";
    const joojePrice = document.createElement("p");
    joojePrice.classList.add("menuPrice");
    joojePrice.textContent = "$28.99";
    const joojeHr = document.createElement("hr");
    joojeHr.classList.add("menuHr");

    koobidehElement.append(joojeTitle, joojeDes, joojePrice, joojeHr);

    menuElement.append(
        menuH1Element,
        qormeSabziElement,
        koobidehElement,
        joojeElement
    );

    return menuElement;
}

export { menuComponent };
