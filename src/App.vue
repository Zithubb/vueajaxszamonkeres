<template>
  <div id="app">
    
    <h1 v-if="route == 'Statues'">
      Statues
      <button v-if="route == 'Statues'" @click="goToPaintings()">Paintings</button>
    </h1>
    <h1 v-if="route == 'Paintings'">
      Paintings
      <button v-if="route == 'Paintings'" @click="goToStatues()">Statues</button>
    
    </h1>
    <hr/>
    <Paintings v-if="route == 'Paintings'"/>
    
    <Statues v-if="route == 'Statues'"/>
  </div>
</template>

<script>

import Statues from './components/Statues.vue'
import Paintings from './components/Paintings.vue'

export default {
  name: 'App',
  components: {
    Statues,
    Paintings
  },
  data() {
    return {
      route: "Statues"
    }
  },
  methods: {
    
    goToStatues(){
      this.route = 'Statues';
    },
    goToPaintings(){
      this.route = 'Paintings';
    }
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
  margin-top: 60px;
}
</style>
