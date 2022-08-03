<template>
    <div>
        <h1 class="text-center m-0">Astute Manager</h1>
        <PluginComponent
            v-for="item in plugins"
            :key="item.puid"
            :name="item.name"
            :brief="item.brief"
            :installed="item.installed"
            :puid="item.puid"
        ></PluginComponent>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PluginComponent from "./PluginComponent.vue";

export default {
    name: "AstuteManager",
    computed: {
        ...mapGetters({
            plugins: "getProducts",
        }),
    },
    created() {
        this.$store.dispatch("fetchProducts");
    },
    components: { PluginComponent },
};
</script>
