import Vue from 'vue'
import App from './App.vue'
// import CommitInfo from './components/CommitInfo.vue'
// import HellWorld from './components/HelloWorld.vue'
//import VueRouter from 'vue-router'
import router from './router'

//Vue.use(VueRouter);

Vue.config.productionTip = false

// const router = new VueRouter({
//   routes: Routes,
//   mode: 'history'
// });

// const routes = {
//   '/': HellWorld,
//   '/repositories/:owner/:repository/commit/:commitSHA': CommitInfo
// }
//  '/repositories/:owner/:repository/commit/:commitSHA': CommitInfo

//const NotFound = { template: '<p>Page not found</p>' }
//const Home = { template: '<p>home page</p>' }

new Vue({
  // data: {
  //   currentRoute: window.location.pathname
  // },
  // computed: {
  //   ViewComponent () {
  //     return routes[this.currentRoute] || NotFound
  //   }
  // },
  // render (h) { return h(this.ViewComponent) },
  router,
  render: h => h(App),
}).$mount('#app')
