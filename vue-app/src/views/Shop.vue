<template>
  <div class="shop">
      <p>{{firstName}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
export default class Shop extends Vue {
    firstName = 'Leo'
}
</script>

<style>

</style>