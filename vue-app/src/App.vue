<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Shop</router-link> |
      <router-link to="/inventory">Inventory</router-link>
      <button @click="handleClick">Show Cart</button>
      <p>Your Money: ${{this.$store.state.currency}}</p>
    </div>
    <router-view/>
    <Cart/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator' 
import Cart from './components/Cart.vue'

@Component({
  components: {
    Cart
  }
})
export default class App extends Vue {
  handleClick() {
    this.$store.commit('TOGGLE_CART')
    console.log(this.$store.state.showCart)
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
