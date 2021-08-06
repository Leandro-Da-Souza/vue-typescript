<template>
<div class="container">
    <div class="character">
      <h1>Character</h1>
      <ul class="character-info">
        <li>
          Name: {{ character.name }}
        </li>
        <li>
          Wealth: ${{character.wealth}}
        </li>
        <li>
          Luck: {{ character.luck }}
        </li>
        <li>
          Hit Points: {{ character.hitPoints}}
        </li>
      </ul>
      <h1>Character Stats</h1>
      <ul class="character-stats">
        <li>Hit Points: {{ character.hitPoints + this.$store.getters.getInventoryHitPoints }}</li>
        <li>Luck: {{ character.luck + this.$store.getters.getInventoryLuckPoints }}</li>
      </ul>
      <h1>Character Equipment</h1>
      <ul class="character-equipment">
        <li v-for="item in equipment" :key="item.id" @click="handleItemSelect(item)">
          <h3>{{item.name}}</h3>
        </li>
      </ul>
    </div>
    <div class="item-info">
      <h3 v-if="selectedItem === null">
        Select An Item For More Info
      </h3>
      <div v-else>
        <h2>{{selectedItem.name}}</h2>
        <img :src="getImage(selectedItem.type)" alt="">
        <p>Value: ${{selectedItem.value}}</p>
        <p>Hit Points: {{selectedItem.hpModifier}}</p>
        <p>Hit Luck: {{selectedItem.luckModifier}}</p>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterModel from '../types/CharacterModel.js'
import { getCharacter } from '../apiRequests';
import { EquipmentModel } from '../types/EquipmentModel.js';

@Component()
export default class Character extends Vue {
  private character?: CharacterModel = undefined;

  data() {
    return {
      character: this.$store.state.character as CharacterModel,
      equipment: this.$store.state.characterInventory as EquipmentModel[],
      selectedItem: null
    }
  }
  

  // life-cycle hooks
  async mounted() {
    this.character = await getCharacter();
    this.character.equipment.forEach(el => {
      if(this.equipment.find(item => item.id === el.id)) {
        console.log('item exists')
      } else {
        this.$store.commit('ADD_CHARACTER_INVENTORY', this.character.equipment)
      }
    })
    console.log(this.character)
  }

  handleItemSelect(item) {
    this.selectedItem = item
    console.log(this.selectedItem)
  }

  getImage(el) {
    if(el === 'Armor') {
        return require('../images/armor.png')
    } else if(el === 'Weapon') {
        return require('../images/sword.png')
    } else if(el === 'Trinket') {
        return require('../images/key.png')
    } else {
        return '';
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.character {
  display: flex;
  flex-direction: column;
}


.container {
  display: flex;
  justify-content: space-between;
  width: 70vw;
}

.item-info {
  width: 20vw;
}

.item-info img {
  width: 50px;
  height: 50px;
}
/* h3 {
  margin: 40px 0 0;
} */
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
