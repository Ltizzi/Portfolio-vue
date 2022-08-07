<template lang="">
  <base-separador></base-separador>

  <contacto-footer></contacto-footer>
  <footer class="footer">
    <ul class="footer__redes">
      <li class="footer__redes-item">
        <a href="https://github.com/Ltizzi" class="footer__redes-link">
          <i class="fa-brands fa-github footer__redes-github"></i
        ></a>
      </li>
      <li class="footer__redes-item">
        <a
          href="https://www.linkedin.com/in/lterlizzi/"
          class="footer__redes-link"
        >
          <i class="fa-brands fa-linkedin footer__redes-linkedin"></i
        ></a>
      </li>
      <li class="footer__redes-item">
        <a href="https://twitter.com/ltizzi83" class="footer__redes-link"
          ><i class="fa-brands fa-twitter-square footer__redes-twitter"></i
        ></a>
      </li>
    </ul>
    <p class="footer__text">Desarrollado por Leonardo Terlizzi 2022</p>
  </footer>
</template>
<script>
  import ContactoFooter from "../footer/ContactoFooter.vue";
  export default {
    components: {
      ContactoFooter,
    },
  };
</script>
<style scoped>
  .footer {
    background: #282a36;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
  }

  .footer__redes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
  }

  .footer__redes-github {
    color: #171515;
    font-size: 3rem;
    background-color: white;
    margin-right: 1rem;
    width: 90%;
  }

  .footer__redes-linkedin {
    color: #0072b1;
    font-size: 3rem;
    background-color: white;
    margin-right: 1rem;
    width: 90%;
  }

  .footer__redes-twitter {
    color: #1da1f2;
    font-size: 3rem;
    background-color: white;
    margin-right: 1rem;
    width: 100%;
  }

  .footer__text {
    color: #f8f8f2;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    padding-bottom: 1rem;
  }
</style>
