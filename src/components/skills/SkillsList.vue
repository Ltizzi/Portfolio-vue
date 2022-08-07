<template lang="">
  <section class="skills" id="skills">
    <h3 class="skills__hard-title">Hard Skills</h3>
    <ul class="skills__hard">
      <li class="skills__item" v-for="skill in hardSkills" :key="skill">
        <base-skill-card
          :icon="skill.icon"
          :skillName="skill.name"
        ></base-skill-card>
      </li>
      <li class="skills__item">
        <div class="typescript">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            style="fill: #8be9fd"
            class="skills__icon"
          >
            <path
              d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"
            ></path>
          </svg>
          <p class="skills__title">TypeScript</p>
        </div>
      </li>
    </ul>
    <h3 class="skills__soft-title">Soft Skills</h3>
    <ul class="skills__soft">
      <li class="skills__item-soft" v-for="skill in softSkills" :key="skill">
        <base-skill-card
          :icon="skill.icon"
          :skillName="skill.name"
        ></base-skill-card>
      </li>
    </ul>
    <span id="hobbies"></span>
    <h3 class="hobbies__main-tittle">Hobbies</h3>
    <ul class="skills__hobbies">
      <li class="skills__item-hobbie" v-for="hobbie in hobbies" :key="hobbie">
        <base-skill-card
          :icon="hobbie.icon"
          :skillName="hobbie.name"
        ></base-skill-card>
      </li>
    </ul>
  </section>
</template>
<script>
  import BaseSkillCard from "../UI/BaseSkillCard.vue";
  export default {
    components: {
      BaseSkillCard,
    },
    data() {
      return {
        hardSkills: [
          { icon: "fa-brands fa-html5 skills__icon", name: "HTML" },
          { icon: "fa-brands fa-css3-alt skills__icon", name: "CSS" },
          { icon: "fa-brands fa-js skills__icon", name: "JavaScript" },
          { icon: "fa-brands fa-angular skills__icon", name: "Angular" },
          { icon: "fa-brands fa-java skills__icon", name: "Java" },
          { icon: "fa-solid fa-leaf skills__icon", name: "Spring" },
          { icon: "fa-solid fa-database skills__icon", name: "MySQL" },
          { icon: "fa-solid fa-code-branch skills__icon", name: "GIT" },
          { icon: "fa-brands fa-linux skills__icon", name: "GNU/Linux" },
          { icon: "fa-brands fa-vuejs skills__icon", name: "VueJs" },
        ],
        softSkills: [
          {
            icon: "fa-solid fa-image-portrait skills__icon",
            name: "Autodidacta",
          },
          { icon: "fa-solid fa-palette skills__icon", name: "Creativo" },
          { icon: "fa-regular fa-comments skills__icon", name: "Comunicación" },
          {
            icon: "fa-solid fa-hand-holding-hand skills__icon",
            name: "Empatía",
          },
          { icon: "fa-regular fa-lightbulb skills__icon", name: "Resolutivo" },
        ],
        hobbies: [
          { icon: "fa-solid fa-music skills__icon", name: "Tocar música" },
          { icon: "fa-solid fa-book-open skills__icon", name: "Lectura" },
          {
            icon: "fa-regular fa-pen-to-square skills__icon",
            name: "Escritura",
          },
          { icon: "fa-solid fa-film skills__icon", name: "Series y Películas" },
          { icon: "fa-solid fa-gamepad skills__icon", name: "Videojuegos" },
        ],
      };
    },
  };
</script>
<style scoped>
  .skills {
    padding: 2rem 3rem;
    padding-top: 0;
    /* background-color: #f7f5e9; */
    /* background: #f8f8f2;
    animation: animStar 40s linear 6s;*/

    animation: starwars 28s linear infinite;
  }
  .skills__hard-title,
  .skills__soft-title,
  .hobbies__main-tittle {
    color: #f1fa8c;
    font-family: "Josefin Sans", sans-serif;
    font-size: 7rem;
    text-align: center;
    margin: 1rem auto;
    padding-bottom: 2rem;
  }

  .skills__hard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 2rem;
    list-style: none;
    padding-bottom: 3rem;
  }

  .skills__soft {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.5rem 2rem;
    list-style: none;
    padding-bottom: 10rem;
    width: 105%;
    margin-left: -2.5rem;
  }

  .skills__hobbies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.5rem 2rem;
    list-style: none;
    padding-bottom: 130rem;
    width: 110%;
    margin-left: -5rem;
  }

  .skills__item {
    width: 260px;
    height: 175px;
    text-align: left;
    border: 4px groove #bd93f9;

    border-radius: 10px;
    /* padding-top: 4rem;
    padding-left: 1rem; */

    margin-left: 4rem;
    margin-bottom: 1rem;
    transition: 0.3s;
  }

  .skills__item-soft {
    width: 260px;
    height: 175px;
    text-align: left;
    border: 4px groove #bd93f9;

    border-radius: 10px;
    /* padding-top: 4rem;
    padding-left: 1rem; */

    margin-left: 4rem;
    margin-bottom: 1rem;
    transition: 0.3s;
    transform: scale(1.3);
  }

  .skills__item-hobbie {
    width: 260px;
    height: 175px;
    text-align: left;
    border: 4px groove #bd93f9;

    border-radius: 10px;
    /* padding-top: 4rem;
    padding-left: 1rem; */

    margin-left: 4rem;
    margin-bottom: 1rem;
    transition: 0.3s;
    transform: scale(1.3);
  }

  .typescript {
    padding: 3rem 1rem;
    margin: -2.5rem 0;
    height: 35rem;
    width: 35rem;
  }

  /* .skills__item:hover {
    transform: scale(1.15, 1.15);
  } */

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
  }

  @keyframes starwars {
    /*translateY(0px)*/

    0% {
      transform: translateY(1400px) scale(3.6) perspective(500px) rotateX(25deg);
      transform-origin: 50%;
      top: 65%;
    }

    /*translateY(-1000px)*/
    80% {
      opacity: 0.8;
      transform: scale(0.7) translateY(-2000px) perspective(800px)
        rotateX(25deg);
      top: -20%;
    }
    90% {
      opacity: 0;
      transform: scale(0.01) translateY(-6000px) perspective(450px);
    }
    100% {
      opacity: 0;
      transform: scale(10);
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .skills {
      padding: 0 0;
    }
    .skills__item {
      width: 125px;
      height: 75px;
      margin-left: 0.5rem;
    }

    .skills__hard {
      justify-content: center;
    }
  }
  @media screen and (max-width: 1280px) {
    .skills__item {
      width: 175px;
      height: 125px;
    }
    .skills__icon {
      margin-top: 4rem;
    }
  }
</style>
