<script>
import Navbar from './components/navbar/Navbar.vue'
import MainPage from './components/main/MainPage.vue'
import SecondSection from './components/main/SecondSection.vue'
import Sponsor from './components/main/Sponsor.vue'
import Footer from './components/main/Footer.vue'
import Search from './components/main/modal/Search.vue'
export default {
  components: {
    Navbar,
    MainPage,
    SecondSection,
    Sponsor,
    Footer,
    Search,
  }
}
</script>

<template>
<Navbar />
<MainPage />
<SecondSection />
<Sponsor />
<Search/>
<Footer />
</template>

<style src="./assets/main.css"></style>
