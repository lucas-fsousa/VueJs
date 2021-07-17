const MyNameApp = {
  data(){
    return {
      name: "João",
      idade: 19
    }
  }
}
Vue.createApp(MyNameApp).mount("#app");