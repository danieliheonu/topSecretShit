import { createRouter, createWebHistory } from "vue-router";
import Section from "../views/Home.vue";
import LivePreview from "../views/LivePreview.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Section
    },
    {
        path: "/live",
        name: "Live",
        component: LivePreview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;