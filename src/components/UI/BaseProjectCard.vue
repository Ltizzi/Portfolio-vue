<template lang="">
  <slot>
    <div class="proyecto__inner">
      <img
        :src="require(`@/assets/${foto}`)"
        :title="fotoTxt"
        class="proyecto__icon"
      />
      <h4 class="proyecto__title">{{ title }}</h4>
      <h5 class="proyecto__descripcion">{{ about }}</h5>
      <ul class="proyecto__techs">
        <li
          class="proyecto__tech-item"
          v-for="tech in techs"
          :key="tech"
          :title="tech.text"
        >
          <i :class="tech.icon"></i>
        </li>
      </ul>
      <ul class="proyecto__buttons">
        <button class="proyecto__btn">
          <a :href="github" target="_blank" rel="noopener noreferrer"
            ><i class="fa-brands fa-github proyecto__github-icon"></i
          ></a>
        </button>
        <button class="proyecto__btn">
          <a :href="demo" class="demo" target="_blank" rel="noopener noreferrer"
            >Demo</a
          >
        </button>
      </ul>
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
    background: #fdffee;
    padding: 1rem 1rem;
    padding-bottom: 1.5rem;
    height: 26.5rem;
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
    width: 90%;
    height: 10rem;
    margin: 0 auto;
    object-fit: fill;
    padding-bottom: 1rem;
  }

  .proyecto__icon:hover {
    cursor: pointer;
  }

  .proyecto__title {
    font-family: "Josefin Sans", sans-serif;
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
    font-size: 1rem;
    font-weight: 700;
    color: #5a6586;
    text-align: center;
    padding-bottom: 0.3rem;
  }

  .proyecto__techs {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -2rem;
    justify-content: space-evenly;
  }

  .proyecto__tech-item {
    font-size: 1.7rem;
    margin-right: 0.2rem;
    margin-bottom: 0.5rem;
    color: white;
  }
  .proyecto__tech-item:hover {
    cursor: pointer;
  }

  .proyecto__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -2rem;
  }

  .proyecto__btn {
    width: 7rem;
    background: linear-gradient(160deg, #ffb86c, #ff79c6, #bd93f9);
    padding: 0.2rem;
    border-radius: 10px;
    border: none;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
  }

  .proyecto__github-icon {
    font-size: 1.7rem;
    font-weight: 700;
    color: white;
    text-align: center;
  }

  .demo {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: none;
  }

  .angular-icon {
    background: #a6120d;
    padding: 0.3rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .spring-icon {
    background: #83c77b;
    padding: 0.3rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .java-icon {
    background: #5382a1;
    padding: 0.3rem 0.5rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .mysql-icon {
    background: #00758f;
    padding: 0.3rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .html-icon {
    background: #e34c26;
    padding: 0.3rem 0.5rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .css-icon {
    background: #264de4;
    padding: 0.3rem 0.5rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .js-icon {
    background: #f0db4f;
    color: #323330;
    padding: 0.3rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  @media screen and (max-width: 1280px) {
    .proyecto__icon {
      width: 10rem;
      height: 6rem;
    }
  }
</style>
