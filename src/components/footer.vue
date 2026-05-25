<template>
    <footer class="bg-primary border-t border-gold/20 py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
            <div class="flex flex-col md:flex-row items-center justify-between gap-8">

                <!-- Logo + tagline -->
                <div class=" flex flex-col  items-center md:items-start gap-2">
                    <p class="text-2xl text-amber-700 font-sans "> Logo </p>
                    <p class="font-body text-sm text-cream/50 italic font-light">
                        From 3,600 meters above sea level
                    </p>
                </div>

                <!-- Links -->
                <nav class="flex flex-wrap justify-center gap-x-8 gap-y-3">
                    <a v-for="item in navLinks" :key="item.label" :href="item.href"
                        class="font-body text-sm font-medium text-cream/60 hover:text-amber-700 transition-colors duration-200">
                        {{ item.label }}
                    </a>
                </nav>

                <!-- Social -->
                <div class="flex items-center gap-4">
                    <!-- Instagram -->
                    <a href="#" aria-label="Saltena on Instagram"
                        class="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-amber-700 hover:border-amber-700/40 transition-colors duration-200">
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>

                    <!-- Facebook -->
                    <a href="#" aria-label="Saltena on Facebook"
                        class="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-amber-700 hover:border-amber-700/40 transition-colors duration-200">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>


export default {
    name: 'Footer',

    data() {
        return {
            navLinks: [
                { label: 'Our Story', href: '#story' },
                { label: 'The Menu', href: '#saltena' },
                { label: 'Reserve', href: '#reserve' },
                { label: 'Pickup', href: '#pickup' },
                { label: 'Privacy', href: '#' },
                { label: 'Terms', href: '#' },
            ]
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>