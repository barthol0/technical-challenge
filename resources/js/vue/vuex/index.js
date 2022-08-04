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
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/products.json")
                    .then((response) => {
                        resolve(response);
                        commit("storeProducts", response.data.products);
                    })
                    .catch((err) => {
                        //handle api error
                        reject(err);
                    });
            });
        },
        installPlugin(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/plugin/install", {
                        plugin_id: payload,
                    })
                    .then((response) => {
                        context.commit(
                            "installPluginStore",
                            response.data.plugin_id
                        );
                        resolve(response);
                    })
                    .catch((err) => {
                        //handle api error
                        reject(err.response);
                    });
            });
        },
        removePlugin(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/plugin/remove", {
                        plugin_id: payload,
                    })
                    .then((response) => {
                        context.commit(
                            "removePluginStore",
                            response.data.plugin_id
                        );
                        resolve(response);
                    })
                    .catch((err) => {
                        //handle api error
                        reject(err.response);
                    });
            });
        },
    },
});
