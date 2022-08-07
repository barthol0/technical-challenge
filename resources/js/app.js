require('./bootstrap');

import Vue from 'vue';
import store from './vue/vuex';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck, faX, faDownload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(faCheck, faX, faDownload, faEllipsisVertical)

Vue.component('astute-manager', require('./vue/components/AstuteManager').default);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Toast, {
    timeout: 2000,
});

const vm = new Vue({
    store,
    el: '#app'
});
