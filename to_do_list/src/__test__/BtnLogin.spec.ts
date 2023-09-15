import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import { user } from './userTest';
import BtnLogin from '@/components/atomics/buttons/BtnLogin.vue';

describe('BtnAdd', () => {
  const wrapper = mount(BtnLogin, { props: { user: user } })

  it('Se logar está funcionando:', async()  => {

    expect(wrapper.trigger('login')).toBeTruthy()
  });
});