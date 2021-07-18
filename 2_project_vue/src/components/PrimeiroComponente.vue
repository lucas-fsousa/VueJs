<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é: {{nome}}</p>
    <p>Profissão atual: {{profissao}}</p>
    <MultiplosEventos />
    <RecicleComponent />
  </div>
</template>
<script>
import MultiplosEventos from "./MultiplosEventos.vue"
import RecicleComponent from "./RecicleComponent.vue"
export default {
  name: "PrimeiroComponente",
  components: {
    MultiplosEventos,
    RecicleComponent
  },
  data(){
    return {
      nome: "Lucas",
      profissao: "Programador"
    }
  }
}
</script>
