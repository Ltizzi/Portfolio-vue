<template lang="">
  <ul class="proyect__list">
    <li class="proyect__item" v-for="curso in cursos" :key="curso">
      <base-project-card
        :foto="curso.foto"
        :fotoTxt="curso.fotoTxt"
        :title="curso.title"
        :github="curso.github"
        :demo="curso.demo"
        :about="curso.about"
        :techs="curso.techs"
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
            title: "Portfolio Web",
            foto: "portfolio.png",
            fotoTxt: "Ver Imagen",
            github: "https://github.com/Ltizzi/Portfolio-frontend",
            demo: "https://ltizzi-portfolio.web.app/",
            about:
              "Portfolio web con implementación CRUD y autenticación con JWT. Proyecto integrador de Argentina Programa",
            techs: [
              "fa-brands fa-angular",
              "fa-solid fa-leaf skills__icon",
              "fa-solid fa-database skills__icon",
              "fa-brands fa-java skills__icon",
            ],
          },
          {
            title: "E-Shop",
            foto: "2.png",
            fotoTxt: "Ver imagen",
            github: "https://github.com/Ltizzi/e-shop-fron",
            demo: "https://e-shop-ltizzi.web.app/",
            about:
              "E-commerce con registro, autenticación, carrito, filtro de productos, registro de compras y manejo de stocks. ",
            techs: [
              "fa-brands fa-angular",
              "fa-solid fa-leaf skills__icon",
              "fa-solid fa-database skills__icon",
              "fa-brands fa-java skills__icon",
            ],
          },
          {
            title: "Encriptador",
            foto: "encriptador.png",
            fotoTxt: "Ver imagen",
            github: "https://github.com/Ltizzi/Alura-Challenge-N-1",
            demo: "https://ltizzi.github.io/Alura-Challenge-N-1/",
            about:
              "Encriptador realizado para el primer Challenge de Alura Latam. Hecho con HTML, CSS y JavaScript plano",
            techs: [
              "fa-brands fa-html5 skills__icon",
              "fa-brands fa-css3-alt skills__icon",
              "fa-brands fa-js skills__icon",
            ],
          },
          {
            title: "Ahorcado",
            foto: "ahorcado.png",
            fotoTxt: "Ver imagen",
            github: "https://github.com/Ltizzi/Alura-Challenge-N-2",
            demo: "https://ltizzi.github.io/Alura-Challenge-N-2/",
            about:
              "Simple juego de ahorcado realizado para el segundo desafío de Alura Latam. Uso de canvas y manipulación de dom dinámica",
            techs: [
              "fa-brands fa-html5 skills__icon",
              "fa-brands fa-css3-alt skills__icon",
              "fa-brands fa-js skills__icon",
            ],
          },
          {
            title: "Alura Geek",
            foto: "alurageek.png",
            fotoTxt: "Ver imagen",
            github: "https://github.com/Ltizzi/Alura-Challenge-E-commerce",
            demo: "https://ltizzi.github.io/Alura-Challenge-E-commerce/",
            about:
              "Página de e-commerce realizada para el tercer desafío de Alura Latam. Trabaja en conjunto con una simple API para darle funcionalidad CRUD",
            techs: [
              "fa-brands fa-html5 skills__icon",
              "fa-brands fa-css3-alt skills__icon",
              "fa-brands fa-js skills__icon",
              "fa-solid fa-leaf skills__icon",
              "fa-solid fa-database skills__icon",
              "fa-brands fa-java skills__icon",
            ],
          },
        ],
      };
    },
  };
</script>
<style>
  .proyect__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .proyect__item {
    border: 1px solid #f9dd79;
    background: #685a49;
    padding: 1rem 0.2rem;
    width: 30rem;
    height: 36rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s;
    margin: 2rem auto;
    border-radius: 20px;
    box-shadow: 20px 20px 20px #4d4d4e;
  }

  /*  .proyect__item:hover {
    transform: scale(1.05, 1.05);
  }*/

  @media screen and (max-width: 768px) {
    .proyect__list {
      flex-direction: column;
      justify-content: space-around;
    }

    .proyect__item {
      width: 90%;
      margin-bottom: 2rem;
    }
  }
</style>
