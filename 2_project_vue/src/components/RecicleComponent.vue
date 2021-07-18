<template>
  <div>
    <button @click="ativar()">Clique aqui</button>
    <span v-show="ativou">ATIVADO!</span>
  </div>
</template>

<script>
  export default {
    name: "RecicleComponent",
    data(){
      return {
        ativou: false
      }
    },
    methods: {
      ativar(){
        this.ativou = !this.ativou;
      }
    }
  }
</script>

<style scoped>

</style>