
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Statues from './components/Statues.vue';
import Statue from './components/Statue.vue';
import StatueEdit from './components/StatueEdit.vue';
import Paintings from './components/Paintings.vue';
import Painting from './components/Painting.vue';
import PaintingEdit from './components/PaintingEdit.vue';


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/statues',
    component: Statues
  },
  {
    path: '/statues/:id',
    component: Statue
  },
  {
    path: '/statues/:id/edit',
    component: StatueEdit
  },
  {
    path: '/paintings',
    component: Paintings
  },
  {
    path: '/paintings/:id',
    component: Painting
  },
  {
    path: '/paintings/:id/edit',
    component: PaintingEdit
  },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')