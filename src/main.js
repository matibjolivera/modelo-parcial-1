import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'moment'

import {router} from "./router";
import './form'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

