import express from 'express';
import cors from 'cors';
import { users } from './data/Users';

const app = express(),
      port = 8080,
      hostname = 'http:/localhost';

app.use(express.json());
// app.use(cors());

//@ts-ignore
app.get('/users', (req, res) => {
  return res.json(users);
});

//@ts-ignore
app.listen(port, (req, res) => {
  console.log(`Servidor rodando com sucesso: ${hostname}:${port}`)
});