<template>
  <div>
    <img :src="avatar" :alt="description" style="width: 100px; height: 100px">
    <MudarImagem @mudar-imagem="TrocaImagem()"/>
  </div>
</template>
<script>
import MudarImagem from "./MudaImagem.vue"

  export default {
    name: "Picture",
    components: {
      MudarImagem
    },
    data(){
      return {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        description: "Lucas Sousa",
        n2: true
      }
    },
    methods: {
      TrocaImagem(){
        if(this.n2){
          this.avatar = "https://tecnoblog.net/wp-content/uploads/2020/05/avatar-de-facebook-de-mark-zuckerberg-e1589902366337.png";
          this.n2 = false;
        }else{
          this.avatar = "https://www.w3schools.com/howto/img_avatar.png";
          this.n2 = true;
        }
      }
    }
  }

</script>