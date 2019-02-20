import { mount, createLocalVue } from '@vue/test-utils'
import TheEnd from '@/components/TheEnd.vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TheEnd.vue', () => {
	let store;
  beforeEach(() => {
		store = new Vuex.Store({
			state: {
				people: [],
				score: 0,
				previousPage: null,
				nextPage: null,
				char: {
					name: '',
					specie: [],
					height: '',
					hair: '',
					planet: '',
					movies: [],
					vehicles: [],
					clicked: false
				},
			},
		})
	})

  test('is a Vue instance of TheEnd', () => {
    const wrapper = mount(TheEnd)
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	test('isEmail should validate the email correctly', () => {
		const wrapper = mount(TheEnd, { store, localVue })
		const email = 'teste@teste.com'
		const result = wrapper.vm.isEmail(email)
		expect(result).to.be.equal(true);
	})
	
})