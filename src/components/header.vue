<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="scrolled ? 'bg-plum/95 backdrop-blur-md border-b border-plum-light/30 py-3' : 'bg-transparent py-6'">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <!-- Logo -->
            <router-link :to="{ name: 'home' }"
                class=" text-cream/80  text-2xl font-semibold  tracking-widest uppercase hover:text-cream">Logo</router-link>
            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8 text-cream/80">
                <router-link :to="{ name: 'home' }"
                    class="nav-link text-xl font-semibold  tracking-widest uppercase hover:text-cream">Home</router-link>
                <router-link :to="{ name: 'home' }"
                    class="nav-link text-xl font-semibold  tracking-widest uppercase hover:text-cream">Our
                    Story</router-link>
                <router-link :to="{ name: 'home' }"
                    class="nav-link text-xl font-semibold  tracking-widest uppercase hover:text-cream">Menu</router-link>
                <router-link :to="{ name: 'home' }"
                    class="nav-link text-xl font-semibold  tracking-widest uppercase hover:text-cream">Home</router-link>

            </nav>

            <!-- Mobile hamburger -->
            <button class="md:hidden text-cream p-2" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <template v-if="menuOpen">
                        <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                        <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                    </template>
                    <template v-else>
                        <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                        <line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" />
                    </template>
                </svg>
            </button>
        </div>

        <!-- Mobile menu -->
        <div v-if="menuOpen" class="md:hidden bg-plum/98 backdrop-blur-md px-6 pb-8 pt-4 border-t border-plum-light/20">
            <nav class="flex flex-col gap-5">
                <a href="#stories" class="text-cream/80 text-sm font-medium tracking-widest uppercase"
                    @click="menuOpen = false">Our Story</a>
                <a href="#menu" class="text-cream/80 text-sm font-medium tracking-widest uppercase"
                    @click="menuOpen = false">Menu</a>
                <a href="#tasting" class="text-cream/80 text-sm font-medium tracking-widest uppercase"
                    @click="menuOpen = false">Tastings</a>
                <a href="#tasting"
                    class="btn-primary px-5 py-3 rounded-sm text-xs font-semibold tracking-wider uppercase text-center mt-2"
                    @click="menuOpen = false">Reserve Your Tasting</a>
            </nav>
        </div>
    </header>
</template>

<script>


export default {
    name: 'Header',

    data() {
        return {
            scrolled: false,
            menuOpen: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 60
        }
    }
}
</script>