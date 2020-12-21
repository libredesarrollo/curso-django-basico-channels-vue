<template>
  <div>

    <div class="card mt-2" v-for="m in msjs" v-bind:key="m.id">

      <div class="card-body">
        <h5 class="my-0">{{m.content}}</h5>
        <p class="text-muted text-right my-0">{{m.create_at}}</p>
      </div>

    </div>

    <textarea v-model="content" class="form-control mt-2"> </textarea>

    <button @click="sendMsj" class="btn btn-success btn-sm mt-2">Enviar</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      msj: "Conectando...",
      content: "",
      alertSocket: Object,
      msjs: []
    };
  },
  mounted() {
    setTimeout(this.ws, 1000);
    setTimeout(this.getAlerts, 1000);
  },
  methods: {
    getAlerts: function () {
      axios
        .get(this.$root.urlApi + "alerts", {
          headers: {
            Authorization: this.$root.tokenAuthRest,
          },
        })
        .then((res) => {
          this.msjs = res.data.reverse()
        })
        .catch((e) => {
          console.log(e);
        });
    },

    sendMsj: function () {
      if (this.content.trim() == "") return;

      this.alertSocket.send(JSON.stringify({ message: this.content.trim() }));
    },
    ws: function () {
      this.alertSocket = new WebSocket(
        "ws://127.0.0.1:8000/ws/alert/room/3?" + this.$root.tokenAuth
      );

      const my = this;
      this.alertSocket.onopen = function () {
        //chatSocket.send(JSON.stringify({'message' : "Hola Mundo desde el cliente"}))
        console.log("WS abierto " + my.$root.tokenAuth);
        my.msj = "Conectado!";
      };
      this.alertSocket.onmessage = function (data) {
        console.log(data);
      };
    },
  },
};
</script>