<template>
    <div class="cart" v-if="show">
        <div class="cart-items">
            <ul v-if="cartItems.length > 0">
                <li v-for="item in cartItems" class="cart-item" :key="item.id" >
                    <h2>{{ item.name }} - ${{ item.value }}</h2>
                </li>
            </ul>
            <h3 v-else>
                No items in your cart
            </h3>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    data() {
        return {
            show: this.$store.state.showCart,
            cartItems: this.$store.state.cart
        }
    },
    watch: {
        '$store.state.showCart': function() {
            this.show = this.$store.state.showCart
        }
    }
})
export default class Cart extends Vue {}

</script>

<style scoped>

</style>