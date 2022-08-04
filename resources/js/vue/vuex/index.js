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
                    this._vm.$toast.error(
                        "Error fetching products!\nCode: " + err.response.status
                    );
                });
        },
        installPlugin(context, payload) {
            axios
                .post("/api/plugin/install", {
                    plugin_id: payload,
                })
                .then((response) => {
                    context.commit(
                        "installPluginStore",
                        response.data.plugin_id
                    );
                    this._vm.$toast.success('Plugin installed successfully')
                })
                .catch((err) => {
                    //handle api error
                    this._vm.$toast.error(
                        "Error installing plugin!\nCode: " + err.response.status
                    );
                });
        },
        removePlugin(context, payload) {
            axios
                .post("/api/plugin/remove", {
                    plugin_id: payload,
                })
                .then((response) => {
                    context.commit(
                        "removePluginStore",
                        response.data.plugin_id
                    );
                    this._vm.$toast.success('Plugin removed successfully')
                })
                .catch((err) => {
                    //handle api error
                    this._vm.$toast.error(
                        "Error removing plugin!\nCode: " + err.response.status
                    );
                });
        },
    },
});
