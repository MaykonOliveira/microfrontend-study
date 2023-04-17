import { createRouter, createWebHistory } from "vue-router";

import Business from "../components/Business.vue"

const routes = [
    {
        path: "/business",
        name: "business",
        component: Business
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
});

export default router;