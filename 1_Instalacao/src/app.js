const MyNameApp = {
  data(){
    return {
      name: "João",
      idade: 19,
      input_name: ""
    }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      this.name = this.input_name;
    }
  }
}
Vue.createApp(MyNameApp).mount("#app");