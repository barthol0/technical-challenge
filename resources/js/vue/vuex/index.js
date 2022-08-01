import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        getProducts(state){
            return state.products;
        }
    },
    mutations: {
        storeProducts(state, data) {
            state.products = data;
        }
    },
    actions: {
        fetchProducts({commit}) {
            axios.get('/api/products.json')
                .then(response => {
                    commit('storeProducts', response.data.products);
                })
                .catch(()=>{
                    //handle api error
                })
        }
    }
})
