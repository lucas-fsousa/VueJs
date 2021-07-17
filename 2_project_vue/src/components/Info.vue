<template>
  <div>
    <p v-if="esta_trabalhando"> Está trabalhando no momento.</p>
    <p v-else> Não está trabalhando no momento.</p>
    <p v-show="mostrar_email">Envie um e-mail para: {{email}}</p>
    <button @click="showEmail()" id="btn_show">{{text_btn}}</button>
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
        mostrar_email: false,
        email: "Fredericopietro@hotmail.com",
        meu_link: "http://google.com",
        text_btn: "Mostrar e-mail"
      }
    },
    methods: {
      showEmail(){
        this.mostrar_email = !this.mostrar_email;
        if(!this.mostrar_email){
          this.text_btn = "Mostar e-mail";
        }else{
          this.text_btn = "Ocultar e-mail";
        }
      }
    }
  }
</script>

<style >
#btn_show {
  color: rgb(255, 251, 0);
  background-color: #0000;
  border-radius: 10%;
  border: 3px solid #411;
  height: 35px; 
  padding-left: 5px;
  padding-right: 5px;

}
</style>