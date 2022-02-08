<template>
    <div>
        <h1>Festmény {{ $route.params.id }}</h1>    
        <table>
            <tr>
                <td>Cím:</td>
                <td><input type="text" v-model="painting.title" /></td>
            </tr>
            <tr>
                <td>Év:</td>
                <td><input type="number" v-model="painting.year" /></td>
            </tr>
            <tr>
                <td>Kiállítva:</td>
                <td><input type="checkbox" v-model="painting.on_display" /></td>
            </tr>
        </table>
        <button @click="saveData">Mentés</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      painting: {
        id: null,
        title: '',
        year: '',
        on_display: ''
      },
    }
  },
  methods: {
    async loadData() {
      const id = this.$route.params.id
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
      let data = await Response.json()
      this.painting = {...data};
    },
    async saveData() {
     await fetch(`http://127.0.0.1:8000/api/statues/${this.painting.id}`, {
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(this.painting) 
     })
     //this.$router.push('/statues')
     this.$router.go(-1)
    }
  },
  mounted() {
      this.loadData()
  }
}
</script>

<style>

</style>