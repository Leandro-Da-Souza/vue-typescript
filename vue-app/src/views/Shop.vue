<template>
  <div class="shop">
      <h3 v-if="this.equipment.length === 0">Loading...</h3>
      <ul v-else>
          <li v-for="item in equipment" :key="item.id">
              <h3>{{item.name}}</h3>
              <button @click="addToCart(item)">Add To Cart</button>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { EquipmentModel } from '../types/EquipmentModel'

@Component
export default class Shop extends Vue {
    data() {
        return {
            equipment: [] as EquipmentModel[]
        }
    }

    async created() {
        await this.$store.dispatch('GET_MERCH')
        this.equipment = this.$store.state.merchandise
    }

    addToCart(element: EquipmentModel) {
        console.log(element)
        this.$store.commit('SET_CART', element)
        console.log(this.$store.state.cart)
    }
   
}
</script>

<style>

</style>