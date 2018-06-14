<template>
    <div class="home-container">
        <public-header>
            <!-- <i slot="left" class="back-icon"></i> -->
            <h3 slot="middle">资讯</h3>
        </public-header>
        <div class="play-container">

            <div class="play-search">
                <img v-lazy="require('../../assets/images/search.png')" alt=""/>
                <input type="search" placeholder="新会员体育首投，红利100%高达588元！">
            </div>
            <p>热门娱乐城</p>
            <div class="play-hot">
                <div class="play-hot__imgs">
                    <play-swiper/>
                </div>
            </div>
            <div class="promo-box">
                <ul class="promo-list" v-for="(item, index) in news" :key="index">
                    <h2 class="promo-type" v-if="item.type">{{item.type}}</h2>
                    <li>
                        <router-link :to="'/news/'+item.num" class="clearfix">
                            <div class="img68"><img v-lazy="item.imgSrc"></div>
                            <div class="promo-info">
                                <h5>{{item.title}}</h5>
                                <p>{{item.content}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import publicHeader from '@/components/public-header'
    import playSwiper from '@/components/home/play-swiper'
    /* eslint-disable */
    export default {
        components: {
            publicHeader,
            playSwiper
        },
        data() {
            return {
                isShowDialog: false,
                dialogContent: '',
                news: [
                    {
                        num: 0,
                        imgSrc: require('../../assets/images/news01.jpg'),
                        title: 'HG6686AG电子游戏XIN哥送您9999纯金币',
                        content: 'AG国际 XIN Gaming 隆重推出“XIN哥来了”老虎机游戏！XIN哥将于活动时间内，在“XIN哥来了”游戏中豪洒9999纯金币。'
                    },
                    {
                        num: 1,
                        imgSrc: require('../../assets/images/news02.jpg'),
                        title: '东南亚博彩市场博华太平洋高级副总裁看好越南',
                        content: '点击查看详细内容'
                    },
                    {
                        num: 2,
                        imgSrc: require('../../assets/images/news03.jpg'),
                        title: '标题：滚球必定有进球法则：什么时候进球最多',
                        content: '滚球有必定进球法则吗？在足球预测方面，大部分下注在这项运动上的选择都与比赛的胜者有关，据了解，足球下注者喜欢支持其中一支球队，然后紧张地坐在电视机前观看比赛，并希望他们投入资金的球队将获胜。'
                    },
                    {
                        num: 3,
                        imgSrc: require('../../assets/images/news04.jpg'),
                        title: '赛马投注的领跑者PMU看到亚洲赛马市场的增长',
                        content: '点击查看详细内容'
                    },
                    {
                        num: 4,
                        imgSrc: require('../../assets/images/news05.jpg'),
                        title: '西班牙博彩市场调查：球迷对博彩赞助球队没有敌意',
                        content: '在斯坦福桥投注足球会议的开幕当天，一位专家小组就他们对西班牙赌博市场的看法以及西班牙观众的看法'
                    },
                    {
                        num: 5,
                        imgSrc: require('../../assets/images/news06.jpg'),
                        title: '巴拉圭批准了有争议的体育博彩垄断许可证',
                        content: '点击查看活动内容'
                    }
                    ]
            }
        }
    }
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
        font-size: 18px;

        color: #333333;
        margin: 20px 0 10px 15px;
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
        content: '';
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
        margin-bottom: 5px;
        color: #6e6e6e;
        font-size: 25px;
        color: #333;
    }

    .promo-list li p {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        overflow: hidden;
        color: #666;
    }
</style>
