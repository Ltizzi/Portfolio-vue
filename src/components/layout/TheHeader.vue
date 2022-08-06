<template lang="">
  <section class="about" id="home">
    <header-banner></header-banner>
    <span id="about"></span>
    <header-about></header-about>
  </section>
</template>
<script>
  import HeaderBanner from "../header/HeaderBanner.vue";
  import HeaderAbout from "../header/HeaderAbout.vue";
  export default {
    components: {
      HeaderBanner,
      HeaderAbout,
    },
    data() {
      return {};
    },
  };
</script>
<style>
  .about {
    background: url("../../assets/back.jpeg");
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .about__pic {
      height: 200px;
      width: 200px;
      margin-top: 2rem;
      margin-left: 2rem;
    }

    .about__title {
      font-size: 1.7rem;
    }

    .about__header-bajada {
      width: 100%;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 1280px) {
    .about__header {
      width: 100%;
      justify-content: center;
    }
    .about__header-text {
      font-size: 0.9rem;
      width: 40%;
    }
  }
</style>
