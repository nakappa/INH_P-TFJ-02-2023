import type { User } from "@/types/Users";
import { baseURL } from "./service";
import type { Task } from "@/types/Task";

let msg: string;

const noUser: User = {
  id: -1,
  cpf: 0,
  name: '',
  tasks: []
},

config = (method: string, body: any) => {
  return {
    method: method.toUpperCase(),
    body: body,
    headers: { "Content-type": "application/json" }
  }
};

export async function login(values: any, user: User) {
  const fields = JSON.stringify({
    cpf: values.cpf,
    password: values.password
  });

  (values.cpf != '' && values.password != '') &&
    await fetch(`${baseURL}/users/validate`, config('post', fields))
      .then(res => res.ok && res.json())
      .then(res => {
        sessionStorage.setItem('logged', res.status);

        if (res.status) {
          //@ts-ignore
          for (const field in user) user[field] = res.user[field];
          msg = res?.msg;
          sessionStorage.setItem('user', JSON.stringify(res.user));

        } else {
          //@ts-ignore
          for (const field in user) user[field] = noUser[field];
          console.log(msg)
          msg = res?.msg;
          sessionStorage?.removeItem('user');
        }
      });

  msg != undefined && alert(msg);
}

export async function logout(user: User) {
  //@ts-ignore
  for (const field in user) await (user[field] = noUser[field]);
  sessionStorage.clear();
  console.log(noUser)
}

export async function add(user: User) {
  if (!user.tasks) user.tasks = [];

  const { tasks } = user,
        pos = tasks?.length - 1 || 0,
        
        fieldTask: Task = {
          id: tasks[pos]?.id + 1 || 0,
          act: false,
          description: 'Descrição da tarefa',
          title: 'Título'
        },

        fields = JSON.stringify({
          requestType: 'add',
          cpf: user.cpf,
          task: fieldTask
        });

        console.log('entrei')
  await fetch(`${baseURL}/users/update`, config('put', fields))
    .then(res => res.ok && res.json())
    .then(res => {
      msg = res.msg;
      res.status && tasks.push(fieldTask);
    });
    
  setTimeout(() => alert(msg), 475);
  sessionStorage.setItem('user', JSON.stringify(user));
}

export async function del(task_id:number, user: User) {
  const { tasks } = user,
        fields = JSON.stringify({
          cpf: user.cpf,
          task_id: task_id
        });

  await fetch(`${baseURL}/users/delete`, config('delete', fields))
    .then(res => res.ok && res.json())
    .then(res => {
      if (res.status) {
        const container = document.querySelector('.tasks') as HTMLElement;
        container?.classList.add('removed');
        setTimeout(() => {
          container?.classList.remove('removed');
          
          for (let i: number = 0; i < tasks.length; i++)
            if (task_id == tasks[i].id) {
              tasks?.splice(i, 1);
              break;
            }
            
          sessionStorage.setItem('user', JSON.stringify(user));
        }, 450);
      }
          
      msg = res.msg;
    });

    setTimeout(() => alert(msg), 475);
  }

export async function change( requestType: string, task_id: number, user: User, value: any) {
  const { tasks } = user,
  
        fields = JSON.stringify({
          requestType: requestType,
          cpf: user.cpf,
          task_id: task_id,
          value: value
        });

  await fetch(`${baseURL}/users/update`, config('put', fields))
    .then(res => res.ok && res.json())
    .then(res => {
      if (res.status)
        for (let i: number = 0; i < tasks.length; i++)
          if (task_id == tasks[i].id) {
            if (requestType == 'change-task') tasks[i].act = value;
            if (requestType == 'change-title') tasks[i].title = value;
            if (requestType == 'change-description') tasks[i].description = value;
            break;
          }
          
    });
  
  sessionStorage.setItem('user', JSON.stringify(user));
}