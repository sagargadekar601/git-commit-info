import Vue from "vue";
import Router from "vue-router";
import CommitInfo from './components/CommitInfo.vue'
import HellWorld from './components/HelloWorld.vue'
//import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "vue-school-active-class",
  routes: [
    {
      path: "/",
      name: "HellWorld",
      component: HellWorld
    },
    {
      path: "/repositories/:owner/:repository/commit/:commitSHA",
      name: "CommitInfo",
      component: CommitInfo
    }
  ],
  mode: 'history'
});
