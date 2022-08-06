<template lang="">
  <slot>
    <img :src="require(`@/assets/${foto}`)" :alt="fotoTxt" class="edu__icon" />
    <h4 class="edu__title">{{ title }}</h4>
    <h5 class="edu__subtitle">{{ institution }}</h5>
    <p class="edu__bajada">{{ timeRange }}</p>
    <p class="edu__bajada2">{{ about }}</p></slot
  >
</template>
<script>
  export default {
    inheritAttrs: false,
    props: ["foto", "fotoTxt", "title", "institution", "timeRange", "about"],
  };
</script>
<style scoped>
  .edu__item {
    border: 2px solid #bd93f9;
    padding: 2rem;
    width: 24%;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s;
  }

  .edu__icon {
    width: 18rem;
    height: 12rem;
    margin: 0 auto;
    object-fit: fill;
    padding-bottom: 1rem;
  }

  .edu__title {
    font-family: "droid-sans-mono", monospace;
    font-size: 1.3rem;
    font-weight: 700;
    color: #50fa7b;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .edu__subtitle {
    font-family: "droid-sans-mono", monospace;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ff79c6;
    text-align: center;
    padding-bottom: 0.3rem;
  }

  .edu__bajada {
    font-family: "droid-sans-mono", monospace;
    font-size: 1rem;
    font-weight: 700;
    color: #8be9fd;
    text-align: center;
  }

  .edu__bajada2 {
    font-family: "droid-sans-mono", monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: #f1fa8c;
    text-align: center;
  }
  @media screen and (max-width: 1280px) {
    .edu__icon {
      width: 10rem;
      height: 6rem;
    }
  }
</style>
