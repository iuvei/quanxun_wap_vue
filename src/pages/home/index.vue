<template>
    <div class="home-container">
        <header class="news-header">
            <div class="news-header__left">
                <img src="../../assets/images/logo.png" class="logo">
            </div>
            <div class="news-header__middle">
                <!-- 模态框部分 -->
                <!-- 按钮 -->
                <img v-lazy="require('../../assets/images/search.png')" alt="" @click="show()"/>
                <!-- 点击之后出现的框 -->
                <dia-log v-show="showmodal" @fireclose="showmodal = false"/>
            </div>
            <div class="news-header__right"></div>
        </header>
        <main class="news-wrapper">
            <public-swiper/>
            <div class="home-notice" style="color:#666666;font-size: 14px;" @click="$router.push('/notice')">
                <img src="../../assets/images/notice.png"/>
                <div id="box">
                    <ul id="con1" ref="con1" :class="{anim:animate==true}">
                        <li v-for='item in items'>{{item}}</li>
                    </ul>
                </div>
            </div>
            <home-sub-menu :data="subTitleList"/>
            <div class="home-save-content">
                <div class="home-item__title">
                    <div class="home-item__title-left">
                        <i></i>
                        <h3>顶级安全平台</h3>
                    </div>
                    <div class="home-item__title-right">
                        <router-link to="/assure">更多</router-link>
                        <i></i>
                    </div>
                </div>
                <home-save-menu :data="saveMenuList"/>
            </div>
            <!-- 顶级安全平台结束 -->

            <!-- 今日头条开始 -->
            <div class="home-toutiao-content">
                <div class="home-toutiao_title">
                    <i></i>
                    <h3>今日头条</h3>
                </div>
                <div class="home-item__title-right">
                    <router-link to="/news">更多</router-link>
                    <i></i>
                </div>
                <home-toutiao-item v-bind:data="toutiaoItemList"/>
            </div>
            <!-- 今日头条结束 -->
            <!-- 娱乐城开始 -->
            <div class="home-play-content">
                <div class="home-item__title">
                    <div class="home-item__title-left">
                        <i></i>
                        <h3>娱乐城</h3>
                        <span>点击直达频道</span>
                    </div>
                    <div class="home-item__title-right">
                        <router-link to="/play">更多</router-link>
                        <i></i>
                    </div>
                </div>
                <div class="play-swiper">
                    <play-swiper/>
                </div>
            </div>

            <!-- 热门赛事 -->
            <div class="home-sports-content">
                <div class="home-item__title">
                    <div class="home-item__title-left">
                        <i></i>
                        <h3>热门赛事</h3>
                    </div>
                    <div class="home-item__title-right">
                        <span style="color: #999999" @click="link('https://6686sky.me')">更多</span>
                        <i></i>
                    </div>
                </div>
                <home-hot-match/>
            </div>
            <!-- banner -->
            <div class="home-banner" @click="link_second('https://6686sky.me')">
                <img src="../../assets/images/banner01.png" alt="" width="100%" height="100%">
            </div>
            <!-- 优惠活动 -->
            <div class="home-discount-content">
                <div class="home-item__title">
                    <div class="home-item__title-left">
                        <i></i>
                        <h3>优惠活动</h3>
                    </div>
                    <div class="home-item__title-right">
                        <router-link to="/discount">更多</router-link>
                        <i></i>
                    </div>
                </div>
                <div class="play-swiper">
                    <play-swiper-huodong/>
                </div>
            </div>
            <div class="home-ceping-content">
                <div class="home-ceping__title">
                    <div class="home-ceping__title-left">
                        <i></i>
                        <h3>优秀测评</h3>
                    </div>
                    <!--<div class="home-item__title-right">
                        <router-link to="/ceping"> 更多</router-link>
                        <i></i>
                    </div>-->
                    <home-ceping-item v-bind:data="cepingItemList"/>
                </div>
            </div>
        </main>
        <main class="news-footer"></main>
        <alert-notice v-if="show_notice" @move_="move_"/>
    </div>
</template>
<script>
    import {httpUrl} from "../../config/api.js";
    import publicSwiper from "@/components/public-swiper";
    import homeSubMenu from "@/components/home/home-sub-menu";
    import homeSaveMenu from "@/components/home/home-save-menu";
    import homeHotMatch from "@/components/home/home-hot-match";
    import playSwiper from "@/components/home/play-swiper";
    import playSwiperHuodong from "@/components/home/play-swiper-huodong";
    import homeToutiaoItem from "@/components/home/home-toutiao-item";
    import homeCepingItem from "@/components/home/home-ceping-item";
    import diaLog from "@/components/dialog";
    import alertNotice from "@/components/alert_notice";
    import sliceStrToArray from '../../utils/sliceStrToArray.js'
    import {
        subTitleList,
        saveMenuList,
        toutiaoItemList,
        cepingItemList
    } from "@/config/home.conf";

    export default {
        components: {
            publicSwiper,
            homeSubMenu,
            homeSaveMenu,
            homeHotMatch,
            playSwiper,
            playSwiperHuodong,
            homeToutiaoItem,
            homeCepingItem,
            diaLog,
            alertNotice
        },
        data() {
            return {
                httpUrl,
                subTitleList,
                saveMenuList,
                toutiaoItemList,
                cepingItemList,
                showmodal: false,
                show_notice: true,
                animate: false,
                items: []//消息列表对应的数组
            };
        },
        created() {
            let home_notice = '';
            this.$http.post(httpUrl.notice_url).then(res=>{
                if (res.status==200){
                    home_notice = res.data.b_content_info
                    // 公告滚动
                    let items = [];
                    items.push(home_notice)
                    let result = []
                    items.forEach((item) => {
                        result.push(...sliceStrToArray(item, 25))  //sliceStrToArray(item,20)返回一个数组
                    });
                    this.items = result;
                    setInterval(this.scroll, 1500); // 控制公告滚动的速度
                }
            })


        function a() {
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        resolve(111)
                    },2000)
                })

        };
        async function b() {
               console.log(await a())
            console.log(222222)
        }
        b();


        },
        methods: {
            // 点击之后出现模态框
            show() {
                this.showmodal = true;
            },
            link(e) {
                window.open(e, "_blank");
            },
            link_second(e) {
                window.open(e, "_blank");
            },
            scroll() {
                this.animate = true;
                setTimeout(() => {
                    this.items.push(this.items[0]);
                    this.items.shift();
                    this.animate = false; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
                }, 1000);
            },
            // 滚动条可以滚动
            move_() {
                this.show_notice = false
                // var mo = function (e) {
                //     e.preventDefault();
                // };
                // document.body.style.overflow = '';//出现滚动条
                // document.removeEventListener("touchmove", mo, false);
            }
        }
    };
</script>
<style scoped>
    #box {
        width: 95%;
        height: 62px;
        line-height: 62px;
        overflow: hidden;
        padding-left: 30px;
        padding-right: 30px;
        transition: all 0.5s;
    }

    .anim {
        transition: all 1.5s;
        margin-top: -62px;
    }

    #con1 li {
        list-style: none;
        line-height: 62px;
        height: 62px;
        font-size: 26px;
    }

    /*弹出层样式*/
    .swal2-close {
        width: 50px !important;
        height: 50px !important;
    }
</style>
