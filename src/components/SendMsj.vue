<template>
  <div>
    <textarea v-model="content" class="form-control mt-2"> </textarea>

    <button @click="sendMsj" class="btn btn-success btn-sm mt-2">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msj: "Conectando...",
      content: "",
      alertSocket: Object,
    };
  },
  mounted() {
    setTimeout(this.ws, 1000);
  },
  methods: {
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