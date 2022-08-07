import { createApp } from "vue";
import App from "./App.vue";
import BaseSeparator from "./components/UI/BaseSeparator.vue";

const app = createApp(App);
app.component("base-separador", BaseSeparator);
app.mount("#app");
