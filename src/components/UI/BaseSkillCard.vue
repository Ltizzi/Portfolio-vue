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
    padding: 3rem 1rem;
    margin: -2.5rem 0;
    height: 35rem;
    width: 35rem;
  }
  .skills__icon {
    color: #8be9fd;
    font-size: 3rem;
    margin-top: 4rem;
    margin-left: 1rem;
  }

  .skills__title {
    color: #f1fa8c;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.5rem;

    margin-left: 1rem;
    padding-bottom: 1rem;
  }
</style>
