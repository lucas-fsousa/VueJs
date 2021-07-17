<template>
  <div> <!-- COMPONENTES UTILIZADOS NO TEMPLATE -->
    <h1>Olá Mundo</h1>
    <PrimeiroComponente />
    <LifeCycle />
    <p>Isso é o que? {{testando}}</p>
  </div>
</template>
<script>
/*Passo 1: Importar o componente*/
  import PrimeiroComponente from "./components/PrimeiroComponente.vue"
  import LifeCycle from "./components/LifeCycle.vue"
  
  export default {
    name: 'App',
    components: {
      /*Passo 2: Declarar o componente na área de componentes*/
      PrimeiroComponente,
      LifeCycle
    },
    data(){
      return {
        testando: "Teste"
      }
    }
  }
</script>