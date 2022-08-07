<template lang="">
  <div class="about__header">
    <div class="about__header-text">
      <h2 class="about__title animLeft">{{ about.title }}</h2>
      <p class="about__header-bajada animLeft2">{{ about.bajada }}</p>
      <ul class="about__redes animLeft3">
        <li class="about__redes-item scale" v-for="red in redes" :key="red">
          <a
            :href="red.link"
            :title="red.title"
            class="about__redes-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i :class="red.icon"></i
          ></a>
        </li>
      </ul>
    </div>
    <img
      src="../../assets/fotoperfil.jpg"
      alt="Foto de perfil"
      class="img-fluid about__pic animRight"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        about: {
          title: "Hola, mi nombre es Leonardo Terlizzi y soy Desarrollador Web",
          bajada:
            "Aprendí a programar, principalmente, de forma autodidacta y al curso Argentina Programa. Actualmente estoy participando del programa Oracle ONE en Alura Latam",
        },
        redes: [
          {
            title: "perfil de github",
            link: "https://github.com/Ltizzi",
            icon: "fa-brands fa-github about__redes-icon",
          },
          {
            title: "perfil de linkedin",
            link: "https://www.linkedin.com/in/lterlizzi/",
            icon: "fa-brands fa-linkedin about__redes-icon",
          },
          {
            title: "perfil de twitter",
            link: "https://twitter.com/ltizzi83",
            icon: "fa-brands fa-twitter about__redes-icon",
          },
          {
            title: "Mandar mail",
            link: "mailto:terlizzileonardo@gmail.com",
            icon: "fa-solid fa-envelope about__redes-icon",
          },
          {
            title: "Descargar CV",
            link: "",
            icon: "fas fa-file-pdf about__redes-icon",
          },
        ],
      };
    },
  };
</script>
<style scoped>
  .about__header {
    margin-top: 10rem;
    margin: 10rem auto;
    width: 75%;
    background: rgba(248, 248, 248, 0.85);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }

  .about__header-text {
    text-align: left;
    margin-top: 4.5rem;
    margin-left: 5rem;
    width: 55%;
  }

  .about__title {
    color: #282a36;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 2.7rem;
    font-weight: 400;
    padding: 1rem auto;
  }

  .about__header-bajada {
    color: #282a36;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 1.3rem;
    padding: 1.5rem 0.2rem;
    line-height: 1.7rem;
  }

  .about__redes {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
  }

  .about__redes-link {
    text-decoration: none;
    font-family: "M PLUS Rounded 1c", sans-serif;

    font-size: 1.2rem;
    color: #282a36;
  }

  .about__redes-icon {
    font-size: 2rem;
    color: #44475a;
  }

  .about__pic {
    border-radius: 50%;
    height: 300px;
    margin: 2rem 5rem 1rem 0.3rem;
    width: 300px;
    object-fit: cover;
  }
</style>
