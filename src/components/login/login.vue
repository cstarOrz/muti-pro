<template>
<div>
<div class="login" v-if="!isLogin">
<p>
<input type="text" name="" v-model="loginName" >
</p>
<p>
<input type="password" name="" v-model="passWord">
</p>
<p>
<button @click="login()">login</button>
</p>
</div>
<div class="main" v-else>
<p>
<a href="./report.html" target="_blank">report</a>
</p>
<p>
<a href="./exam.html" target="_blank">exam</a>
</p>
<p>
<a href="./counter.html" target="_blank">counter</a>
</p>
<p>
<button @click="loginOut()">loginOut</button>
</p>
</div>
</div>
</template>

<script>
import "@/assets/normalize.css";
export default {
  name: "login",
  data() {
    return {
      loginName: "",
      passWord: "",
      isLogin: this.$store.getters["loginStore/isLogin"]
    };
  },
  methods: {
    login() {
      if (this.loginName && this.passWord) {
        this.$store
          .dispatch("loginStore/loginAction", {
            loginName: this.loginName,
            passWord: this.passWord
          })
          .then(res => {
            this.isLogin = this.$store.getters["loginStore/isLogin"];
          });
      } else {
        console.log("error");
      }
    },
    loginOut() {
      this.$store.dispatch("loginStore/loginOutAction").then(res => {
        this.resetFrom();
        this.isLogin = this.$store.getters["loginStore/isLogin"];
      });
    },
    resetFrom() {
      this.loginName = "";
      this.passWord = "";
    }
  }
};
</script>
<style  scoped>
p {
  text-align: center;
}
</style>
