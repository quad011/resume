import '../public/assets/css/main.scss'

import { createApp } from 'vue'
// import { store } from './stores/app'
import App from './App.vue'
import router from './router'
// import PrismicVue from "@prismicio/vue";

// const endpoint = "https://resume-dc.cdn.prismic.io/api/v2";

const app = createApp(App)

// app.use(PrismicVue, {
//     endpoint,
//     apiOptions: { routes },
//   });

// app.use(store)

app.use(router)

app.mount('#app')
