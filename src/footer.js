function footerComponent() {
    const footerElement = document.createElement("div");
    footerElement.classList.add("footer");

    const footerTextElement = document.createElement("p");
    footerTextElement.setAttribute("id", "footer-text");
    footerTextElement.textContent = "Developed By Mohammad Akhawan.";

    footerElement.appendChild(footerTextElement);
    return footerElement;
}

export { footerComponent };
