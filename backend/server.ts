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
  const requestType = req.body.requestType,
        status: boolean = false,
        user: User = users.filter(item => item.cpf == req.body.cpf)[0];
        
  if (user) {
    if (requestType == 'add') user.tasks.push(req.body.task);
    else if (requestType == 'change-task') changeValueUser('act', req.body.value);
    else if (requestType == 'change-title') changeValueUser('title', req.body.value);
    else if (requestType == 'change-description') changeValueUser('description', req.body.value);
    
    return returnREQ(!status, 'Atualização realizada com sucesso!!!');
  }

  return returnREQ(status, 'Houve um erro, tente novamente mais tarde!!!');

  function returnREQ(status: boolean, msg: string) {
    return res.json({
      status: status,
      msg: msg
    });
  }

  function changeValueUser(field: string, value: any) {
    for (let i: number = 0; i < user.tasks.length; i++) {
      if (req.body.task_id == user.tasks[i].id) {
        //@ts-ignore
        user.tasks[i][field] = value;
        break;
      }
    }
  }
});

//@ts-ignore
app.delete('/users/delete', (req, res) => {
  const status: boolean = false,
        user: User = users.filter(item => item.cpf == req.body.cpf)[0];

        console.log(req.body)
        
  if (user) {
    for (let i: number = 0; i < user.tasks.length; i++)
      if (req.body.task_id == user.tasks[i].id) {
        user.tasks?.splice(i, 1);
        break;
      }
    
      return res.json({ 
        status: !status, 
        user: user, 
        msg: 'Tarefa removida com sucesso'
      });
  }

  return res.json({ 
    status: status, 
    user: user, 
    msg: 'Não foi possível remover a tarefa'
  });
});

//@ts-ignore
app.listen(port, (req, res) => {
  console.log(`Servidor rodando com sucesso: ${hostname}:${port}`)
});