<script>
import {states} from '../../store/store.js'
export default {
  name: "Sponsor",
  data() {
    return {
      states,
      gold: [
        { url: "https://sponsors.vuejs.org/images/vuemastery.avif" },
        { url: "https://sponsors.vuejs.org/images/laravel.avif" },
        { url: "https://sponsors.vuejs.org/images/html_burger.avif" },
        { url: "https://sponsors.vuejs.org/images/neds.avif" },
        { url: "https://sponsors.vuejs.org/images/icons_8.avif" },
        { url: "https://sponsors.vuejs.org/images/tidelift.avif" },
        { url: "https://sponsors.vuejs.org/images/firestick_tricks.avif" },
        { url: "https://sponsors.vuejs.org/images/intygrate.avif" },
        { url: "https://sponsors.vuejs.org/images/bacancy_technology.avif" },
        { url: "https://sponsors.vuejs.org/images/y8.avif" },
        { url: "https://sponsors.vuejs.org/images/devexpress.avif" },
        { url: "https://sponsors.vuejs.org/images/fastcoding_inc.svg" },
        { url: 'https://sponsors.vuejs.org/images/storekit.avif' },
        { url: 'https://sponsors.vuejs.org/images/vpsserver_com.avif' },
        { url: 'https://sponsors.vuejs.org/images/line_corporation.avif' },
        { url: 'https://sponsors.vuejs.org/images/plaid__inc_.svg' }
      ],
    };
  },
};
</script>

<template>
  <div class="max-sm-w">
    <!-- Platinum sponsors -->
    <div>
      <h4>Platinum Sponsors</h4>
      <div class="platinum row mt-4">
        <div :class="states.day ? 'night col' : 'col'">
          <img
            src="https://sponsors.vuejs.org/images/vueschool.avif"
            alt="photo"
          />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img
            src="https://sponsors.vuejs.org/images/vehikl.avif"
            alt="photo"
          />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img
            src="https://sponsors.vuejs.org/images/passionate_people.png"
            alt="photo"
          />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img
            src="https://sponsors.vuejs.org/images/storyblok.avif"
            alt="photo"
          />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img src="https://sponsors.vuejs.org/images/ionic.avif" alt="photo" />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img src="https://sponsors.vuejs.org/images/nuxt.avif" alt="photo" />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img
            src="https://sponsors.vuejs.org/images/refurbed.avif"
            alt="photo"
          />
        </div>
        <div :class="states.day ? 'night col' : 'col'">
          <img
            src="https://sponsors.vuejs.org/images/buttercms.svg"
            alt="photo"
          />
        </div>
        <div :class="states.day ? 'night col' : 'col'">Your logo</div>
      </div>
    </div>

    <!-- Gold sponsors -->
    <div class="mt-5">
      <h4>Gold sponsors</h4>
      <div class="gold row mt-4">
            <div v-for="img in gold" :key="img" :class="states.day ? 'night col' : 'col'">
                <img :src="img.url" alt="photo">
            </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.platinum .col img {
  width: 200px;
}
.platinum .col {
  background: #f8f8f8;
  margin: 2px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b9b9b9;
  border-radius: 5px;
}

.gold .col {
  background: #f5f4f4;
  margin: 2px;
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
  color: #b9b9b9;
  border-radius: 5px;
  width: 180px;
}

.gold .col img {
  width: 150px;
}
</style>