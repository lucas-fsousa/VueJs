<template>
  <div>
    <h2>Descrição da pessoa: {{name}} </h2>
    <p>Estou trabalhando no momento.</p>
    <p>Utilizo as seguintes tecnologias: </p>
    <ul>
      <li>Javascript</li>
      <li>Php</li>
      <li>Python</li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: "Pessoa",
    data(){
      return {
        nome: "",

      }
    }
  }
</script>