<template lang="">
  <section class="edu" id="formacion">
    <h3 class="edu__main-title">Proyectos</h3>
    <projects-list></projects-list>
  </section>
</template>
<script>
  import ProjectsList from "../proyectos/ProjectsList.vue";
  export default {
    components: {
      ProjectsList,
    },
  };
</script>
<style scoped>
  .edu {
    padding: 3rem 3rem;
    background-color: #282a36;
  }

  .edu__main-title {
    color: #ff79c6;
    /* text-shadow: -1px 0 #f8f8f2, 0 1px #f8f8f2, 1px 0 #f8f8f2, 0 -1px #f8f8f2; */
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .edu__main-title {
      font-size: 2rem;
    }
  }
</style>
