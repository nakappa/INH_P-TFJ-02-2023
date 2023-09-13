import express from 'express';
import cors from 'cors';
import { users } from './data/Users';
import { User } from './types/User';

const app = express(),
      port = 8080,
      hostname = 'http:/localhost';

app.use(express.json());
app.use(cors());

//@ts-ignore
app.get('/users', (req, res) => {
  return res.json(users);
});

//@ts-ignore
app.post('/users/validate', (req, res) => {
  const status: boolean = false,
        user: User = users.filter(item => item.cpf == req.body.cpf)[0];
        
  if (user) return res.json({ status: !status, user: user });
  return res.json({ status: status, user: user });
});

//@ts-ignore
app.put('/users/update', (req, res) => {
  const status: boolean = false,
        user: User = users.filter(item => item.cpf == req.body.cpf)[0];
        
  if (user) {
    user.tasks.push(req.body.tasks);
    
    return res.json({
      status: !status,
      user: user,
      msg: 'Usuário atualizado com sucesso'
    });
  }

  return res.json({ 
    status: status, 
    user: user, 
    msg: 'Não foi possível atualizar o usuário'
  });
});

//@ts-ignore
app.listen(port, (req, res) => {
  console.log(`Servidor rodando com sucesso: ${hostname}:${port}`)
});