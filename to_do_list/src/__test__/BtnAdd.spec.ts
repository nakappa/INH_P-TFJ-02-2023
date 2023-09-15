import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import type { User } from '@/types/Users';
import { user } from './userTest';
import BtnAdd from '@/components/atomics/buttons/BtnAdd.vue';
import type { Task } from '@/types/Task';

async function testAdd(user: User) {
  if (!user.tasks) user.tasks = [];

  const { tasks } = user,
        pos = tasks?.length - 1 || 0,
        
        fieldTask: Task = {
          id: tasks[pos]?.id + 1 || 0,
          act: false,
          description: 'Descrição da tarefa',
          title: 'Título'
        };

  tasks.push(fieldTask)
}

describe('BtnAdd', () => {
  const wrapper = mount(BtnAdd, { props: { user: user.value } })

  it('Se logar está adiconando tarefas:', async()  => {
    await wrapper.find('button').trigger('click', { click: await testAdd(wrapper.props('user')) });
    expect(wrapper.html()).toContain('button');
    expect(wrapper.props('user').tasks.length > 1).toBeTruthy();
  });
});