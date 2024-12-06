<template>
 
 <TheNavbar />

 <div class="container with-nav">
  <div class="card">
    <h1>Vuex</h1>
    <h2>Счетчик {{ $store.getters.counter }} ({{ $store.getters.counter }})</h2>
    <button class="btn primary" @click="increment"> Добавить </button>
    
  </div>
  
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
    this.$store.commit('increment');
  }
 }
}
</script> 




<style scoped>
.container.with-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.card {
  width: 700px;
  margin: 0 auto;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: rgb(138, 118, 118);
  text-align: center;
}

h1 {
  margin-bottom: 10px;
  color: #333;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #666666;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #00ff73;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #495f75;
}
</style>