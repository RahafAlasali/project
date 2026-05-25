<template>

    <section class="py-section-gap bg-surface-container-lowest">
        <div class=" max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <div class="mb-16">
                <h2
                    class="font-display text-4xl sm:text-5xl lg:text-6xl text-text-dark italic font-light leading-[1.05] mb-8">

                    <span class="text-berry">Gallary</span>
                </h2>
                <div class="h-1 w-12 bg-primary"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                <!-- Large Feature Item -->
                <div
                    class="md:col-span-8 md:row-span-2 gallery-item group relative overflow-hidden rounded-xl bg-surface-container">
                    <img alt="Interior design" class="w-full h-full object-cover transition-transform duration-700"
                        data-alt="A minimalist living space featuring a single designer chair in an empty room with large floor-to-ceiling windows. The soft morning light casts long, elegant shadows across the polished concrete floor. The aesthetic is extremely clean and airy, using a monochromatic white and gray palette with subtle emerald accents in a nearby plant."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS4-rISXtKPp_XOeKOPBhTHZUvi2H32qvIb6j92JRvnXZ0ROAaA6TokqCcHr4eLvL7veT8DC2lZ3i_FDTKj7ZIyDd9QIF01O3Ek3EBYPPOVOvvNY6ORGu3sfeDqmu1DcoB3PWYa2HRvzGBIoev0yZpz39fMX-_IOoEcvTKwR4Rw11bmYneR31qEDTRid7i9_4Gkq5pGTCohi1EB-HhOfffUvD9YxA6WkiXs9IM3GKh85HZglNw3c2XvfIYbbO_Ue2WRQbWsgpI2o0" />
                    <div
                        class="gallery-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-end p-8">
                        <div class="text-white">
                            <span class="font-label-sm text-label-sm tracking-widest uppercase">Interior</span>
                            <h3 class="font-headline-md text-headline-md">Structured Light</h3>
                        </div>
                    </div>
                </div>
                <!-- Vertical Item -->
                <div
                    class="md:col-span-4 md:row-span-3 gallery-item group relative overflow-hidden rounded-xl bg-surface-container">
                    <img alt="Fine art architecture"
                        class="w-full h-full object-cover transition-transform duration-700"
                        data-alt="A high-contrast black and white photograph of a spiral concrete staircase seen from directly above. The interlocking curves create a hypnotic mathematical pattern. The lighting is directional, creating deep charcoal shadows and bright white highlights, evoking a sense of architectural precision and professional confidence."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0KrN0PL6HKeCQ24Vh5CEGnGCHlksyyp4n6KhLM1ZiIX3u-C2grokeTZxtX3FGgYrVUAsidDYwu3heB3RjVga5upRDn1KqHSBMZ92MM9KFIPCK2pNSrz2fhIMH2Urb75FpIltiWOIQjKMbSfVCiMuh26hS1-8teYHdvHKwUd9mQBAsUKD0rRMRY07h10OQxRmVRXCUagiE66_iUlMdcXIrDFTr5qOkd6UNuBRqNHbjJHvTOw-bdyKqD-I1JF7jO5M6E5AOW73SUE4" />
                    <div
                        class="gallery-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-end p-8">
                        <div class="text-white">
                            <span class="font-label-sm text-label-sm tracking-widest uppercase">Perspective</span>
                            <h3 class="font-headline-md text-headline-md">Infinite Spiral</h3>
                        </div>
                    </div>
                </div>
                <!-- Wide Item -->
                <div
                    class="md:col-span-4 md:row-span-1 gallery-item group relative overflow-hidden rounded-xl bg-surface-container">
                    <img alt="Modern art" class="w-full h-full object-cover transition-transform duration-700"
                        data-alt="A detail shot of a modern glass facade reflecting a sunset sky with hues of soft orange and deep blue. The grid of the window frames creates a repetitive, disciplined pattern against the organic colors of the clouds. The atmosphere is serene and high-end, focusing on the intersection of nature and human construction."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7IpvSG9oO4O0t2d4H55CpBu0GUvR-gKMUjyL9iYma983XwIrzWY_VrjlFFgUPvFP0pIlGTCJojsB3lbSb0qKVeWDpq3RjoS0RWMIhLvuZUYEXmFw6rc62dKUkfHxA3ng-UjNzJMx-mvRHIfK6XsePP9B0liZrThKv0hX6u8FpuamU1I6jf_uz6Yk1YkkNi2Wy2y72MemH2loakCSH6Sqv7EjVHkk8XHRtrxmZYPkoBTscgm8td9SLcQvaBmlGbGN_0D6bk8m2wvU" />
                    <div
                        class="gallery-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-end p-6">
                        <div class="text-white">
                            <span class="font-label-sm text-label-sm tracking-widest uppercase">Abstract</span>
                            <h3 class="text-xl font-bold">Glass Horizon</h3>
                        </div>
                    </div>
                </div>
                <!-- Small Item -->
                <div
                    class="md:col-span-4 md:row-span-1 gallery-item group relative overflow-hidden rounded-xl bg-surface-container">
                    <img alt="Minimalist object" class="w-full h-full object-cover transition-transform duration-700"
                        data-alt="A single white porcelain vase sitting on a dark wooden plinth against a pale grey wall. A single ray of light hits the vase, emphasizing its smooth, matte texture. The overall composition is centered and balanced, representing a quiet confidence and sophisticated minimalism in a luxury studio setting."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqCTdIce6nDSzvAALt8Q-vo6XP-MEkgBUG7KRPDZb2KZO0I0CFh6gEhxl3VrhJD9dLiopOxfKu4C9OjwhvpEPBwkCbiuS1_bctlRwcKq7JnasJe7PpFgA9W1oOfwdC2a1n6Rysb_KqGxIxSnlFwspQHezZiFl3wO9k8X802bzELa62hxssYoeUzAc1MejwLcsO4xfhO7zfYtz2mMN4V26o8NYEy0_9h1yVFRfVggBrLdHKEpZyyDesKrG6eP5EWhdrSvV89cC9XUo" />
                    <div
                        class="gallery-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-end p-6">
                        <div class="text-white">
                            <span class="font-label-sm text-label-sm tracking-widest uppercase">Still Life</span>
                            <h3 class="text-xl font-bold">Silent Form</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>