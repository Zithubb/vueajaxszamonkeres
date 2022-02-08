<template>
  <div id="app">
    <nav>
      <router-link to="/statues">Statues</router-link>
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
body{
  background: thistle;
}
nav a {
  padding: 10px;
  background-color: silver;
  text-decoration: none;
  color: black;
}
nav a.router-link-exact-active {
  background-color: black;
  color: silver;
}
</style>
