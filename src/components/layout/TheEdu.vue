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
    color: transparent;
    background: linear-gradient(
      160deg,
      #ffb86c,
      #ff79c6,
      #bd93f9,
      #8be9fd,
      #50fa7b
    );
    /*text-shadow: 1px 5px 6px #505c7d;*/
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 5rem;
    font-weight: 900;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    white-space: pre-wrap;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
