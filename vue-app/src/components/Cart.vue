<template>
    <transition name="slide-fade">
            <div class="cart" v-if="show">
                <button @click="handleClose()" class="close-btn">X</button>
                <h2>Ye Olde Shopping Cart</h2>
                <div class="cart-items" mode="out-in">
                    <ul v-if="cartItems.length > 0">
                        <li v-for="item in cartItems" class="cart-item" :key="item.id" >
                            <h4>{{ item.name }} - ${{ item.value }}</h4>
                            <button @click="removeFromCart(item)" class="close-btn">X</button>
                        </li>
                        <div class="checkout">
                            <button @click="addToInventory()" class="buy-btn">Buy Items</button>
                            <p>Your Gold: ${{this.$store.state.character.wealth}}</p>
                            <p>Total amount: ${{ this.$store.getters.getCartPrice }}</p>
                        </div>
                    </ul>
                    <h3 v-else>
                        No items in your cart
                    </h3>
                </div>
            </div>
        </transition>
        
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    data() {
        return {
            show: this.$store.state.showCart,
            cartItems: this.$store.state.cart,
        }
    },
    watch: {
        '$store.state.showCart': function() {
            this.show = this.$store.state.showCart
        },
        '$store.state.cartItems': function() {
            this.cartItems = this.$store.state.cart
        }
    },
    methods: {
        addToInventory() {
            if(this.$store.getters.getCartPrice >= this.$store.state.currency) {
                alert('Not Enough Gold Stranger')
            } else {
                this.$store.commit('ADD_CHARACTER_INVENTORY', this.cartItems)
                this.$store.commit('UPDATE_CURRENCY')
                this.$store.commit('CLEAR_CART')
                this.cartItems = []
            }
        },
        removeFromCart(item) {
            this.$store.commit('REMOVE_FROM_CART', item)
            console.log(this.$store.state.cart)
        },
        handleClose() {
            this.$store.commit('TOGGLE_CART')
        }
    }
})
export default class Cart extends Vue {}

</script>

<style scoped>
@import url('../styles/globals.css');
.cart {
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--global-parchment-background-color);
    background-image : url(http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=5c5c5c&density=13&opacity=62);
    color: var(--global-parchment-color);
    width: 25vw;
    height: 100vh;
    box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart-item {
    display: flex;
    margin-top: 5px;
}

.cart .close-btn {
    width: 20px;
    margin-left: auto;
    background-color: var(--global-background-color);
    color: #fff;
    border: none;
} 
.cart-items {
    
}

.checkout {
    align-self: flex-end;
}

h2 {
    text-align:center;
}
h3 {
    text-align: center;
    margin-top: 50%;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>