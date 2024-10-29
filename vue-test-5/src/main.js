import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "@/TheHeader.vue";
import "./theme.css";


//App -> AppNews -> AppNewsList
//App -> AppNewsList - c  помощью параметра
const app = createApp(App);

//global
app.component("the-header", TheHeader);

app.mount("#app");



// $env:NODE_OPTIONS="--openssl-legacy-provider"
// npm run serve