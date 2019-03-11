// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import jQuery from 'jquery';
import Interceptor from './services/Interceptor';
import apiPath from './configApi';
// import BootstrapVue from 'bootstrap-vue';
// import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';

// CSS
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/sass/main.scss';

// Components
import App from './App.vue';
import Home from './components/Home.vue';
import NotFound from './components/404.vue';
// Vue.component('b-navbar', bNavbar);

// JS
import 'bootstrap';
global.$ = jQuery;
Vue.config.productionTip = false;
axios.defaults.baseURL = apiPath.apiPath;

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(VueAxios, axios);
Vue.use(Interceptor);
// Vue.use(BootstrapVue);

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home, name: 'home', meta: {requiresVisitors: true}},
        {path: '*', component: NotFound, name: '404'}
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth1) {
        /* const authUser = JSON.parse(window.localStorage.getItem('authUser'));
        console.log(authUser);
        if (authUser && authUser.access_token) {
            next();
        } else {
            next({name: 'login'});
        } */
    } else if (to.meta.requiresVisitors) {
        /* const authUser = JSON.parse(window.localStorage.getItem('authUser'));
        if (authUser && authUser.access_token) {
            next({name: 'company'});
        } else {
            next();
        } */
    }
    next();
});
/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
