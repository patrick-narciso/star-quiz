import { mount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading.vue', () => {
  it('is a Vue instance of Loading', () => {
    const wrapper = mount(Loading);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})