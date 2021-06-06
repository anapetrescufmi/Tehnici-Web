const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors")
const fs = require("fs");
const uuid = require("uuid");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send(readJSONFile());
});

app.post("/", (req, res) => {
    const people = readJSONFile();
    var person = req.body;
    person.id = uuid.v1();
    people.push(person);
    writeJSONFile(people);
    res.send(person);
});

app.put("/", (req, res) => {
    var id = req.query.id;
    var people = readJSONFile();
    for(let i = 0; i < people.length; i++) {
        if(people[i].id === id) {
            req.body.id = id;
            people[i] = req.body;
        }
    }

    writeJSONFile(people);
    res.send(people);
})

app.delete("/", (req, res) => {
    var id = req.query.id;
    var people = readJSONFile();
    var newPeople = [];
    for(let i = 0; i < people.length; i++) {
        if(people[i].id !== id) {
            newPeople.push(people[i])
        }
    }

    writeJSONFile(newPeople);
    res.send(newPeople);
})

app.listen(port, () => {
    console.log("This app is listining on port: ", port);
});

// Functia de citire din fisierul db.json
function readJSONFile() {
    return JSON.parse(fs.readFileSync("formular.json"))["people"];
}

// Functia de scriere in fisierul db.json
function writeJSONFile(content) {
fs.writeFileSync(
    "formular.json",
    JSON.stringify({ people: content }),
    "utf8",
    err => {
    if (err) {
        console.log(err);
    }
    }
);
}