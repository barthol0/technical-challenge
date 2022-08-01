<template>
<div>
    <h1 class="text-center m-0">Astute Manager</h1>
<!--    swap this simple list for a plugin component-->
    <ul>
        <li v-for="plugin in plugins" :key="plugin.name">{{plugin.name}} - installed:<strong>{{plugin.installed}}</strong></li>
    </ul>
</div>
</template>

<script>


import {mapGetters} from "vuex";

export default {
    name: "AstuteManager",
    computed:{
        ...mapGetters({
            plugins: 'getProducts'
        })
    },
    created(){
        this.$store.dispatch('fetchProducts');
    }
}
</script>
