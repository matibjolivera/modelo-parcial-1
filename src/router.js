import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioPago from "./components/FormularioPago";
import Choice from "./components/Choice";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes: [
        {path: '/', redirect: '/formulario'},
        {path: '/formulario', component: FormularioPago},
        {path: '/choice', component: Choice},
    ]
})