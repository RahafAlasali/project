<template>
    <div>
        <div
            class="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <!-- Map — takes 3 columns -->
            <div class="lg:col-span-3">
                <div
                    class="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[28px] bg-zinc-800 ring-1 ring-white/10 shadow-2xl shadow-black/40">

                    <!-- Embedded OpenStreetMap iframe -->
                    <iframe title="Lumen Gallery location"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0095%2C40.745%2C-74.0025%2C40.7495&layer=mapnik&marker=40.7473%2C-74.0060"
                        class="absolute inset-0 h-full w-full"
                        style="filter: grayscale(1) contrast(0.95) brightness(0.9);" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <!-- Map overlay with address pin -->
                    <div
                        class="absolute left-6 top-6 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-lg ring-1 ring-black/5">
                        <div class="flex items-center gap-2.5">
                            <div class="h-8 w-8 rounded-lg bg-zinc-900 grid place-items-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="1.75">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                    <circle cx="12" cy="9" r="2.5" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-[10px] font-semibold tracking-wide text-zinc-500 uppercase">You are
                                    here
                                </div>
                                <div class="text-xs font-medium text-zinc-900 leading-tight">West Chelsea • Gallery
                                    District
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Directions button -->
                    <div class="absolute right-6 bottom-6">
                        <a href="https://maps.google.com/?q=526+W+26th+St,+New+York,+NY+10001" target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 px-4 h-11 rounded-full bg-white text-zinc-900 text-[13px] font-medium shadow-lg shadow-black/20 hover:bg-zinc-50 transition-all hover:-translate-y-px">
                            Open in Maps
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M7 17L17 7M17 7H9M17 7v8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="mt-4 flex items-center gap-6 text-xs text-zinc-500 px-2">
                    <span>3 min walk from 23rd St • C/E trains</span>
                    <span class="h-1 w-1 rounded-full bg-zinc-700"></span>
                    <span>Wheelchair accessible • Elevator to 3rd floor</span>
                </div>
            </div>

            <!-- Info panel — takes 2 columns, NEXT TO MAP -->
            <div class="lg:col-span-2">
                <div class="rounded-[28px] bg-cyan-950/50 border border-white/10 p-8 lg:p-10 backdrop-blur">

                    <!-- Address -->
                    <div class="pb-8 border-b border-white/10">
                        <div class="text-[11px] font-semibold tracking-[0.14em] text-zinc-500 uppercase mb-4">
                            Address & Contact
                        </div>
                        <address class="not-italic space-y-1">
                            <div class="text-[22px] font-medium leading-tight text-white tracking-tight">
                                526 West 26th Street
                            </div>
                            <div class="text-[22px] font-medium leading-tight text-white tracking-tight">
                                Floor 3 • New York, NY 10001
                            </div>
                            <div class="pt-3 text-[13px] text-zinc-400 space-y-1.5">
                                <div class="flex items-center gap-2">
                                    <span class="text-zinc-500">T</span>
                                    <a href="tel:+12125550194" class="hover:text-white transition-colors">+1 (212)
                                        555-0194</a>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-zinc-500">E</span>
                                    <a href="mailto:visit@lumen.gallery"
                                        class="hover:text-white transition-colors">visit@lumen.gallery</a>
                                </div>
                            </div>
                        </address>
                    </div>

                    <!-- Open hours -->
                    <div class="py-8 border-b border-white/10">
                        <div class="text-[11px] font-semibold tracking-[0.14em] text-zinc-500 uppercase mb-5">
                            Open Hours
                        </div>
                        <div class="space-y-3 text-[13px]">
                            <div
                                class="flex items-baseline justify-between py-2.5 px-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors">
                                <span class="text-zinc-300 font-medium">Tuesday – Saturday</span>
                                <span class="text-white font-medium tabular-nums">11:00 — 19:00</span>
                            </div>
                            <div
                                class="flex items-baseline justify-between py-2.5 px-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors">
                                <span class="text-zinc-300 font-medium">Sunday</span>
                                <span class="text-white font-medium tabular-nums">12:00 — 18:00</span>
                            </div>
                            <div
                                class="flex items-baseline justify-between py-2.5 px-3 -mx-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                                <span class="text-violet-200 font-medium">Monday</span>
                                <span class="text-violet-100 font-medium">Closed • By appointment</span>
                            </div>
                        </div>
                        <div class="mt-4 flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" class="mt-0.5 flex-shrink-0">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" stroke-linecap="round" />
                            </svg>
                            <span>Last entry 30 minutes before closing. Free admission, donations welcome.</span>
                        </div>
                    </div>

                    <!-- Quick info -->
                    <div class="pt-8 space-y-4 text-xs text-zinc-400 leading-relaxed">
                        <div class="flex gap-3">
                            <span class="text-zinc-500 mt-0.5">→</span>
                            <span>Guided tours Saturdays at 2PM, no booking needed (max 12 people)</span>
                        </div>
                        <div class="flex gap-3">
                            <span class="text-zinc-500 mt-0.5">→</span>
                            <span>Photography allowed without flash. Sketching encouraged.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<!-- Optional: Scoped styles if you need extra CSS beyond Tailwind -->
<style scoped>
/* Example: smoother iframe loading */
iframe {
    will-change: filter;
    transition: opacity 0.3s ease;
}
</style>