import type { Task } from './Task';

export interface User {
  id: number;
  name: string;
  cpf: number;
  tasks: Array<Task>
}