<template lang="">
  <section class="proyects" id="proyectos">
    <h3 class="protect__main-title">Proyectos</h3>
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
  .proyects {
    padding: 3rem 3rem;
    /* background-color: #d0d0f7 #a7a7d4; */

    background: radial-gradient(
      ellipse at bottom,
      #f7f7fa 1%,
      #e2e2f8 50%,
      #a7a7d4 100%
    );
  }

  .protect__main-title {
    color: #f8f9e9;
    text-shadow: 10px 10px 20px #5e5f5c;
    /* text-shadow: -1px 0 #f8f8f2, 0 1px #f8f8f2, 1px 0 #f8f8f2, 0 -1px #f8f8f2; */
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 3.5rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .protect__main-title {
      font-size: 2rem;
    }
  }
</style>
