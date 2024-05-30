import express from "express";
import routerCart from "./Routes/carts.routes.js";
import routerProd from "./Routes/productos.routes.js";
import exphbs from 'express-handlebars'
import viewsRouter from './Routes/views.router.js'
import ProductsManager from "./controllers/Products-Manager.js";
import { Server } from 'socket.io';
const PORT = 8080;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Rutas para productos y carritos
app.use("/api/productos", routerProd);
app.use("/api/carts", routerCart);
app.use("/", viewsRouter);

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const httpServer = app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
    console.log(`Products API available at https://localhost:${PORT}/api/products`);
    console.log(`Carts API available at https://localhost:${PORT}/api/carts`);
});



//array de productos: 
const productManager = new ProductsManager("./src/models/products.json");


//server de Socket.io
const io = new Server(httpServer)

io.on("connection", async (socket) => {
    console.log("Un cliente se conecto");


    socket.emit("productos", await productManager.getProducts());

    socket.on("eliminarProducto", async (id) => {
        await productManager.deleteProduct(id);


        io.sockets.emit("productos", await productManager.getProducts());

    })

    //Agregar producto: 
    socket.on("agregarProducto", async (producto) => {
        console.log(producto);
        await productManager.addProduct(producto);
        io.sockets.emit("productos", await productManager.getProducts());
    })

})