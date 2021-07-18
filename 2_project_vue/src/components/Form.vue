<template>
  <div>
    <h2>Meu formulário</h2>
    <form action="" @submit="SendForm($event)">
      <div>
        <input type="text" v-model="name">
        <input type="text" v-model="email">
        <input type="submit" value="OK">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data(){
    return {
      name: "",
      email: ""
    }
  },
  components: {
  },
  methods: {
    SendForm(e){
      e.preventDefault();
      const name = this.name;
      const email = this.email;
      alert("Nome > "+name + " email > "+email);

      // AJAX

      // Inmserir no banco os dados
    }
  }
}
</script>

<style scoped>
input {
  background-color: #f8fc84;
  color: #ff1100;
}
</style>