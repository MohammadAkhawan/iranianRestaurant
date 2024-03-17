function homeComponent() {
    const homeElement = document.createElement("div");
    homeElement.classList.add("home");

    const homeH1Element = document.createElement("h1");
    homeH1Element.setAttribute("id", "home-h1");
    homeH1Element.textContent = "The Reyhoon.";

    const homeHr = document.createElement("hr");
    homeHr.classList.add("title");

    const homeQuoteElement = document.createElement("p");
    homeQuoteElement.setAttribute("id", "home-quote");
    homeQuoteElement.textContent =
        "Welcome to Reyhoon, where opulence meets tradition in every sumptuous bite. Nestled in the heart of Tehran, Reyhoon invites you to embark on a culinary journey fit for royalty. Steeped in the rich tapestry of Persian heritage, our restaurant exudes elegance from the moment you step through the door. The ambiance is a harmonious blend of modern sophistication and timeless charm, with intricate Persian motifs adorning the walls and the soft glow of traditional lanterns casting a warm, inviting glow.At Reyhoon, gastronomic delights await at every turn, as our master chefs craft exquisite dishes using only the finest ingredients sourced from across Iran. Indulge your palate with the delicate flavors of saffron-infused rice, succulent kebabs grilled to perfection, and decadent stews simmered to tantalizing perfection. Each dish is a testament to centuries of culinary mastery, offering a glimpse into the rich and vibrant culinary heritage of Iran.But Reyhoon is more than just a restaurant; it's a sanctuary where friends and family come together to savor the joys of life and create lasting memories. Whether you're celebrating a special occasion or simply craving a taste of luxury, Reyhoon promises an unforgettable dining experience that will leave you longing to return again and again. Join us at Reyhoon and elevate your senses to new heights as you indulge in the unparalleled luxury of Persian cuisine.";

    homeElement.append(homeH1Element, homeHr, homeQuoteElement);
    return homeElement;
}

export { homeComponent };
