<template>
  <div>
    <p v-if="esta_trabalhando"> Está trabalhando no momento.</p>
    <p v-else> Não está trabalhando no momento.</p>
    <p v-show="mostrar_email">Envie um e-mail para: {{email}}</p>
  </div>
</template>
<script>

  export default {
    name: "Info",
    components: {
      
    },
    data(){
      return {
        esta_trabalhando: true,
        mostrar_email: true,
        email: "Fredericopietro@hotmail.com"
      }
    }
  }
</script>