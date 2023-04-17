import { createRouter, createWebHistory } from "vue-router";

import Clients from "../components/Clients.vue"

const routes = [
    {
        path: "/clients",
        name: "clients",
        component: Clients
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
});

export default router;