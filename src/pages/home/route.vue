<template>
    <div class="news-container">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <footer-menu/>
    </div>
</template>
<script>
    import footerMenu from '@/components/footer-menu'

    export default {
        components: {
            footerMenu
        }
    }
</script>
