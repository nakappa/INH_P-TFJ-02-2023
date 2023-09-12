import express from 'express';
import cors from 'cors';

const app = express(),
      port = 8080,
      hostname = 'http:/localhost';

app.use(express.json());
// app.use(cors());

//@ts-ignore
app.get('/', (req, res) => {
  return res.json('Testando a api');
});

//@ts-ignore
app.listen(port, (req, res) => {
  console.log(`Servidor rodando com sucesso: ${hostname}:${port}`)
});