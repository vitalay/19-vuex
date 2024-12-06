<template>
 


 <div class="container with-nav">
  <div class="card">
    <h1>Vuex</h1>
    <h2>Счетчик {{ $store.state.counter }}</h2>
    <button class="btn" @click="increment"></button>
    
  </div>
   <TheNavbar />
 </div>
 
</template>
<script>

import TheNavbar from './components/TheNavbar.vue'

export default {
  
components: {
  TheNavbar
},

methods: {
  increment() {
    this.$store.state.counter++
  }
 }
}
</script> 




<style scoped>

</style>
