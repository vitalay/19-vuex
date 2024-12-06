<template>
  
    <header class="header">
        <strong>Счетчик {{ counter }}</strong>
        <button class="btn" @click="addFive">Добавить 5</button>
    </header>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        // counter() {
        //     return this.$store.getters.counter
        // },
        ...mapGetters(['counter'])
    },
    methods: {
       ...mapMutations(['add']),
       addFive() {
        this.add({value: 5})
        //    this.$store.commit('add', {
        //        value: 5
        //    })
       }  
    }

}
</script>

<style scoped>

</style>