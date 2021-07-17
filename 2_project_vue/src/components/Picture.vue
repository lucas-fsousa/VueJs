<template>
  <div>
    <img :src="avatar" :alt="description" style="width: 100px; height: 100px">
  </div>
</template>
<script>
  export default {
    name: "Picture",
    data(){
      return {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        description: "Lucas Sousa"
      }
    }
  }

</script>