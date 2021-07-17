<template>
  <div>
    <p v-if="esta_trabalhando"> Está trabalhando no momento.</p>
    <p v-else> Não está trabalhando no momento.</p>
    <p v-show="mostrar_email">Envie um e-mail para: {{email}}</p>
    <p>Para acessar o meu portifólio <a v-bind:href="meu_link" target="_blank">CLIQUE AQUI</a></p>
    <div style="text-align: center; background-color: #616171;">
      <Picture />
    </div>
  </div>
</template>
<script>
import Picture from "./Picture.vue";
  export default {
    name: "Info",
    components: {
      Picture
    },
    data(){
      return {
        esta_trabalhando: true,
        mostrar_email: true,
        email: "Fredericopietro@hotmail.com",
        meu_link: "http://google.com"
      }
    }
  }
</script>