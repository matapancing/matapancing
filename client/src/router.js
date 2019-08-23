import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    { //----------
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "home" */ './components/Login.vue'),
    },
    //----------------
    {
      path: '/quizzes/:qid',
      name: 'quizzes',
      component: () => import(/* webpackChunkName: "quizzes" */ './views/quizzes.vue'),
      children: [{
        path: ':id',
        name: 'question',
        component: () => import(/* webpackChunkName: "question" */ './components/quizbox.vue')
      }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import(/* webpackChunkName: "rank" */ './views/rank.vue'),
    },
    {
      path: '/rooms',
      name: 'room',
      component: () => import(/* webpackChunkName: "room" */ './views/RoomList.vue'),
    },
  ],
});
