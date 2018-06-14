<template>
    <div class="home-container" style="background: white">
        <public-header>
            <i slot="left" class="back-icon" @click="$router.back(-1)"></i>
            <h3 slot="middle">搜索结果</h3>
        </public-header>
        <div class="play-container">
            <!--<div class="play-search">-->
            <!--<img v-lazy="require('../assets/images/search_.png')" alt="" />-->
            <!--<input type="search" placeholder="新会员体育首投，红利100%高达588元！">-->
            <!--</div>-->
            <div class="play-hot">
                <!--<div class="play-hot__title" @click="link_second('https://6686sky.me')">-->
                <!--<img src="../assets/images/banner01.png" alt="" width="100%" height="100%">-->
                <!--</div>-->
                <!--<play-swiper />-->
                <p>相关企业</p>
                <home-save-menu-two :data="saveMenuList_second"/>
            </div>
        </div>
        <!--空隙部分-->
        <div class="space"></div>

        <!--担保页面活动部分-->
        <div class="activity">
            <p>相关内容</p>
            <ul v-for="(item, index) in activities" :key="index">
                <router-link :to="{name:'DiscountDetail',params:{a_content_info:item.a_content_info,a_title:item.a_title,a_id:item.a_id}}" class="clearfix">
                    <li>
                        <div>
                            <p class="title">
                                [{{item.c_name}}] {{item.a_title}}
                            </p>
                            <p class="count">
                                {{item.a_starttime}} 浏览:{{item.a_page_views}}
                            </p>
                        </div>
                        <div>
                            <img v-lazy="`${imgUrl}${item.a_image240x130}`" width="100%" height="100%">
                        </div>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    import {httpUrl, imgUrl} from "../config/api.js";
    import publicHeader from "@/components/public-header";
    import homeSaveMenuTwo from "@/components/home/home-save-menu-two";
    import playSwiper from "@/components/home/play-swiper";
    import {saveMenuList_second} from "@/config/home.conf";

    export default {
        components: {
            publicHeader,
            playSwiper,
            homeSaveMenuTwo
        },
        data() {
            return {
                saveMenuList_second,
                activities: "",
                httpUrl,
                imgUrl
            };
        },
        methods: {
            link_second(e) {
                window.open(e, "_blank");
            }
        },
        created() {
            this.$http.get(httpUrl.activity_url).then(res => {
                if (res.status == 200) {
                    var data = res.data;
                    var data = data.us;
                    var data = data.slice(0, 4); //取前4个数据
                    this.activities = data;

                }
            });
        }
    };
</script>
<style scoped>
    .play-hot{
        border-top: 1px solid #e4e4e4;
        margin-top: 15px;
    }
    .play-hot p{
        font-size: 30px;
        font-weight: 700;
        width: 95%;
        margin: 20px auto;
    }
    .activity {
        width: 100%;
        border-top: 1px solid #e4e4e4;
    }
    .activity > p {
        width: 90%;
        margin: 20px auto;
        font-size: 30px;
        font-weight: 700;
    }
    .activity li {
        height: 150px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 10px;
    }
    .activity li .title {
        font-size: 30px;
        color: #414141;
    }
    .activity li .count {
        font-size: 20px;
        color: #666666;
        margin-top: 20px;
    }
    .activity li > div:nth-child(1) {
        width: 60%;
        height: 50px;
    }
    .activity li > div:nth-child(2) {
        width: 240px;
        height: 130px;
    }
    .space {
        width: 100%;
        height: 10px;
        background: #f2f2f2;
    }
</style>
