import Vue from 'vue'
import Vuex from 'vuex'
import { getEqupiment } from '../apiRequests'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    merchandise: [],
    characterInventory: [],
    showCart: false
  },
  mutations: {
    SET_MERCH: (state, data) => {
      state.merchandise = data
    },
    TOGGLE_CART: (state) => {
      state.showCart = !state.showCart
    }
  },
  actions: {
    GET_MERCH: async ({commit}) => {
      try {
        const res = await getEqupiment();
        commit('SET_MERCH', res)
        return true
      } catch(e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
