<template lang="">
  <section class="proyectos" id="formacion">
    <h3 class="proyectos__title">Formación Académica</h3>
    <edu-list></edu-list>
  </section>
</template>
<script>
  import EduList from "../edu/EduList.vue";
  export default {
    components: {
      EduList,
    },
  };
</script>
<style scoped>
  .proyectos {
    background: #f9f9ef;
    padding: 3rem 0 0.5rem 0;
    display: flex;
    flex-direction: column;
  }

  .proyectos__title {
    color: #6272a4;
    text-shadow: 1px 5px 6px #505c7d;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 3rem;
    font-weight: bolder;

    text-align: center;
  }
</style>
