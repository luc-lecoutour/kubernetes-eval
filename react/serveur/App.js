const express = require("express");
const app = express();
app.use(express.json());
// Dummy data
let data = [
    { id: 1, key: "key1", value: "value1" },
    { id: 2, key: "key2", value: "value2" },
    { id: 3, key: "key3", value: "value3" },
];

// Get all items
app.get("/items", (req, res) => {
    res.json(data.map((item) => item.key));
});

app.get("/item", (req, res) => {
    const id = parseInt(req.query.id);
    const item = data.find((item) => item.id === id);
    if (item) {
        res.send(item.value);
    } else {
        res.status(404).send("Item not found");
    }
});

app.post("/item", (req, res) => {
    const { id, val } = req.body;
    const itemIndex = data.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
        data[itemIndex].value = val;
        res.send("Item updated");
    } else {
        const newItem = { id, key: `key${id}`, value: val };
        data.push(newItem);
        res.send("Item created");
    }
});

app.listen(5400, () => {
    console.log("Server is running on http://localhost:5400");
});
