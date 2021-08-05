import Vue from 'vue'
import Vuex from 'vuex'
import { getEqupiment } from '../apiRequests'
import { EquipmentModel } from '../types/EquipmentModel';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    merchandise: [],
    characterInventory: [],
    showCart: false,
    cart: [] as EquipmentModel[]
  },
  mutations: {
    SET_MERCH: (state, data) => {
      state.merchandise = data
    },
    TOGGLE_CART: (state) => {
      state.showCart = !state.showCart
    },
    SET_CART: (state, data) => {
      if(state.cart.find(item => item.id === data.id))
      {
        return false;
      } 
      state.cart.push(data)
    },
    ADD_CHARACTER_INVENTORY: (state, data) => {
      state.characterInventory.push(...data);
    },
    CLEAR_CART: (state) => {
      state.cart = [] as EquipmentModel[];
      console.log(state.cart)
      console.log(state.characterInventory)
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
