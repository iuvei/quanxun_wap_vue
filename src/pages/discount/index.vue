<template>
    <div class="home-container">
        <public-header>
            <!-- <i slot="left" class="back-icon"></i> -->
            <h3 slot="middle">优惠</h3>
        </public-header>
        <!-- 点击搜索按钮之后出现的框 -->
        <dia-log v-show="showmodal" @fireclose="showmodal = false"/>
        <div class="play-container">
            <div class="play-search">
                <img v-lazy="require('../../assets/images/search_.png')" alt="" @click="show()"/>
                <input type="search" placeholder="新会员体育首投，红利100%高达588元！" @click="show()">
            </div>
            <p>热门娱乐城</p>
            <div class="play-hot">
                <div class="play-hot__imgs">
                    <play-swiper/>
                </div>
            </div>
            <div class="promo-box">
                <!-- 优惠种类 -->
                <ul class="promo-type">
                    <li @click="changeNav(index)" v-for="(item,index) in discount_all_types" :class="{'active':ind === index}">{{item}}优惠</li>
                </ul>

                <ul class="promo-list" v-if="show_index == 0" >
                    <li v-if="data_type_0.length == 0">
                        <p>暂无此类活动</p>
                    </li>
                    <li v-else v-for="item in data_type_0" :key="item.id">
                        <router-link :to="{name:'DiscountDetail',params:{a_id:item.a_id}}" class="clearfix">
                            <div class="img68"><img v-lazy="`${imgUrl}${item.a_image240x130}`"></div>
                            <div class="promo-info">
                                <h5>{{item.a_title}}</h5>
                                <p>{{item.a_introduction}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>

                <ul class="promo-list" v-if="show_index == 1" >
                    <li v-if="data_type_1.length == 0">
                        <p>暂无此类活动</p>
                    </li>
                    <li v-else v-for="item in data_type_1" :key="item.id">
                        <router-link :to="{name:'DiscountDetail',params:{a_id:item.a_id}}" class="clearfix">
                            <div class="img68"><img v-lazy="`${imgUrl}${item.a_image240x130}`"></div>
                            <div class="promo-info">
                                <h5>{{item.a_title}}</h5>
                                <p>{{item.a_introduction}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>

                <ul class="promo-list" v-if="show_index == 2" >
                    <li v-if="data_type_2.length == 0">
                        <p>暂无此类活动</p>
                    </li>
                    <li v-else v-for="item in data_type_2" :key="item.id">
                        <router-link :to="{name:'DiscountDetail',params:{a_id:item.a_id}}" class="clearfix">
                            <div class="img68"><img v-lazy="`${imgUrl}${item.a_image240x130}`"></div>
                            <div class="promo-info">
                                <h5>{{item.a_title}}</h5>
                                <p>{{item.a_introduction}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <ul class="promo-list" v-if="show_index == 3" >
                    <li v-if="data_type_3.length == 0">
                        <p>暂无此类活动</p>
                    </li>
                    <li v-else v-for="item in data_type_3" :key="item.id">
                        <router-link :to="{name:'DiscountDetail',params:{a_id:item.a_id}}" class="clearfix">
                            <div class="img68"><img v-lazy="`${imgUrl}${item.a_image240x130}`"></div>
                            <div class="promo-info">
                                <h5>{{item.a_title}}</h5>
                                <p>{{item.a_introduction}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <ul class="promo-list" v-if="show_index == 4" >
                    <li v-if="data_type_4.length == 0">
                        <p>暂无此类活动</p>
                    </li>
                    <li v-else v-for="item in data_type_4" :key="item.id">
                        <router-link :to="{name:'DiscountDetail',params:{a_id:item.a_id}}" class="clearfix">
                            <div class="img68"><img v-lazy="`${imgUrl}${item.a_image240x130}`"></div>
                            <div class="promo-info">
                                <h5>{{item.a_title}}</h5>
                                <p>{{item.a_introduction}}</p>
                            </div>
                        </router-link>
                    </li>

                </ul>

            </div>
        </div>
    </div>
</template>
<script>
    import {httpUrl, imgUrl} from "../../config/api.js";
    import publicHeader from "@/components/public-header";
    import playSwiper from "@/components/home/play-swiper";
    import diaLog from "@/components/dialog";
    /* eslint-disable */
    export default {
        components: {
            publicHeader,
            playSwiper,
            diaLog
        },
        data() {
            return {
                isShowDialog: false,
                dialogContent: "",
                discount_all_types: [],
                data_type_0: [],
                data_type_1: [],
                data_type_2: [],
                data_type_3: [],
                data_type_4: [],
                show_index: 0,
                showmodal: false,
                ind: 0,
                imgUrl
            };
        },
        created() {
            this.show_index = 0;
            this.ind = 0;
            this.$http.get(httpUrl.activity_all).then(res => {
                if (res.status == 200) {
                    let data = res.data.data;
                    this.data = data;
                    let discount_types = ['体育','真人','电子','彩票','其他'];
                    this.discount_all_types = discount_types;

                    let data_type_one = [];
                    let data_type_two = [];
                    let data_type_three = [];
                    let data_type_four = [];
                    let data_type_five = [];
                    data.forEach((item, index) => {
                        if (item.at_type == discount_types[0]) {
                            data_type_one.push(item);
                        } else if (item.at_type == discount_types[1]) {
                            data_type_two.push(item);
                        } else if (item.at_type == discount_types[2]) {
                            data_type_three.push(item);
                        } else if (item.at_type == discount_types[3]) {
                            data_type_four.push(item);
                        } else if (item.at_type == discount_types[4]) {
                            data_type_five.push(item);
                        }
                    });

                    this.data_type_0 = data_type_one;
                    this.data_type_1 = data_type_two;
                    this.data_type_2 = data_type_three;
                    this.data_type_3 = data_type_four;
                    this.data_type_4 = data_type_five;

                }
            });
        },
        methods: {
            changeNav: function (index) {
                //这种写法下面的this指向v.m 或者   changeNav(index) {
                this.ind = index;
                this.show_index = index;
            },
            show() {
                this.showmodal = true;
            }
            //  changeNav(index) {//这种写法下面的this指向v.m
            //   console.log(index);
            //   this.ind = index;
            //   this.show_index = index;
            // },

            // changeNav:(index)=>{ //这种写法不行
            //   console.log(index);
            //   this.ind = index;
            //   this.show_index = index;
            // }
        }
    };
</script>

<style scoped>
    .play-container > p {
        width: 90%;
        font-size: 28px;
        color: #333333;
        margin: 20px 0 10px 15px;
    }

    .promo-box {
        padding: 5px 0 80px 0;
    }

    .promo-type {
        font-size: 28px;
        color: #333333;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .promo-list li {
        position: relative;
        background-color: #fff;
        width: 100%;
        margin: 0 0 0 0;
        padding: 10px;
        color: #333;
        font-size: 16px;
        display: block;
    }

    .promo-list li:after {
        position: absolute;
        right: 25px;
        top: 70px;
        content: "";
        border: #dad9d9 solid;
        border-width: 2px 2px 0 0;
        width: 20px;
        height: 20px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .promo-list .content {
        height: 75px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
    }

    .promo-list {
        overflow: hidden;
    }

    .promo-list li:first-child {
        border-top: 0px;
    }

    .promo-list li {
        padding: 10px 0px;
        height: 170px;
        overflow: hidden;
        box-sizing: border-box;
        border: 1px solid #fff;
        border-bottom: 1px solid #ddd;
    }

    .promo-list li:hover {
        z-index: 1;
        /*box-shadow:0 0 4px red;*/
        border-color: #ff9200;
    }

    .promo-list li:first-child {
        border-top: 1px solid #fff;
    }

    .promo-list li:hover:first-child {
        border-top: 1px solid #ff9200;
    }

    .promo-list li a {
        display: block;
    }

    .promo-list li .img68 {
        margin-right: -68px;
        margin-left: 10px;
        float: left;
    }

    .promo-list li .img68 img {
        width: 240px;
        height: 130px;
        border-radius: 2px;
    }

    .promo-list li .promo-info {
        width: 64%;
        overflow: hidden;
        margin: 0 0 0 78px;
        float: left;
        -ms-text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .promo-list li h5 {
        width: 100%;
        margin-bottom: 5px;
        color: #6e6e6e;
        font-size: 30px;
        color: #333;

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .promo-list li p {
        line-height: 1.5em;
        font-size: 20px;
        color: #666;

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .active {
        color: #d6851e;
    }
</style>
