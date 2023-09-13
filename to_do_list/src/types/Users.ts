import type { Task } from './Task';

export interface User {
  id: number;
  name: string;
  cpf: number;
  tasks: Array<Task>
}

export const noUser: User = {
  id: -1,
  cpf: 0,
  name: '',
  tasks: []
};