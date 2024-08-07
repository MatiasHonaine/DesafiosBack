const CartsServices = require("../services/carts.services.js");
const cartsServices = new CartsServices();

class CartsController {
    async getCartById(req, res) {
        const { cid } = req.params;
        try {
            const cart = await cartsServices.getCartById(cid);
            if (cart) {
                res.status(200).json(cart);
            } else {
                res.status(404).json({ message: `Cart with id ${cid} not found` });
            }
        } catch (err) {
            console.log("err:", err);
            res.status(500).json({ message: "Server problems" });
        }
    }

    async createCart(req, res) {
        try {
            const newCart = await cartsServices.createCart();
            res.json({ message: `Cart created with id ${newCart._id}` });
        } catch (err) {
            console.log("err:", err);
            res.status(500).json({ message: "Server problems" });
        }
    }

    async deleteProductsFromCart(req, res) {
        try {
            const { cid } = req.params;
            if (cid) {
                const status = await cartsServices.deleteProductsFromCart(cid);
                
                res.status(200).json({ messsage: status });
            }
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    async addToCart(req, res) {
        try {
            const quantity = req.body.quantity;
            const { cid, pid } = req.params;
            if (cid && pid) {
                const status = await cartsServices.addToCart(cid, pid, quantity);
                res.status(200).json({ messsage: status });
            }
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    async deleteFromCart(req, res) {
        try {
            const { cid, pid } = req.params;
            if (cid && pid) {
                const status = await cartsServices.deleteFromCart(cid, pid);
                res.status(200).json({ messsage: status });
            }
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }

    async addProductsToCart(req, res) {
        try {
            const { cid } = req.params;
            if (cid) {
                const products = req.body
                const status = await cartsServices.addProductsToCart(cid, products);
                res.status(200).json({ messsage: status });
            }
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }
}

module.exports = CartsController;