<template lang="">
  <ul class="edu__list">
    <li class="edu__item" v-for="curso in cursos" :key="curso">
      <base-project-card
        :foto="curso.foto"
        :fotoTxt="curso.fotoTxt"
        :title="curso.title"
        :institution="curso.institution"
        :timeRange="curso.timeRange"
        :about="curso.about"
      >
      </base-project-card>
    </li>
  </ul>
</template>
<script>
  import BaseProjectCard from "../UI/BaseProjectCard.vue";
  export default {
    components: {
      BaseProjectCard,
    },
    data() {
      return {
        cursos: [
          {
            title: "Programador Fullstack Jr",
            foto: "argprog.jpg",
            institution: "Argentina Programa",
            fotoTxt: "logo argentina programa",
            timeRange: "2021-2022",
            about: " Git, HTML, CSS, TS, Angular, Java, Spring, MySQL",
          },
          {
            title: "Oracle ONE Next Education",
            foto: "oracleonealura.jpg",
            institution: "Alura Latam",
            fotoTxt: "Logo Oracle y alur",
            timeRange: "2022-En curso",
            about: "HTML, CSS, JS, Java",
          },
          {
            title: "JavaScript Algorithms and Data",
            foto: "freecodecamp.png",
            institution: "FreecodeCamp",
            fotoTxt: "Logo FreeCodeCamp",
            timeRange: "2022",
            about: "Principios de Javascript y estructura de datos",
          },
        ],
      };
    },
  };
</script>
<style>
  .edu__list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 2rem;
  }

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

  .edu__item:hover {
    transform: scale(1.05, 1.05);
  }

  @media screen and (max-width: 768px) {
    .edu__list {
      flex-direction: column;
      justify-content: space-around;
    }

    .edu__item {
      width: 90%;
      margin-bottom: 2rem;
    }
  }
</style>
