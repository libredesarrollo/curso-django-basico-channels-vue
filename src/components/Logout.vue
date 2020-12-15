<template>
    <div>
        <button class="btn btn-primary" @click="closeSession">Cerrar Sesión</button>
    </div>
</template>
<script>
export default {
    methods: {
        closeSession: function(){
            this.$root.tokenAuth = ""
        }
    }
}
</script>