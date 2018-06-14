<template>
    <ul class="ceping-item-list">
        <li v-for="item in data" @click="$router.push(item.path)">
            <img v-lazy="item.img" width="100%" height="100%">
            <div class="left">
                <h3>{{item.titlename}} </h3>
                <p class="text">{{item.note}}</p>
                <p class="description">
                    <span class="time">{{item.time}}</span>
                    <span class="num">浏览： <i>{{item.visited}}</i></span>
                </p>
            </div>
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
    .ceping-item-list {
        // margin-top:20px;
        padding-top: 20px;
        li {
            padding-bottom: 25px;
            padding-top: 20px;
            margin-top: 0;
            border-top: 1px solid #ccc;
            img {
                width: 242px !important;
                height: 142px !important;
                position: absolute;
                right: 0;
            }
            div.left {
                box-sizing: border-box;
                padding-right: 250px;
                h3 {
                    font-size: 30px;
                    padding-bottom: 8px;
                    span {
                        color: #ffab53;
                        padding: 0 3px 0 6px;
                    }
                }
                p.text {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size: 26px;
                }
                p.description {
                    color: #999999;
                    span.time {
                        font-size: 25px;
                    }
                    span.num {
                        font-size: 25px;
                        margin-left: 8px;
                        i {
                            font-style: normal;
                        }
                    }
                }
            }
        }
    }
</style>