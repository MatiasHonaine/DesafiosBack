const productsCardsContainer = document.getElementById("productCardsContainer");
const pageButtonsContainer = document.getElementById("pageButtonsContainer");
// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");
// const pageCounter = document.getElementById("pageCounter");


// build products components
products.forEach((product) => {
    let quantity = 1;
    const card = document.createElement("div");
    card.classList.add("productCardMock");
    card.innerHTML = `<a class="productLink"><div class="productImageContainerMock" ><img class="productImageMock" src=${product.img}/></div></a><div class="textAndButtonContainer"><div>${product.title}</div><div>$${product.price}</div><div class="quantityContainer"><button id="${product.code}Decrease" class="arrowButton decrease"><</button><div id="${product.code}Counter" class="quantityCounter">${quantity}</div><button id="${product.code}Increase"class="arrowButton increase">></button></div><button class="button fixMargin newButton add"> ADD TO CART </button></div>`;
    productsCardsContainer.appendChild(card);
    const addButton = card.querySelector(".add");
    const decreaseButton = card.querySelector(".decrease");
    const increaseButton = card.querySelector(".increase");
    const cardImageLink = card.querySelector(".productLink");
    cardImageLink.href = `/views/product?id=${product._id}`;
    addButton.addEventListener("click", () => {
        // addProductToCart(product._id, quantity);
        console.log("Adding to cart:", product.title);
        quantity = 1;
        const counterElement = document.getElementById(`${product.code}Counter`);
        counterElement.innerText = quantity;
    });
    decreaseButton.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            const counterElement = document.getElementById(`${product.code}Counter`);
            counterElement.innerText = quantity;
        }
        console.log("Decreasing quantity for:", product.title);
    });
    increaseButton.addEventListener("click", () => {
        quantity++;
        const counterElement = document.getElementById(`${product.code}Counter`);
        counterElement.innerText = quantity;
    });
});



pageCounter.innerHTML = products.page;


