<template>
    <section ref="sectionRef" class="relative overflow-hidden"
        style="background: linear-gradient(160deg, #FFF5E6 0%, #FFE8D0 50%, #FFD0B0 100%)">

        <!-- Noise texture -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.035] noise-bg" aria-hidden="true" />

        <div class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">

            <!-- Top: Glaze close-up with text -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">

                <!-- Left: Large text -->
                <div class="reveal-up stagger-children order-2 lg:order-1">
                    <span
                        class="inline-block text-apricot text-xs font-sans font-medium tracking-[0.2em] uppercase mb-6">
                        Hand-crafted since dawn
                    </span>
                    <h2
                        class="font-display text-4xl sm:text-5xl lg:text-6xl text-text-dark italic font-light leading-[1.05] mb-8">
                        The glaze isn't a topping.<br />
                        <span class="text-berry">It's the whole point.</span>
                    </h2>
                    <p class="text-mid text-lg leading-relaxed font-sans font-light max-w-md">
                        We start mixing at 3 a.m. so the first tray hits the case by 6. Every glaze is made in-house —
                        the vanilla bean, the salted caramel, the blood orange, the dark chocolate that pools in every
                        ridge. Nothing comes from a bag.
                    </p>

                    <!-- Stats row -->
                    <div class="flex gap-10 mt-12 pt-10 border-t border-apricot/20 reveal-up">
                        <div>
                            <div class="font-display text-4xl text-berry italic font-light">3 AM</div>
                            <div class="text-light text-sm mt-1 font-sans">First mix starts</div>
                        </div>
                        <div>
                            <div class="font-display text-4xl text-berry italic font-light">6 AM</div>
                            <div class="text-light text-sm mt-1 font-sans">First tray ready</div>
                        </div>
                        <div>
                            <div class="font-display text-4xl text-berry italic font-light">12 PM</div>
                            <div class="text-light text-sm mt-1 font-sans">Sold out. Daily.</div>
                        </div>
                    </div>
                </div>

                <!-- Right: Glaze close-up image -->
                <div class="order-1 lg:order-2 reveal-up">
                    <div ref="glazeRef"
                        class="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(139,34,82,0.2)] animate-glaze-drip"
                        style="aspect-ratio: 4/5;">

                        <!-- Image: Full height/width with object-cover -->
                        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                            alt="" class="absolute inset-0 w-full h-full object-cover">

                        <!-- Warm overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-berry/20 to-transparent" />

                        <!-- Floating label (unchanged, stays above image) -->
                        <div class="absolute bottom-8 left-8 right-8 z-10">
                            <div class="bg-cream/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                                <p class="font-display italic text-text-dark text-lg font-light">
                                    "The stretch that makes you reach for a napkin before you even take a bite."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ticker strip -->
            <div class="overflow-hidden py-6 border-y border-apricot/20 -mx-6 md:-mx-12 lg:-mx-20 px-0 reveal-up">
                <div class="flex w-max animate-marquee">
                    <div v-for="i in 2" :key="i" class="flex items-center gap-12 px-8">
                        <span v-for="(item, j) in tickerItems" :key="j"
                            class="text-sm font-sans font-medium tracking-widest uppercase whitespace-nowrap"
                            :class="item === '✦' ? 'text-gold' : 'text-mid'">
                            {{ item }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: 'SensorySection',

    data() {
        return {
            tickerItems: [
                'Original Glazed', '✦', 'Maple Bacon', '✦', 'Blood Orange',
                '✦', 'Dark Chocolate', '✦', 'Salted Caramel', '✦',
                'Vanilla Bean', '✦', 'Raspberry Rose', '✦', 'Brown Butter',
                '✦', 'Pistachio Cream', '✦'
            ],
            observer: null
        }
    },
    mounted() {
        this.initObserver()
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    methods: {
        initObserver() {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animating')
                            this.observer.unobserve(entry.target)
                        }
                    })
                },
                { threshold: 0.15 }
            )

            const elements = this.$refs.sectionRef?.querySelectorAll('.reveal-up')
            if (elements) {
                elements.forEach((el) => this.observer.observe(el))
            }
        }
    }
}
</script>

<style scoped>
/* Reveal animation for scroll-triggered elements */
.reveal-up {
    opacity: 0;
    transform: translateY(2rem);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-up.animating {
    opacity: 1;
    transform: translateY(0);
}

/* Stagger children animation */
.stagger-children>* {
    opacity: 0;
    transform: translateY(1rem);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.stagger-children.animating>*:nth-child(1) {
    transition-delay: 0.1s;
}

.stagger-children.animating>*:nth-child(2) {
    transition-delay: 0.2s;
}

.stagger-children.animating>*:nth-child(3) {
    transition-delay: 0.3s;
}

.stagger-children.animating>*:nth-child(4) {
    transition-delay: 0.4s;
}

.stagger-children.animating>* {
    opacity: 1;
    transform: translateY(0);
}

/* Noise texture background */
.noise-bg {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 256px 256px;
}

/* Glaze drip animation */
@keyframes glazeDrip {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-4px) scale(1.02);
    }
}

.animate-glaze-drip {
    animation: glazeDrip 6s ease-in-out infinite;
}

/* Marquee ticker animation */
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 30s linear infinite;
}
</style>