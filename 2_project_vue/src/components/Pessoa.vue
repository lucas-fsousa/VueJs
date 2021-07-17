<template>
  <div>
    <h2>Descrição da pessoa: {{name}} </h2>
    <Info />
    <p>Utilizo as seguintes tecnologias: </p>
    <ul>
      <li>Javascript</li>
      <li>Php</li>
      <li>Python</li>
    </ul>

  </div>
</template>
<script>
import Info from "./Info.vue"
  export default {
    name: "Pessoa",
    components: {
      Info
    },
    data(){
      return {
        nome: "",

      }
    }
  }
</script>