const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('./public'));

app.use(express.json());

const db = [];

app.get('/tasks', (req, res) => {
    try {
        res.status(200).json(db);
    } catch(err) {
        return res.status(500).send('Internal server error');
    }
})


app.post('/submit', (req, res) => {
    try {
        const task = req.body.task;
        if(!task) return res.status(400).send('Task required');
        db.push(task);
        console.log(db);
        res.status(201).send('Data succesfully submitted!');
    } catch(err) {
        return res.status(500).send('Internal server error');
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})