<template>
  <div>
    <h2>Descrição da pessoa: {{name}} </h2>
    <Info :email="email"/>
    <p>Utilizo as seguintes tecnologias para back-end: </p>
    <ul>
      <!--FOREACH utilizando o VUE.JS para uma lista-->
      <li v-for="(tecnology, Index) in backend_tecnologies" v-bind:key="Index">{{tecnology}}</li>
    </ul>
    <p>Utilizo as seguintes tecnologias para Font-End: </p>
    <ul>
      <!--FOREACH utilizando o VUE.JS para uma lista de arrays-->
    <li v-for="tecnology in frontend_tecnologies" :key="tecnology.id">{{tecnology.language}}</li>  
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
        backend_tecnologies: ['Javascript', 'Php', 'Python', 'Csharp'],
        frontend_tecnologies: [
          {id: 1, language: 'HTML'}, 
          {id: 2, language: 'CSS'}, 
          {id: 3, language: 'VUE'}
          ],
          email: "lucasggTS2@gmail.com"
      }
    }
  }
</script>