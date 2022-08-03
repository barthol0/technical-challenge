require('./bootstrap');

import Vue from 'vue';
import store from './vue/vuex';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck, faDownload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faDownload, faEllipsisVertical)

Vue.component('astute-manager', require('./vue/components/AstuteManager').default);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const vm = new Vue({
    store,
    el: '#app'
});
