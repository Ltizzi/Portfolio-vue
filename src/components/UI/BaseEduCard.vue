<template lang="">
  <slot>
    <div class="proyecto__inner">
      <div class="educard__info">
        <h5 class="proyecto__title">{{ title }}</h5>
        <h5 class="educard__info-institution">{{ institucion }}</h5>
        <p class="educard__info-p">{{ rangeTime }}</p>
        <p class="educard__info-p">{{ about }}</p>
        <ul class="proyecto__submenu">
          <li class="proyecto__item"></li>
          <li class="proyecto__item-btn big">
            <a :href="link1" class="proyecto__link" :title="anchorTitle"
              >Temario
            </a>
          </li>
          <li class="proyecto__item-btn big">
            <a :href="link2" class="proyecto__link" :title="anchorTitle"
              >Website</a
            >
          </li>
        </ul>
      </div>

      <img
        :src="require(`@/assets/${imagen}`)"
        :alt="imgAlt"
        class="img-fluid proyecto__imagen"
      />
    </div>
  </slot>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: [
      "title",
      "link1",
      "link2",
      "imagen",
      "imgAlt",
      "about",
      "rangeTime",
      "institucion",
    ],
  };
</script>
<style scoped>
  .proyecto__title {
    color: #6272a4;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 2.3rem;
    font-weight: bolder;
    padding-bottom: 0.5rem;
    text-align: justify;
  }

  .proyecto__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: rgb(43, 42, 42);
  }

  .educard__info {
    width: 65%;
    padding: 1rem;
    margin: auto 0;
  }

  .educard__info-institution {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  .educard__info-p {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
  }

  .proyecto__imagen {
    width: 25%;
    object-fit: fill;
  }

  .proyecto__submenu {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
  }

  .proyecto__item-btn {
    padding: 1rem;
    background: #bd93f9;
    width: 20rem;
    margin: 0.5rem 1rem;
    text-align: center;
    border-radius: 15px;
  }

  .proyecto__item:hover {
    cursor: pointer;
  }

  .proyecto__link {
    display: block;
    margin: auto 0;
    padding: 0 2rem;
    color: #f8f8f2;
    font-size: 1.5rem;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    .proyectos__title {
      font-size: 2rem;
    }

    .proyecto__submenu {
      padding-top: 2rem;
    }

    .proyecto__link {
      font-size: 0.5rem;
    }
  }
</style>
