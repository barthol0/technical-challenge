<template>
    <div class="plugin-wrapper">
        <span class="plugin-name">{{ name }}</span>

        <span class="plugin-brief">{{ brief }}</span>

        <div class="plugin-actions">
            <button
                v-if="installed"
                @click="removePlugin(puid)"
                class="btn green btn-remove"
            >
                <font-awesome-icon icon="fa-solid fa-check" />
            </button>
            <button
                v-else
                @click="installPlugin(puid)"
                class="btn green btn-install"
            >
                <font-awesome-icon icon="fa-solid fa-download" /> Install
            </button>
            <font-awesome-icon
                class="actions-menu"
                icon="fa-solid fa-ellipsis-vertical"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "PluginComponent",
    props: ["puid", "name", "brief", "installed"],
    methods: {
        installPlugin(puid) {
            this.$store
                .dispatch("installPlugin", puid)
                .then((res) => {
                    this.$toast.success("Plugin installed successfully");
                })
                .catch((err) => {
                    //handle api error
                    this.$toast.error(
                        "Error installing plugin!\nCode: " + err.status
                    );
                });
        },
        removePlugin(puid) {
            this.$store
                .dispatch("removePlugin", puid)
                .then((res) => {
                    this.$toast.success("Plugin removed successfully");
                })
                .catch((err) => {
                    // catch the error
                    this.$toast.error(
                        "Error removing plugin!\nCode: " + err.status
                    );
                });
        },
    },
};
</script>

<style scoped>
.plugin-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: -1px;
    padding: 12px;
}

.plugin-name {
    font-weight: bold;
}

.actions-menu {
    cursor: pointer;
    margin-left: 10px;
}

.btn {
    border: 3px solid black;
    background-color: white;
    color: black;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
}

.btn-remove:hover {
    border-color: red;
    color: white;
    background-color: red;
}
/* Green */
.green {
    border-color: #00d40e;
    color: #00d40e;
}

.btn-install:hover {
    background-color: #00d40e;
    color: white;
}
</style>
