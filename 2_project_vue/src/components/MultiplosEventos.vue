<template>
  <div>
    <button @click="primeiro($event), segundo($event), terceiro($event)">Ativar Multiplos Eventos</button>
    <p>{{multiplos_eventos}}</p>
  </div>
</template>

<script>
  export default {
    name: "MultiplosEventos",
    data(){
      return {
        multiplos_eventos: ""
      }
    },
    methods: {
      primeiro(e){
        this.multiplos_eventos = "Primeiro evento OK!";
      },
      segundo(e){
        setTimeout(() => this.multiplos_eventos = "segundo EVENTO!", 1000);
      },
      terceiro(e){
        setTimeout(() => this.multiplos_eventos = "", 2000);
      }
    }
  }
</script>

<style scoped>
  div {
    margin: 3%;
  }
</style>