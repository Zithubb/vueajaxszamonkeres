<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Cím</th>
          <th>Év</th>
          <th>Kiállítva</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="painting in paintings" v-bind:key="painting.id">
          <td><router-link :to="'/paintings/' + painting.id">{{ painting.title }}</router-link></td>
          <td>{{ painting.year }}</td>
          <td>{{ painting.on_display  }}</td>
          <td>
            <button @click="deletePainting(painting.id)">Törlés</button>
            <router-link  :to="'/paintings/' + painting.id + '/edit'">Szerkesztés</router-link>
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="painting.title">
          </td>
          <td>
            <input type="number" v-model="painting.year">
          </td>
          <td>
            <input type="checkbox" v-model="painting.on_display ">
          </td>
          <td>
            <button v-if="mod_new" @click="newPainting" :disabled="saving" >Új festmény</button>
            <button v-if="!mod_new" @click="savePainting" :disabled="saving" >Mentés</button>
            <button v-if="!mod_new" @click="cancelPainting" :disabled="saving" >Mégse</button>
          </td>
        </tr>
      </tbody>
    </table>
    <form action=""></form>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      mod_new: true, 
      saving: false,
      painting: {
        id: null,
        title: '',
        year: '',
        on_display : false
      },
      paintings: []
    }
  },
  methods: {
    async loadData () {
     let Response = await fetch('http://127.0.0.1:8000/api/paintings')
     let data = await Response.json()
     this.paintings = data
    },
    //oh loll
    async deletePainting(id) {
      let Response = await fetch(`http://127.0.0.1:8000/api/paintings/${id}`, {
        method: 'DELETE'
      })
      console.log(Response)
      await this.loadData()
    },
    //ihh oops
    async newPainting() {
      this.saving='disabled'
     await fetch('http://127.0.0.1:8000/api/paintings', {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(this.painting) 
     })
     await this.loadData()
     this.saving=false
     this.resetForm()
    },
    resetForm() {
      this.painting = {
        id: null,
        title: '',
        year: '',
        on_display : false
      }
      this.mod_new = true
    },
    async savePainting() {
      this.saving='disabled'
     await fetch(`http://127.0.0.1:8000/api/paintings/${this.painting.id}`, {
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(this.painting) 
     })
     await this.loadData()
     this.saving=false
     this.resetForm()
    },
    async editPainting(id) {
      let Response = await fetch(`http://127.0.0.1:8000/api/paintings/${id}`)
      let data = await Response.json()
      this.painting = {...data};
      this.mod_new = false
    },
    cancelPainting () {
      this.resetForm()
    },
  },
  mounted() {
    this.loadData()
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