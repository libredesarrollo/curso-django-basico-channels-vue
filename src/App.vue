<template>
  <div class="container">
    <div v-if="tokenAuth == ''">
      <Login />
    </div>
    <div v-else>
      <Logout />
    </div>

    <SendMsj />
  </div>
</template>

<script>
import SendMsj from "./components/SendMsj";
import Login from "./components/Login";
import Logout from "./components/Logout";

import { VueCookieNext } from "vue-cookie-next";

export default {
  mounted() {
    this.tokenAuth = VueCookieNext.getCookie("token");
    console.log(this.tokenAuth);
  },
  name: "App",
  components: {
    SendMsj,
    Login,
    Logout,
  },
  data() {
    return {
      tokenAuth: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
