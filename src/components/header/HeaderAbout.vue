<template lang="">
  <div class="about__bajada slowFade">
    <h3 class="about__bajada-title">{{ about.title }}</h3>
    <p class="about__bajada-texto" v-for="p in about.parrafos" :key="p">
      {{ p }}
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        about: {
          title: "Sobre mí",
          parrafos: [
            " Me llamo Leonardo. Desde mi primera computadora, una 386 DX 40Mhz con 1 MB de RAM y un disco rígido de apenas 40Mb, la informática me apasionó. Aprendí de forma rudimentaria a programar en BASIC pero terminé estudiando Comunicación.",
            " Sin embargo, el amor por la tecnología y las computadoras en particular,siempre me llevó a saber a usar en profundidad los Sistemas Operativos. Desde MS-DOS a a distintas distribuciones de GNU/Linux, siempre fui mi servicio técnico personal.",
            "  Hace poco decidí cambiar de carrera y volver a programar, gracias a distintos cursos online, pero principalmente de manera autodidacta, por primera vez me siento confiado en mis conocimientos técnicos para empezar a aplicar en distintos trabajos, buscando mi primer empleo en el sector.",
          ],
        },
      };
    },
  };
</script>
<style scoped>
  .about__bajada {
    background-color: rgba(255, 251, 251, 0.9);
    color: #44475a;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
    text-align: justify;
  }

  .about__bajada-title {
    color: #282a36;
    font-size: 1.8rem;
    font-weight: 700;
    padding-left: 3rem;
    padding-bottom: 1rem;
  }

  .about__bajada-texto {
    line-height: 1.5;
    font-size: 1.1rem;
    padding: 0.5rem 3rem;
  }
</style>
