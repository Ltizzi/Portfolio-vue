<template>
  <nav class="menu slowFade">
    <div class="menu__header">
      <a href="#home" title="Home">
        <i class="fa-solid fa-house menu__header-icon scale" tooltip="asda"></i
      ></a>

      <h5 class="menu__header-title">
        const <span class="punto">ltizzi </span> = new
        <span style="color: #8be9fd">Ltizzi</span><span class="punto">(</span>
        <span style="color: #f1fa8c">"Leonardo Terlizzi"</span>
        <span class="punto">);</span>
      </h5>
    </div>
    <nav class="menu__nav">
      <ul class="menu__ul">
        <!-- <li class="menu__item scale">
          <a
            href="#about"
            class="menu__link"
            style="color: #bd93f9"
            title="Acerca de mí"
            >ltizzi</a
          >
        </li>
        <p class="punto">.get<span style="color: #8be9fd">(</span></p> -->
        <li class="menu__items scale" v-for="item in menuItems" :key="item">
          <a
            class="menu__link"
            :href="item.link"
            :title="item.title"
            :style="item.style"
            >{{ item.text }}</a
          >

          <span
            :class="punt.class"
            v-for="punt in item.puntuacion"
            :key="punt"
            :style="punt.style"
            >{{ punt.tipo }}</span
          >
        </li>
      </ul>
    </nav>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        menuItems: [
          {
            text: "ltizzi",
            style: "color: #bd93f9",
            link: "#about",
            title: "Acerca de mí",
            puntuacion: [
              {
                tipo: ".get",
                style: "color: #fff",
                class: "punto",
              },
              { tipo: "(", style: "color: #8be9fd", class: "punto" },
            ],
          },
          {
            text: "Skills",
            style: "color: #f1fa8c",
            link: "#skills",
            title: "ver habilidades",
            puntuacion: [{ tipo: ",", style: "color:  #fff", class: "punto" }],
          },
          {
            text: "Hobbies",
            style: "color: #50fa7b",
            link: "#hobbies",
            title: "ver hobbies",
            puntuacion: [
              { tipo: ")", style: "color: #8be9fd", class: "punto" },
              { tipo: ".", style: "color: #fff", class: "punto" },
            ],
          },
          {
            text: "getFormación()",
            style: "color: #8be9fd",
            link: "#formacion",
            title: "ver formación",
            puntuacion: [{ tipo: ".", style: "color:  #fff", class: "punto" }],
          },
          {
            text: "getProyectos()",
            style: "color: #ff79c6",
            link: "#proyectos",
            title: "ver proyectos",
            puntuacion: [{ tipo: ".", style: "color:  #fff", class: "punto" }],
          },
          {
            text: "Contacto()",
            style: "color: #ffb86c",
            link: "#contacto",
            title: "mandar mensaje",
            puntuacion: [{ tipo: ";", style: "color:#fff", class: "punto" }],
          },
        ],
      };
    },
  };
</script>

<style scoped>
  html {
    scroll-behavior: smooth;
  }

  .menu {
    display: flex;
    /* background-color: rgba(255, 251, 251, 0.9); */
    background: #282a36;
    opacity: 0.9;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    position: fixed;
    z-index: 10;
    padding: 0.7rem 0;
  }

  .menu__header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: center;
  }

  .menu__header-title {
    color: #ff79c6;
    font-weight: 700;
    font-family: "droid-sans-mono", monospace;
    font-size: 1.125rem;
    padding-left: 0.5rem;
    margin: 0;
  }

  .menu__header-icon {
    color: #50fa7b;
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  .menu__ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
  }

  .punto {
    color: #f8f8f2;
    font-weight: 700;
    font-family: "droid-sans-mono", monospace;
  }

  .menu__link {
    text-decoration: none;
    padding-right: 0.5rem;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
  }

  .menu__item {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    /* .menu__ul {
    display: none;
  } */

    .menu__header-title {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 1280px) {
    .menu__header-title {
      font-size: 1rem;
    }
    .menu__ul {
      display: none;
    }
  }
</style>
