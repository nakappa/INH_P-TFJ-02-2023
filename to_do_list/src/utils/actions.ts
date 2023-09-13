import { noUser, type User } from "@/types/Users";
import { baseURL } from "./service";

export async function login(values: any, user: User) {
  console.log(values)
  const fields = JSON.stringify({
    cpf: values.cpf,
    password: values.password
  }),

  config = {
    method: 'POST',
    body: fields,
    headers: { "Content-type": "application/json" }
  };

  await fetch(`${baseURL}/users/validate`, config)
    .then(res => res.ok && res.json())
    .then(res => {
      sessionStorage.setItem('logged', res.status);

      if (res.status) {
        //@ts-ignore
        sessionStorage.setItem('user', JSON.stringify(res.user));
        //@ts-ignore
        for (const field in user) user[field] = res.user[field];

      } else {
        sessionStorage?.removeItem('user');
        //@ts-ignore
        for (const field in user) user[field] = noUser[field];
      }
    });
}

export function logout( user: User) {
  //@ts-ignore
  for (const field in user) user[field] = noUser[field];
  sessionStorage.clear();
}

export function add(user: User) {
  console.log(user)
}