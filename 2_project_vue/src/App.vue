<template>
  <div> <!-- COMPONENTES UTILIZADOS NO TEMPLATE -->
    <h1>Olá Mundo</h1>
    <p>Isso é o que? {{testando}}</p>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
    
  </div>
</template>
<script>
/*Passo 1: Importar o componente*/
  import PrimeiroComponente from "./components/PrimeiroComponente.vue"
  import LifeCycle from "./components/LifeCycle.vue"
  import Pessoa from "./components/Pessoa.vue"

  export default {
    name: 'App',
    components: {
      /*Passo 2: Declarar o componente na área de componentes*/
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    },
    data(){
      return {
        testando: "Teste"
      }
    }
  }
</script>