"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import Request, Response, Router from Express library
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello World");
});
router.post("/", (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}`);
});
exports.default = router;
