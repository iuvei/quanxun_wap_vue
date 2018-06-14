<template>
    <ul class="toutiao-item-list">
        <li v-for="(item,index) in data" v-if="index==0" class="one" @click="$router.push('/discount/26')">
            <img :src="item.img" width="100%" height="100%">
            <h3 class="title">{{item.title}}</h3>
            <p class="note">{{item.note}}</p>
        </li>
        <li v-for="(item,index) in data" v-if="index>0" class="item" @click="$router.push('/news/'+index)">
            【{{item.title}}】{{item.note}}
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
</script>
<style lang="scss" scoped>
    .toutiao-item-list {
        margin-top: 23px;
        border-top: 1px solid #ccc;
        padding-top: 23px;
        li.one {
            img {
                width: 220px;
                height: 180px;
                float: left;
                margin-right: 15px;
            }
            h3.title {
                font-size: 1.1em;
                font-weight: 700;
                color: #c8700e;
                margin-bottom: 10px;
            }
            p.note {

            }
            margin-bottom: 35px;
        }
        li.item {
            // margin-top:10px;
            border-top: 1px solid #ccc;
            padding-top: 15px;
            padding-bottom: 15px;
        }

    }
</style>
