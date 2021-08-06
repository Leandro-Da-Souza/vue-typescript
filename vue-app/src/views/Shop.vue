<template>
    <div class="container">
        <h2>Available Merchandise</h2>
        <div class="shop">
            <h3 v-if="this.equipment.length === 0">Loading...</h3>
            <ul v-else class="shop-list">
                <li v-for="item in equipment" :key="item.id" class="shop-list-item">
                    <h3>{{item.name}}</h3>
                    <div class="type-spec">
                        <p>Type: {{item.type}}</p>
                        <img :src="getImage(item.type)" alt="">
                    </div>
                    <div class="modifiers">
                        <div class="wrapper">
                            <p>Hit Points</p>
                            {{ item.hpModifier }}
                        </div>
                        <div class="wrapper">
                            <p>Luck Points</p>
                            {{ item.luckModifier}}
                        </div>
                    </div>
                    <h3>Value: ${{item.value}}</h3>
                    <button @click="addToCart(item)">Add To Cart</button>
                </li>
            </ul>
        </div>
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
        console.log('hello')
        this.$store.commit('SET_CART', element)
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

<style scoped>
.container {
    display: flex;
    width: 70vw;
    /* max-height: 100%; */
    flex-direction: column;
    align-center: center;
    justify-content: center;
    /* margin-top: 10px; */
}


.container h2 {
    text-align: center;
}
.shop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
}
.shop-list {
    display: grid;
    width: 90%;
    /* height: 90%; */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* border: 1px solid white; */
    list-style-type: none;
    
}

.shop-list-item {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

.shop-list-item h3 {
    text-align: center;
}

.shop-list .type-spec {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.shop-list .type-spec img {
    width: 50px;
    height: 50px;
}

.modifiers {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

</style>