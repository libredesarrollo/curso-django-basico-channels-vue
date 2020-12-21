<template>
  <div class="container">
    <div v-if="tokenAuth == '' || tokenAuth == null">
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
    //console.log(this.tokenAuthRest);
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
      urlApi: "http://127.0.0.1:8000/api/"
    };
  },
  computed: {
    tokenAuthRest: function(){
      let res = this.tokenAuth.split("_")
      //console.log(res)
      return res[0]+" "+res[1]
    }
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
