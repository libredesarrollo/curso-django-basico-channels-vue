import { createApp } from 'vue'
import App from './App.vue'

import { VueCookieNext } from 'vue-cookie-next'

const bootstrap = require('bootstrap')
bootstrap

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(VueCookieNext)

app.mount('#app')
