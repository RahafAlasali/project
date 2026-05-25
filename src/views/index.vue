<template>
    <div>
        <about style="background: linear-gradient(160deg, #FFF5E6 0%, #FFE8D0 50%, #FFD0B0 100%)" />
        <gallary style="background: linear-gradient(160deg, #FFF5E6 0%, #FFE8D0 50%, #FFD0B0 100%)" />
        <Address style=" background-color: #3a3a3a; /* Light gray. Use #e0e0e0, #cccccc, or #808080 for darker shades */
 " />

    </div>
</template>

<script>
import about from '@/components/about.vue';
import gallary from '@/components/gallary.vue';
import Address from '@/components/address.vue';
export default {

    components: {
        about,
        gallary,
        Address
    }
}
</script>