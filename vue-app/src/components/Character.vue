<template>
  <div class="character">
    <h1>Character</h1>
    <h2 v-if="character">Name: {{ character.name }}</h2>
    {{this.equipment}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterModel from '../types/CharacterModel.js'
import { EquipmentModel } from '../types/EquipmentModel'
import { getCharacter } from '../apiRequests';

@Component({
  watch: {
    '$store.state.characterInventory': function() {
      this.equipment = this.$store.state.characterInventory
    }
  }
})
export default class Character extends Vue {
  private character?: CharacterModel = undefined;
  public equipment?: EquipmentModel[] = [];

  data() {
    return {
      character: this.character,
      equipment: this.equipment
    }
  }

  // life-cycle hooks
  async mounted() {
    this.character = await getCharacter();
    this.$store.commit('ADD_CHARACTER_INVENTORY', this.character.equipment)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
