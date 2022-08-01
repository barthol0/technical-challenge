require('./bootstrap');


import Vue from 'vue';
import store from './vue/vuex';

Vue.component('astute-manager', require('./vue/components/AstuteManager').default);

const vm = new Vue({
    store,
    el: '#app'
});
