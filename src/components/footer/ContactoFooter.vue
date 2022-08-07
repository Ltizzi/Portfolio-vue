<template lang="">
  <section class="contacto" id="contacto">
    <div class="contacto__errores" id="errores"></div>
    <!-- <img
      src="../../assets/contacto.jpeg"
      alt="Imagen de un teléfono"
      class="contacto__img"
      id="fotoTel"
    /> -->

    <video autoplay loop class="container-fluid contacto__img">
      <source src="../../assets/teclado.mp4" type="video/mp4" />
    </video>

    <div class="contacto__form-container">
      <h6 class="contacto__title">
        <span style="color: #bd93f9">ltizzi</span
        ><span class="punto">.</span>Contacto()
      </h6>

      <form id="form" class="contacto__form">
        <label for="nombre" class="contacto__form-label1">.setNombre()</label
        ><br />
        <input
          type="text"
          class="contacto__form-input"
          placeholder="Nombre"
          id="nombre"
        /><br />

        <label for="mail" class="contacto__form-label2">.setE-mail()</label
        ><br />
        <input
          type="text"
          class="contacto__form-input"
          placeholder="E-mail"
          id="mail"
        /><br />
        <label for="asunto" class="contacto__form-label3">.setAsunto()</label
        ><br />
        <input
          type="text"
          class="contacto__form-input"
          placeholder="Asunto"
          id="asunto"
        /><br />

        <textarea
          name="mensaje"
          id="mensaje"
          cols="50"
          rows="5"
          class="contacto__form-input-about"
          placeholder="Mensaje"
        ></textarea>
        <br />
        <input type="submit" class="contacto__form-submit big" id="submit" />
      </form>
    </div>
  </section>
</template>
<script>
  export default {};
</script>
<style scoped>
  .contacto {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem 3rem;
    background: #e8e2f1;
  }
  .contacto__errores {
    height: 30rem;
    padding-top: 1rem;
    background-color: bisque;
  }
  .error {
    text-align: center;
    background-color: lightsalmon;
    border: 2px lightcoral solid;
    color: #793d3d;
    font-family: "droid-sans-mono", monospace;
    font-weight: bolder;
    /* margin-right: auto;
  margin-left: auto; */

    margin-bottom: 5px;
    width: 37rem;
    padding: 1rem;
  }

  .hide {
    display: none;
  }

  .contacto__img {
    object-fit: fill;
  }

  .contacto__form-container {
    padding: 1rem;
    background-color: #44475a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contacto__title {
    color: #8be9fd;
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 2rem;
  }

  .contacto__bajada {
    color: #f8f8f2;
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 0.9rem;
    padding: 1rem 0;
  }

  .contacto__form-label1 {
    color: #f1fa8c;
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 1rem;
  }

  .contacto__form-label2 {
    color: #ff79c6;
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 1rem;
  }

  .contacto__form-label3 {
    color: #50fa7b;
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 1rem;
  }

  .contacto__form-input {
    margin: 1rem 0;
    width: 70%;
    padding: 0.5rem;
  }

  .contacto__form-input-about {
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }

  .contacto__form-submit {
    color: #f8f8f2;
    background: #bd93f9;
    font-family: "droid-sans-mono", monospace;
    font-weight: 800;
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 1280px) {
    .contacto__img {
      display: none;
    }
  }
</style>
