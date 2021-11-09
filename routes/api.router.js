const express = require("express");
const router = express.Router();

const { authRequired } = require("@app/middlewares/auth.middlewares");

const authRouter = require("./api/auth.router");

router.use("/auth", authRouter);
router.use(authRequired);


module.exports = router;