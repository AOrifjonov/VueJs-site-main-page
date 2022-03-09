<script>
import {states} from './store/store.js'
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
  },
  data() {
    return {
      states,
    }
  }
}
</script>

<template>
<div :class="states.day ? 'night' : 'day'">
  <Navbar />
  <MainPage />
  <SecondSection />
  <Sponsor />
  <Search/>
  <Footer />
</div>
</template>

<style src="./assets/main.css"></style>
