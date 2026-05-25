<script>
import Footer from '@/components/footer.vue';
import Header from '@/components/header.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  components: {
    Footer,
    Header,
    HeroSection
  }
}
</script>
<template>

  <Header />
  <HeroSection />
  <router-view />
  <Footer />
</template>