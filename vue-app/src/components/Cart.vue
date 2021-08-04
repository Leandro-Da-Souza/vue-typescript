<template>
    <div class="class">
        {{ show }}
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch } from 'vue-property-decorator'

@Component({
    data() {
        return {
            show: this.$store.state.showCart
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