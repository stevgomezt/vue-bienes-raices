import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Firebase
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./config/firebase.js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// vuetify
const vuetify = createVuetify({
    components,
    directives,
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

//Vuefire
app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
});

app.mount("#app");
