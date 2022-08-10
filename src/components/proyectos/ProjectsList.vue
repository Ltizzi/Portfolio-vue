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
            title: "Portfolio",
            foto: "portfolio.png",
            fotoTxt: "Ver Imagen",
            github: "https://github.com/Ltizzi/Portfolio-frontend",
            demo: "https://ltizzi-portfolio.web.app/",
            about:
              "Fullstack web application. Proyecto integrador de Argentina Programa. CRUD, auntenticación con JWT. ",
            techs: [
              { icon: "fa-brands fa-angular angular-icon", text: "Angular" },
              {
                icon: "fa-solid fa-leaf skills__icon spring-icon",
                text: "Spring",
              },
              {
                icon: "fa-brands fa-java skills__icon java-icon",
                text: "Java",
              },
              {
                icon: "fa-solid fa-database skills__icon mysql-icon",
                text: "MySQL",
              },
            ],
          },
          {
            title: "E-Shop",
            foto: "2.png",
            fotoTxt: "Ver imagen",
            github: "https://github.com/Ltizzi/e-shop-front",
            demo: "https://e-shop-ltizzi.web.app/",
            about:
              "E-commerce con registro, autenticación, carrito, filtro de productos, registro de compras y manejo de stocks. ",
            techs: [
              { icon: "fa-brands fa-angular angular-icon", text: "Angular" },
              {
                icon: "fa-solid fa-leaf skills__icon spring-icon",
                text: "Spring",
              },
              {
                icon: "fa-brands fa-java skills__icon java-icon",
                text: "Java",
              },
              {
                icon: "fa-solid fa-database skills__icon mysql-icon",
                text: "MySQL",
              },
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
              {
                icon: "fa-brands fa-html5 skills__icon html-icon",
                text: "HTML",
              },
              {
                icon: "fa-brands fa-css3-alt skills__icon css-icon",
                text: "CSS",
              },
              {
                icon: "fa-brands fa-js skills__icon js-icon",
                text: "JavaScript",
              },
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
              {
                icon: "fa-brands fa-html5 skills__icon html-icon",
                text: "HTML",
              },
              {
                icon: "fa-brands fa-css3-alt skills__icon css-icon",
                text: "CSS",
              },
              {
                icon: "fa-brands fa-js skills__icon js-icon",
                text: "JavaScript",
              },
            ],
          },
          {
            title: "Alura Geek",
            foto: "alurageek.png",
            fotoTxt: "Ver imagen",
            github: "https://github.com/Ltizzi/Alura-Challenge-E-commerce",
            demo: "https://ltizzi.github.io/Alura-Challenge-E-commerce/",
            about:
              "Página de e-commerce realizada para el tercer desafío de Alura Latam.",
            techs: [
              {
                icon: "fa-brands fa-html5 skills__icon html-icon",
                text: "HTML",
              },
              {
                icon: "fa-brands fa-css3-alt skills__icon css-icon",
                text: "CSS",
              },
              {
                icon: "fa-brands fa-js skills__icon js-icon",
                text: "JavaScript",
              },
              {
                icon: "fa-solid fa-leaf skills__icon spring-icon",
                text: "Spring",
              },
              {
                icon: "fa-brands fa-java skills__icon java-icon",
                text: "Java",
              },
              {
                icon: "fa-solid fa-database skills__icon mysql-icon",
                text: "MySQL",
              },
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
    /*  border: 1px solid #f9dd79;
    background: #1f2212;*/
    background: url("../../assets/svg/Nexus5.svg");
    padding: 1rem 0.5rem;
    padding-bottom: 2.5rem;
    width: 15rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s;
    margin-bottom: 2.5rem;
    margin-right: 3rem;
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
