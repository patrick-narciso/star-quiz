import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    SET_CLICKED(state, payload) {
      state.char.clicked = payload;
    },
    SET_SCORE(state, payload) {
      state.score = payload;
    },
    SET_PREVIOUS(state, payload) {
      state.previousPage = payload;
    },
    SET_NEXT(state, payload) {
      state.nextPage = payload;
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
    SET_CLICKED(context, payload) {
      context.commit('SET_CLICKED', payload);
    },
    SET_SCORE(context, payload) {
      context.commit('SET_SCORE', payload);
    },
    SET_PREVIOUS(context, payload) {
      context.commit('SET_PREVIOUS', payload);
    },
    SET_NEXT(context, payload) {
      context.commit('SET_NEXT', payload);
    },
    RESET_CHAR(context) {
      context.commit('RESET_CHAR');
    }
  }
})
