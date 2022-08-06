<template>
  <div>
    <slot>
      <i :class="icon"></i>
      <p class="skills__title">{{ skillName }}</p>
    </slot>
  </div>
</template>
<script>
  export default {
    props: ["icon", "skillName"],
  };
</script>
<style scoped>
  div {
    padding: 0;
    margin: -1rem 0;
  }
  .skills__icon {
    color: #8be9fd;
    font-size: 2.2rem;
    margin-top: 7rem;
    margin-left: 1rem;
  }

  .skills__title {
    color: #f1fa8c;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.5rem;
    padding-top: 0.2rem;
    margin-left: 1rem;
  }
</style>
