import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Client from './layout/wrapper/index_client.vue'
import Auth from './layout/wrapper/Auth.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("client-layout", Client);
app.component("auth-layout", Auth);

app.use(VueSidebarMenu)

app.mount("#app")