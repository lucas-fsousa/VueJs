<template>
  <div>
    <h2>Descrição da pessoa: {{name}} </h2>
    <Info />
  </div>
</template>
<script>
  import Info from "./Info.vue"
  export default {
    name: "Info",
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