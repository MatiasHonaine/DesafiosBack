const express = import("express");
const router = express.Rputer();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/", async (req, res) => {
    try {
        const productos = await productManager.getProducts;
        res.render("home", { productos })

    } catch (error) {

    }
})

module.exports = router;