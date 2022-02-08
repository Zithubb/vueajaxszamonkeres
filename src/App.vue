<template>
  <div id="app">
    <nav>
      <router-link to="/">Statues</router-link>
      <router-link to="/paintings">Paintings</router-link>
    </nav>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      state: 'Statues'
    }
  },
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
nav a {
  padding: 10px;
  background-color: black;
  text-decoration: none;
  color: silver;
}
nav a.router-link-exact-active {
  background-color: whitesmoke;
}
</style>
