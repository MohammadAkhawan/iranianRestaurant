function aboutComponent() {
    const aboutElement = document.createElement("div");
    aboutElement.classList.add("about");

    const aboutH1Element = document.createElement("h1");
    aboutH1Element.setAttribute("id", "about-h1");
    aboutH1Element.textContent = "About us.";

    const aboutHr = document.createElement("hr");
    aboutHr.classList.add("titleHr");

    const aboutQuoteElement = document.createElement("p");
    aboutQuoteElement.setAttribute("id", "about-quote");
    aboutQuoteElement.textContent =
        "Welcome to Reyhoon, where culinary excellence meets cultural heritage. Nestled in the heart of Tehran, Reyhoon is more than just a restaurant; it's a celebration of the rich tapestry of Persian cuisine and hospitality.At Reyhoon, we are passionate about preserving and sharing the flavors of Iran with our guests. Our journey began with a vision to create a dining experience that transcends mere sustenance, offering a space where friends and family can come together to savor the joys of life and create lasting memories.Drawing inspiration from centuries of culinary tradition, our menu is a testament to the vibrant diversity of Persian cuisine. From aromatic stews to succulent kebabs and delicate rice dishes, each recipe is crafted with care and precision, using only the finest ingredients sourced from trusted suppliers.But Reyhoon is more than just a destination for exceptional food; it's a sanctuary where guests can immerse themselves in the warmth and hospitality of Persian culture. Our inviting ambiance, adorned with traditional motifs and bathed in soft light, sets the stage for an unforgettable dining experience.Whether you're joining us for a special celebration or simply craving a taste of luxury, we invite you to embark on a culinary journey like no other at Reyhoon. Come, experience the magic of Persian hospitality, one unforgettable bite at a time.";

    aboutElement.append(aboutH1Element, aboutHr, aboutQuoteElement);
    return aboutElement;
}

export { aboutComponent };
