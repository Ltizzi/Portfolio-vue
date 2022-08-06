<template lang="">
  <section class="skills__back">
    <div class="stars" id="stars"></div>
    <div class="stars2" id="stars2"></div>
    <div class="stars3" id="stars3"></div>
    <div class="stars4"></div>
    <div class="stars5"></div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        paletas: [
          [
            "#6272a4",
            "#f8f8f2",
            "#8be9fd",
            "#50fa7b",
            "#ffb86c",
            "#ff79c6",
            "#bd93f9",
            "#ff5555",
            "#f1fa8c",
          ],
          [
            "#ffd27d",
            "#ffa371",
            "#a6a8ff",
            "#fffa86",
            "#a87bff",
            "#c7d8ff",
            "#fff4f3",
            "#afc9ff",
          ],
        ],
        indicePaleta: 1,
      };
    },
    computed: {},
    methods: {
      genNumber() {
        return Math.floor(Math.random() * 1920);
      },
      randomIndex(paleta) {
        return Math.floor(Math.random() * paleta.length);
      },
      generarEstrellas(cantidad, paleta) {
        var resultado = [];
        var contador = 1;
        while (contador < cantidad) {
          resultado.push(
            this.genNumber() +
              "px " +
              this.genNumber() +
              "px " +
              paleta[this.randomIndex(paleta)]
          );
          contador++;
        }
        return resultado;
      },
      getStars() {
        var stars =
          ":root { --stars1: " +
          String(this.generarEstrellas(10900, this.paletas[1])) +
          "; --stars2: " +
          String(this.generarEstrellas(10900, this.paletas[1])) +
          "; --stars3: " +
          String(this.generarEstrellas(30, this.paletas[1])) +
          " ;--stars4: " +
          String(this.generarEstrellas(4000, this.paletas[1])) +
          "; --stars5: " +
          String(this.generarEstrellas(50, this.paletas[1])) +
          ";}";
        return stars;
      },
    },

    beforeMount() {
      const sheet = new CSSStyleSheet();
      sheet.insertRule(this.getStars());
      document.adoptedStyleSheets = [sheet];
    },
  };
</script>
<style scoped>
  .skills__back {
    height: 100vh;
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #44475a 1%, #282a36 100%);
  }

  .stars {
    width: 1px;
    height: 1px;
    background: transparent;
    transition: 1.5s;
    animation: animStar 200s linear infinite;
    box-shadow: var(--stars1);
  }

  .stars:hover {
    transform: scale(10px);
  }

  .stars:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: var(--stars1);
  }

  .stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    animation: animStar 250s linear infinite;
    box-shadow: var(--stars2);
  }

  .stars2:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: var(--stars2);
  }

  .stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    animation: animStar 300s linear infinite;
    box-shadow: var(--stars3);
  }

  .stars3:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: var(--stars3);
  }

  .stars4 {
    width: 1px;
    height: 1px;
    background: transparent;
    animation: animStar 150s linear infinite;
    box-shadow: var(--stars4);
  }

  .stars4:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: var(--stars4);
  }

  .stars5 {
    width: 4px;
    height: 4px;
    background: transparent;
    animation: animStar 500s linear infinite;
    box-shadow: var(--stars5);
  }

  .stars5:after {
    content: "";
    position: absolute;
    top: 2000px;
    width: 4px;
    height: 4px;
    background: transparent;
    box-shadow: var(--stars5);
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }

  @keyframes animStarX {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-2000px);
    }
  }
</style>
