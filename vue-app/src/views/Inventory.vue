<template>
  <div class="inventory">
      <Character/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Character from '../components/Character.vue'

@Component({
    components: {
        Character
    }
})
export default class Inventory extends Vue {
    
}
</script>


<style>

</style>