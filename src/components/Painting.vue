<template>
    <div>
        <h1>Festmény {{ $route.params.id }}</h1>    
        <table>
            <tr>
                <td>Cím:</td>
                <td>{{ painting.title }}</td>
            </tr>
            <tr>
                <td>Év:</td>
                <td>{{ painting.year }}</td>
            </tr>
            <tr>
                <td>Kiállítva:</td>
                <td>{{ painting.on_display }}</td>
            </tr>
        </table>
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
        on_display: false
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
  },
  mounted() {
      this.loadData()
  }
}
</script>

<style>

</style>