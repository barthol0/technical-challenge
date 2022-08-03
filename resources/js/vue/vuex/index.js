import { reject } from "lodash";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
    },
    mutations: {
        storeProducts(state, data) {
            state.products = data;
        },
        installPluginStore(state, data) {
            state.products.find((x) => x.puid === data).installed = true;
        },
        removePluginStore(state, data) {
            state.products.find((x) => x.puid === data).installed = false;
        },
    },
    actions: {
        fetchProducts({ commit }) {
            axios
                .get("/api/products.json")
                .then((response) => {
                    commit("storeProducts", response.data.products);
                })
                .catch((err) => {
                    //handle api error
                    alert(err);
                });
        },
        installPlugin(context, payload) {
            return axios.post("/api/plugin/install", {
                    plugin_id: payload,
                })
                .then((response) => {
                    context.commit(
                        "installPluginStore",
                        response.data.plugin_id
                    );
                })
                .catch((err) => {
                    //handle api error
                    alert(err);
                });
        },
        removePlugin(context, payload) {
            axios.post("/api/plugin/remove", {
                    plugin_id: payload,
                })
                .then((response) => {
                    context.commit(
                        "removePluginStore",
                        response.data.plugin_id
                    );
                })
                .catch((err) => {
                    //handle api error
                    alert(err);
                });
        },
    },
});
