const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const characters = [
    {
      routeName: "yoda",
      name: "Yoda",
      role: "Jedi Master",
      age: 900,
      forcePoints: 2000
    },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwan",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    },
    {
      routeName: "anakin",
      name: "Anakin Skywalker",
      role: "Force Balancer",
      age: 18,
      forcePoint: 1500,
    }
  ];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/add', function(req, res) {
    res.sendFile(path.join(__dirname, 'add.html'))
});

  app.get('/api/characters', (req, res) => {
    res.json(characters);
  });

app.get('/api/characters/:character', (req, res) => {
    const chosen = req.params.character;
    console.log(chosen)

    for(let route of characters){
        if(chosen === route.routeName){
            return res.json(route)
        };
    };
    res.json(false)
    res.end()
})

app.post('/api/characters', (req, res) => {
    let newCharacterdata = req.body;
    characters.push(newCharacterdata)
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase()
    res.end()
})

app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`)
})