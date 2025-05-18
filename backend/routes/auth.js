const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const [user] = await db.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, password]
        );
        res.status(201).json({ message: "User registered!" });
    } catch (err) {
        console.error("Error during registration:", err.message);
        res.status(500).json({ message: "Registration failed" });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password]
        );

        if (rows.length > 0) {
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Login failed" });
    }
});

module.exports = router;
