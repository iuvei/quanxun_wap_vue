<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "App"
    };
</script>

<style lang="scss">
    @import "../src/assets/styles/reset";
    @import "../src/assets/styles/public";
    @import "../src/assets/styles/home";
    @import "../src/assets/styles/play";
</style>
