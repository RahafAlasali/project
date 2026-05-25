<template>
    <section
        class="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-plum">

        <!-- Background Image -->
        <div class="absolute inset-0 z-0"
            style="background-image: url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop'); background-size: cover; background-position: center;"
            aria-hidden="true" />

        <!-- Grain texture overlay -->
        <div class="grain-overlay" aria-hidden="true" />

        <!-- Gradient overlays — layered for depth -->
        <div class="absolute  inset-0 z-[3]  bg-black/50" aria-hidden="true" />

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

            <!-- Eyebrow -->
            <div class="animate-sub flex items-center gap-3 mb-8">
                <div class="w-8 h-px bg-clay/80" />
                <span class="story-tag text-clay/90 tracking-widest-xl">
                    Rising since 4 a.m. · Delivered by noon
                </span>
                <div class="w-8 h-px bg-clay/80" />
            </div>

            <!-- Headline -->
            <h1 class="animate-headline font-serif text-cream leading-none tracking-tight mb-8"
                style="font-size: clamp(2.8rem, 8vw, 6rem); line-height: 0.92;">
                Baked here.<br />
                <em class="not-italic" style="color: #F5E6D3; font-style: italic;">
                    Delivered to your door.
                </em>
            </h1>

            <!-- Sub -->
            <p
                class="animate-sub text-cream/70 font-sans font-light text-base md:text-lg max-w-md leading-relaxed mb-10">
                Heritage grain sourdough, cardamom brioche, and seasonal pastries — baked in a stone oven thirty miles
                from the field.
            </p>

            <!-- CTAs -->
            <div class="animate-cta flex flex-col sm:flex-row gap-4 items-center">
                <a href="#tasting"
                    class="bg-amber-600 hover:bg-amber-700  text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase">
                    Reserve Your Tasting
                </a>
                <a href="#menu"
                    class="btn-outline  px-8 py-4 rounded-md text-sm font-semibold tracking-wider uppercase border-cream/40 text-cream/80 hover:bg-cream/10 hover:text-cream hover:border-cream"
                    style="border-color: rgba(255,248,240,0.35);">
                    Browse the Menu
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection'
    // Pure presentation component — no logic/actions
}
</script>

<style scoped>
/* Custom animations for entrance effects */
.animate-sub {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(1rem);
}

.animate-headline {
    animation: fadeInUp 1s ease-out forwards;
    opacity: 0;
    transform: translateY(1.5rem);
}

.animate-cta {
    animation: fadeInUp 1.2s ease-out forwards;
    opacity: 0;
    transform: translateY(1rem);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Grain texture overlay using SVG noise */
.grain-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.06;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Button styles */
.btn-primary {
    background: #F5E6D3;
    color: #1a1a1a;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background: #fff;
    transform: translateY(-1px);
}

.btn-outline {
    border-width: 1px;
    transition: all 0.2s ease;
}
</style>