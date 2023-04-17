import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", exact: true, redirect: "/clients" },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
});

export default router;