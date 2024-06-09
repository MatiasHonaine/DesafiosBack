import { Router } from "express";

const viwRouter = Router();
viwRouter.get("/", (req, res) => {
    res.render("index");
});

viwRouter.get("/realtimeproducts", async (req, res) => {
    res.render('realtimeproducts', {})
})

export default viwRouter