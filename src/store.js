import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    movies: [],
    vehicles: [],
    char: {
      name: '',
      specie: '',
      height: '',
      hair: '',
      planet: ''
    },
  },
  mutations: {
    SET_PEOPLE(state, payload) {
      state.people = payload;
    },
    SET_MOVIES(state, payload) {
      state.movies.push(payload);
    },
    SET_VEHICLES(state, payload) {
      state.vehicles = payload;
    },
    SET_CHAR(state, payload) {
      state.char.specie = payload.specie;
      state.char.height = payload.height;
      state.char.hair = payload.hair;
      state.char.planet = payload.planet;
      state.char.name = payload.name;
    }
  },
  actions: {
    SET_PEOPLE(context, payload) {
      context.commit('SET_PEOPLE', payload);
    },
    SET_MOVIES(context, payload) {
      context.commit('SET_MOVIES', payload);
    },
    SET_VEHICLES(context, payload) {
      context.commit('SET_VEHICLES', payload);
    },
    SET_CHAR(context, payload) {
      context.commit('SET_CHAR', payload);
    }
  }
})
