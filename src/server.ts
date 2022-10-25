import express from 'express';

const app = express();

app.get('/games', (req, res) => {
  return res.json([]);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  // const gamesId  = req.params.id;

  return res.json([
    {id: 1, name: 'Anúncio 1'},
    {id: 2, name: 'Anúncio 2'},
    {id: 3, name: 'Anúncio 3'},
  ])
})

app.get('/games/:id/discord', (req, res) => {
  // const addId  = req.params.id;

  return res.json([])
})

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))

