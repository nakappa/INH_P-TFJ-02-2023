import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import type { User } from '@/types/Users';
import { user } from './userTest';
import BtnDel from '@/components/atomics/buttons/BtnDel.vue';

async function testDel(task_id: number, user: User) {
  const { tasks } = user;
        
  for (let i: number = 0; i < tasks.length; i++)
    if (task_id == tasks[i].id) {
      tasks?.splice(i, 1);
      break;
    }
}

describe('BtnDel', () => {
  const wrapper = mount(BtnDel, { props: { task_id: 0, user: user.value } })

  it('Se logar está removendo tarefas:', async()  => {
    await wrapper.find('button').trigger('click', { click: await testDel(wrapper.props('task_id'), wrapper.props('user')) });
    expect(wrapper.html()).toContain('button');
    expect(wrapper.props('user').tasks.length < 1).toBeTruthy();
  });
});