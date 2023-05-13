const express = require('express');
const app = express();

const store = require("nedb");
const db = new store({ filename: './data/tracking.db' });
db.loadDatabase();

// variables
const port = 2999;

app.get('/api/tracked', (req, res) => {
    res.send({ "message": "hai" });
});

app.post('/api/tracked:uuid', (req, res) => {
    const API_KEY = "dda05d25-ee94-4b59-a855-5d282191dfa4";
    const uuid = req.params.uuid;

    // fetch to hypixel api
    async function getHypixelData(uuid) {
        const hypixel = await fetch(`https://api.hypixel.net/player?key=${API_KEY}&uuid=${uuid}`);
        const data = await hypixel.json();
    }
    getHypixelData(uuid);

    if (!uuid) {
        res.status(400).send("Bad UUID");
    }
    db.insert({ UUID: uuid, display: data.displayname });
    res.send(db);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});