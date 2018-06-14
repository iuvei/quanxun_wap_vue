<template>
    <ul class="home-sub-menu">
        <li v-for="(item, index) in data" :key="index" @click="$router.push(item.path)">
            <img v-lazy="item.img" alt="">
            <span>{{item.title}}</span>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            data: {
                type: Array,
                default: () => []
            }
        }
    }
    // @click="$router.push(item.path)当用户点击时，就是导航到item里面的path 路由去，类似于<router-link :to="...">*/
</script>
