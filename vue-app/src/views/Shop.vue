<template>
  <div class="shop">
      <h3 v-if="this.equipment.length === 0">Loading...</h3>
      <ul v-else>
          <li v-for="item in equipment" :key="item.id">
              <h3>{{item.name}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Shop extends Vue {
    data() {
        return {
            equipment: []
        }
    }

    async created() {
        await this.$store.dispatch('GET_MERCH')
        this.equipment = this.$store.state.merchandise
    }
   
}
</script>

<style>

</style>