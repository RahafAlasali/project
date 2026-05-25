import { createRouter, createWebHistory } from 'vue-router'

// Lazy-load views for better performance
const HomeView = () => import('@/views/index.vue')
const AboutView = () => import('@/views/about.vue')

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // ✅ Vite compatible
    routes,
})

export default router