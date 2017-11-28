<template>
  <div>
    {{text}}
  </div>
</template>

<script>
import storage from "@/common/storage";
export default {
  name: "Welcome",
  data() {
    return {
      text: ""
    };
  },
  mounted() {
    let userInfo = storage.getStorage("userInfo"),
      isLogin = storage.getStorage("isLogin") === "true";
    if (!isLogin) {
      window.location.href = "./index.html";
    } else {
      this.text = "欢迎" + userInfo.loginName;
    }
  }
};
</script>

<style scoped>

</style>