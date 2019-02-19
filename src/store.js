import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    score: '',
    char: {
      name: '',
      specie: [],
      height: '',
      hair: '',
      planet: '',
      movies: [],
      vehicles: []
    },
  },
  mutations: {
    SET_PEOPLE(state, payload) {
      state.people = payload;
    },
    SET_MOVIES(state, payload) {
      state.char.movies.push(payload);
    },
    SET_VEHICLES(state, payload) {
      state.char.vehicles.push(payload);
    },
    SET_PLANET(state, payload) {
      state.char.planet = payload;
    },
    SET_SPECIE(state, payload) {
      state.char.specie.push(payload);
    },
    SET_CHAR(state, payload) {
      state.char.height = payload.height;
      state.char.hair = payload.hair_color;
      state.char.name = payload.name;
    },
    RESET_CHAR(state) {
      state.char.name = '',
      state.char.specie = [],
      state.char.height = '',
      state.char.hair = '',
      state.char.planet = '',
      state.char.movies = [],
      state.char.vehicles = []
    }
  },
  actions: {
    SET_PEOPLE(context, payload) {
      context.commit('SET_PEOPLE', payload);
    },
    SET_SPECIE(context, payload) {
      context.commit('SET_SPECIE', payload);
    },
    SET_PLANET(context, payload) {
      context.commit('SET_PLANET', payload);
    },
    SET_MOVIES(context, payload) {
      context.commit('SET_MOVIES', payload);
    },
    SET_VEHICLES(context, payload) {
      context.commit('SET_VEHICLES', payload);
    },
    SET_CHAR(context, payload) {
      context.commit('SET_CHAR', payload);
    },
    RESET_CHAR(context) {
      context.commit('RESET_CHAR');
    }
  }
})
