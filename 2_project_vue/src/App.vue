<template>
  <div>
    <h1>Olá Mundo</h1>
    <PrimeiroComponente />
    <p>Isso é o que? {{testando}}</p>
  </div>
</template>
<script>
  import PrimeiroComponente from "./components/PrimeiroComponente.vue"
  export default {
    name: 'App',
    components: {
      PrimeiroComponente
    },
    data(){
      return {
        testando: "Teste"
      }
    }
  }
</script>