import express from 'express';

const router = express.Router();

router.post("/register", (req, res) => {
    res.json({ message: "Register the user"})
})

router.post("/login", (req, res) => {
    res.json({ message: "Login the user"})
})

router.get("/current", (req, res) => {
    res.json({ message: "Current the user"})
})

export default router;