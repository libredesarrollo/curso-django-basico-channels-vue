<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <input
            type="text"
            v-model="username"
            class="form-control"
            placeholder="Usuario"
          />
          <input
            type="password"
            v-model="password"
            class="form-control mt-3"
            placeholder="Contraseña"
          />

        <button class="btn btn-success btn-sm mt-3 float-right" @click="enviar">Enviar</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

const axios = require('axios')
import { VueCookieNext } from 'vue-cookie-next'

export default {
    data() {
        return {
            username:"admin",
            password:"PepeLePew7"
        }
    },
    methods: {
        enviar: function(){
            
            const data = {
                username: this.username.trim(),
                password: this.password.trim()
            }

            axios.post('http://127.0.0.1:8000/api/login',data)
                .then((res) => {
                    console.log(res)
                    this.$root.tokenAuth=res.data
                    VueCookieNext.setCookie('token',this.$root.tokenAuth)
                    console.log(this.$root.tokenAuth)
                })
                .catch(() => {
                    console.log("Error ")
                })

        }
    },
};
</script>