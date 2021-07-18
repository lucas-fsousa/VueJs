<template>
  <div>
    <button type="button" @click="$emit('MudarImagem')">Trocar imagem de perfil</button>
  </div>
</template>

<script>
  export default {
    name: "MudaImagem", // Insert component name
    emits: ["MudarImagem"],
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>