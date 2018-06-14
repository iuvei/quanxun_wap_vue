<template>
    <div class="home-container">
        <public-header>
            <!-- <i slot="left" class="back-icon"></i> -->
            <h3 slot="middle">娱乐城</h3>
        </public-header>
        <!-- 点击搜索按钮之后出现的框 -->
        <dia-log v-show="showmodal" @fireclose="showmodal = false"/>
        <div class="play-container">
            <div class="play-search">
                <img v-lazy="require('../../assets/images/search_.png')" alt="" @click="show()"/>
                <input type="search" placeholder="新会员体育首投，红利100%高达588元！" @click="show()">
            </div>
            <div class="play-hot">
                <div class="play-hot__title">
                    <p>热门娱乐城</p>
                </div>
                <div class="play-hot__imgs">
                    <play-swiper/>
                </div>
            </div>
            <!--<div class="play-main">
                <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
                    <tab class="play-main__tabs" bar-active-color="#cb731d" active-color="#cb731d" :line-width="1" v-model="setTabIndex">
                        <tab-item selected>热搜</tab-item>
                        <tab-item>现金</tab-item>
                        <tab-item>足球</tab-item>
                        <tab-item>彩票</tab-item>
                        <tab-item>赛马</tab-item>
                        <tab-item>真人视讯</tab-item>
                    </tab>
                </div>
                <swiper :options="swiperOption" ref="swiper">
                    <swiper-slide v-for="i in 6" :key="i">
                        <div class="play-main__urls" ref="mainUrls">
                            <button-link v-for="i in 40" :current="{title: '皇冠', url: 'http://www.google.com'}" :key="i"></button-link>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>-->
            <!--优秀测评-->
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


        </div>
    </div>
</template>
<script>
    import publicHeader from '@/components/public-header'
    import playSwiper from '@/components/home/play-swiper'
    import homeCepingItem from '@/components/home/home-ceping-item'
    import {cepingItemList} from '@/config/home.conf'
    import diaLog from "@/components/dialog";
    /* import buttonLink from '@/components/button-link'*/
    /*import {Tab, TabItem} from 'vux'*/

    export default {
        components: {
            publicHeader,
            playSwiper,
            homeCepingItem,
            diaLog

            /* buttonLink,
             Tab,
             TabItem*/
        },
        computed: {
            /*setTabIndex: {
                get() {
                    return this.tabIndex
                },
                set(val) {
                    if (this.swiper.activeIndex > val) {
                        this.swiper.slidePrev()
                    } else if (this.swiper.activeIndex < val) {
                        this.swiper.slideNext()
                    }
                    console.log('tabs')
                    this.tabIndex = val
                }
            },*/
            swiper() {
                return this.$refs.swiper.swiper
            }
        },
        data() {
            /*const self = this*/
            return {
                cepingItemList,
                showmodal: false,
                tabIndex: 0,
                showmodal: false,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoHeight: true
                    /* on: {
                         slideChange() {
                             self.tabIndex = this.activeIndex
                         }
                     }*/
                }
            }
        },
        methods:{
            show() {
                this.showmodal = true;
            }
        }
    }
</script>
<style scoped>
    .play-hot__title p {
        width: 90%;
        font-size: 28px;
        color: #333333;
        margin: 20px 0 10px 0px;
    }

</style>
