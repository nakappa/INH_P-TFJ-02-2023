import { noUser, type User } from "@/types/Users";
import { baseURL } from "./service";
import type { Task } from "@/types/Task";

const config = (method: string, body: any) => {
  return {
    method: method.toUpperCase(),
    body: body,
    headers: { "Content-type": "application/json" }
  }
}

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
          sessionStorage.setItem('user', JSON.stringify(res.user));

        } else {
          //@ts-ignore
          for (const field in user) user[field] = noUser[field];
          sessionStorage?.removeItem('user');
        }
      });
}

export function logout(user: User) {
  //@ts-ignore
  for (const field in user) user[field] = noUser[field];
  sessionStorage.clear();
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
          cpf: user.cpf,
          task: fieldTask
        });

  await fetch(`${baseURL}/users/update`, config('put', fields))
    .then(res => res.ok && res.json())
    .then(res => {
      res.status && tasks.push(fieldTask);
      console.log(user.tasks.length)
      sessionStorage.setItem('user', JSON.stringify(user));
    });
}

export async function del(task_id:number, user: User) {
  const { tasks } = user,
        fields = JSON.stringify({
          task_id: task_id,
          cpf: user.cpf
        });

  await fetch(`${baseURL}/users/delete`, config('delete', fields))
    .then(res => res.ok && res.json())
    .then(res => {
      console.log(res.status)
        for (let i: number = 0; i < tasks.length; i++)
          if (task_id == tasks[i].id) {
            tasks?.splice(i, 1);
            break;
          }
          
      sessionStorage.setItem('user', JSON.stringify(user));
    });
}