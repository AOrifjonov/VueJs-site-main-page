<script>
import Navbar from './components/navbar/Navbar.vue'
import MainPage from './components/main/MainPage.vue'
import SecondSection from './components/main/SecondSection.vue'
export default {
  components: {
    Navbar,
    MainPage,
    SecondSection
  }
}
</script>

<template>
<Navbar />
<MainPage />
<SecondSection />
</template>

<style src="./assets/main.css"></style>
