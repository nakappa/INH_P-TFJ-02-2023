import type { User } from "@/types/Users";
import { ref } from 'vue';

export const user = ref<User> ({
  id: 0,
  name: 'João das Couve',
  cpf: 22054914070,
  tasks: [
    {
      id: 0,
      act: false,
      description: 'Teste de componente',
      title: 'Testando'
    }
  ]
})