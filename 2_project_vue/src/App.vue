<template>
  <div>
    <h1>Olá Mundo</h1>
    <PrimeiroComponente />
  </div>
</template>
<script>
  import PrimeiroComponente from "./components/PrimeiroComponente.vue"
  export default {
    name: 'App',
    components: {
      PrimeiroComponente
    }
  }
</script>