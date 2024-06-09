const socket = io();

socket.on("connect", () => {
    console.log("Conectado al servidor de WebSocket");
    socket.emit("getProducts");
});

socket.on("updateProducts", (products) => {
    console.log("Productos actualizados:", products);

    const productsList = document.getElementById("products-list");
    productsList.innerHTML = "";

    products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${product.title}</h2>
            <p>Precio: $${product.price}</p>
            <p>${product.description}</p>
            <p>Precio: $${product.code}</p>
            <p>${product.stock}</p>
        `;
        productsList.appendChild(listItem);
    });
});
