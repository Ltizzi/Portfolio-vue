<template lang="">
  <slot>
    <div class="proyecto__inner">
      <img
        :src="require(`@/assets/${foto}`)"
        :alt="fotoTxt"
        class="proyecto__icon"
      />
      <h4 class="proyecto__title">{{ title }}</h4>
      <h5 class="proyecto__descripcion">{{ about }}</h5>
      <ul class="proyecto__techs">
        <li class="proyecto__tech-item" v-for="tech in techs" :key="tech">
          <i :class="tech"></i>
        </li>
      </ul>
      <button class="proyecto__btn">
        <a :href="github"
          ><i class="fa-brands fa-github proyecto__github-icon"></i
        ></a>
      </button>
      <button class="proyecto__btn"><a href="" class="demo">Demo</a></button>
    </div>
  </slot>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: ["foto", "fotoTxt", "title", "about", "github", "demo", "techs"],
  };
</script>
<style scoped>
  .proyecto__inner {
    background: #f8f9e9;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
  }
  .proyect__item {
    border: 2px solid #bd93f9;
    padding: 2rem;
    width: 24%;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s;
  }

  .proyecto__icon {
    width: 18rem;
    height: 12rem;
    margin: 0 auto;
    object-fit: fill;
    padding-bottom: 1rem;
  }

  .proyecto__title {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 2rem;
    text-shadow: 1px 2px 2px gray;
    font-weight: 700;
    color: #6272a4;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .proyecto__descripcion {
    font-family: "M PLUS Rounded 1c", sans-serif;
    text-shadow: 1px 2px 2px gray;
    text-align: justify;
    font-size: 1.2rem;
    font-weight: 700;
    color: #3e4048d3;
    text-align: center;
    padding-bottom: 0.3rem;
  }

  .proyecto__techs {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .proyecto__tech-item {
    font-size: 3rem;
    margin-right: 1rem;
    color: #473777;
  }

  .proyecto__btn {
    width: 100%;
    background: #bd93f9;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    margin: 0.5rem 0;
  }

  .proyecto__github-icon {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-align: center;
  }

  .demo {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: none;
  }
  @media screen and (max-width: 1280px) {
    .proyecto__icon {
      width: 10rem;
      height: 6rem;
    }
  }
</style>
