import Vue from 'vue'
import Vuex from 'vuex'
import { getEqupiment } from '../apiRequests'
import { EquipmentModel } from '../types/EquipmentModel';
import CharacterModel from '../types/CharacterModel';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    merchandise: [] as EquipmentModel[],
    character: {} as CharacterModel,
    characterInventory: [],
    showCart: false,
    cart: [] as EquipmentModel[],
    currency: null
  },
  mutations: {
    SET_MERCH: (state, data) => {
      state.merchandise = data
    },
    TOGGLE_CART: (state) => {
      state.showCart = !state.showCart
    },
    SET_CART: (state, data) => {
      if(state.cart.find(item => item.id === data.id)){
        return false;
      } 
      else {
        state.cart.push(data)
      }
    },
    ADD_CHARACTER_INVENTORY: (state, data) => {
      state.characterInventory.push(...data);
    },
    UPDATE_CURRENCY: (state) => {
      state.cart.forEach((el) => {
        state.currency -= el.value
      })
    },
    CLEAR_CART: (state) => {
      state.cart = [] as EquipmentModel[];
    },
    SET_CURRENCY: (state, data) => {
      state.currency = data
    },
    REMOVE_FROM_CART: (state, data) => {
      const index = state.cart.findIndex((i) => i.id === data.id);
      state.cart.splice(index, 1);
      console.log(state.cart)
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
  getters:{
    getCartPrice(state) {
      let total = 0;
      state.cart.forEach((item) => {
          total += item.value;
      });
      return total;
    },
    getInventoryHitPoints(state) {
      let total = 0
      state.characterInventory.forEach(el => {
        total += el.hpModifier
      })
      return total
    },
    getInventoryLuckPoints(state) {
      let total = 0
      state.characterInventory.forEach(el => {
        total += el.luckModifier
      })
      return total
    }
  },
  modules: {
  }
})
