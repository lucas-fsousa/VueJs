<template>
  <div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Contato</a></li>
      <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
    </ul>
  </div>
</template>

<script>
 export default {
   name: "Header",
   props: ["esta_logado"],
   data(){
     return {

     }
   }
 }
</script>

<style scoped>
ul {
 list-style: none;
 display: flex;
 background-color: rgb(255, 230, 0);
}

li{
  margin-right: 10px;
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: #f508ae;
  transition: .5s;
}

a:hover {
  color: #08f5e9;;
}
</style>