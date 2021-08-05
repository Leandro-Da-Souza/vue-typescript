<template>
  <div id="app">
    <h1 class="title">
      The Hunter's Shop
      <span class="creed">- Help, the Treasure Hunters shout; be calm, we respond!</span>
    </h1>
    <div id="nav">
      <div class="nav-left">
        <router-link to="/">Shop</router-link> |
        <router-link to="/inventory">Your Inventory</router-link>
      </div>
      <div class="nav-right">
        <p>Your Money: ${{this.$store.state.currency}}</p>
        <button @click="handleClick">Show Cart</button>
      </div>
    </div>
    <router-view/>
    <Cart/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator' 
import Cart from './components/Cart.vue'
import { getCharacter } from './apiRequests';

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

  async mounted() {
    this.$store.state.character = await getCharacter()
    if(this.$store.state.currency === null) {
      this.$store.commit('SET_CURRENCY', this.$store.state.character.wealth)
    }
  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Open+Sans&display=swap');
@import url('./styles/globals.css');

* {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--global-paragraph-color);
  background-color: var(--global-background-color);
  background-image: url('./images/brick-wall.png')
}

#nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.nav-right {
  display: flex;
}

.nav-left {
  width: 25%;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #;
}

.title {
  font-size: 3.5rem;
  color: var(--global-heading-color);
  font-family: 'Marcellus SC', serif;
}

.creed {
  font-size: 0.8rem;
  font-style: italic
}
</style>
