<template>
  <div>
    <h3>Meu nome é: {{nome}}</h3>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        nome: "Ainda não sei o nome"
      }
    },
    created(){
      setTimeout(() =>{
        this.nome = "José TENSO"
      }, 2000);
    },
    mounted(){
      setTimeout(() =>{
        this.nome = "José menos tenso"
      }, 4000);
    }
  }

</script>