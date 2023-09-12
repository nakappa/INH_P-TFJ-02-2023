import { Task } from './Task';

export interface User {
  id: number;
  name: string;
  cpf: number;
  password: string;
  tasks: Array<Task>
}