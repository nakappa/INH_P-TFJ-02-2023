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
  const { tasks } = user,
        pos = user.tasks.length - 1,
        
        fieldTasks: Array<Task> = [
          {
            id: tasks[pos].id + 1,
            act: false,
            description: 'Descrição da tarefa',
            title: 'Título'
          }
        ],

        fields = JSON.stringify({
          cpf: user.cpf,
          tasks: fieldTasks
        });

  await fetch(`${baseURL}/users/update`, config('put', fields))
    .then(res => res.ok && res.json())
    .then(res => {
      //@ts-ignore
      for (const field in user) user[field] = res.user[field];
      sessionStorage.setItem('user', JSON.stringify(user));
    });
}