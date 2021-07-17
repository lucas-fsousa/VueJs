<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é: {{nome}}</p>
    <p>Profissão atual: {{profissao}}</p>
  </div>
</template>
<script>
export default {
  name: "PrimeiroComponente",
  data(){
    return {
      nome: "Lucas",
      profissao: "Programador"
    }
  }
}
</script>
