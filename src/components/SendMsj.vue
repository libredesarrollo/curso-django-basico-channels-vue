<template>
    <div>
        {{msj}}
    </div>
</template>

<script>
export default {

    data() {
        return {
            msj:"Conectando..."
        }
    },

    mounted() {
        var url = 'ws://127.0.0.1:8000/ws/alert/room/3?Token_cf73616455a60301c8de852010634d12c134b0c7'
        var alertSocket = new WebSocket(url)
        const my = this
        alertSocket.onopen = function () {
            //chatSocket.send(JSON.stringify({'message' : "Hola Mundo desde el cliente"}))
            console.log("WS abierto")
            my.msj="Conectado!"
        }
        alertSocket.onmessage = function (data) {
           console.log(data)
        }
    },
}
</script>