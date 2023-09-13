import type { User } from "@/types/Users";
import { baseURL } from "./service";

export async function login(values: FormData, user: User) {
  const fields = JSON.stringify({
    cpf: values.get('cpf'),
    password: values.get('password')
  }),

  config = {
    method: 'POST',
    body: fields,
    headers: { "Content-type": "application/json" }
  };

  await fetch(`${baseURL}/users/validate`, config)
    .then(res => res.ok && res.json())
    .then(res => {
      //@ts-ignore
      sessionStorage.setItem('logged', res.status);

      if (res.status) {
        //@ts-ignore
        sessionStorage.setItem('user', JSON.stringify(res.user));
        //@ts-ignore
        for (const field in res.user) user[field] = res.user[field];

      } else {
        sessionStorage?.removeItem('user');
        
        user.id = -1;
        user.cpf = 0;
        user.name = '';
        user.password = '';
        user.tasks = [];
      }
    });
}

export function add(user: User) {
  console.log(user)
}