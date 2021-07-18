<template>
  <div> <!-- COMPONENTES UTILIZADOS NO TEMPLATE -->
    <Header />
    <h1>Olá Mundo</h1>
    <p>Isso é o que? {{testando}}</p>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
    <Form />
  </div>
</template>
<script>
/*Passo 1: Importar o componente*/
  import PrimeiroComponente from "./components/PrimeiroComponente.vue"
  import LifeCycle from "./components/LifeCycle.vue"
  import Pessoa from "./components/Pessoa.vue"
  import Header from "./components/Header.vue"
  import Form from "./components/Form.vue"

  export default {
    name: 'App',
    components: {
      /*Passo 2: Declarar o componente na área de componentes*/
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header,
      Form
    },
    data(){
      return {
        testando: "Teste"
      }
    }
  }
</script>

<style>

body{
  margin: 2%;
  padding: 1%;
}
a {
  color: red;
}
</style>