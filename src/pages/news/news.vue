<template>
    <div class="promo-page">
        <public-header>
            <i slot="left" class="back-icon" @click="$router.back(-1)"></i>
            <h3 slot="middle">资讯详情</h3>
        </public-header>
        <div class="promoDetail">
            <div class='box'>
                <h3 class='news_title'>{{news_detail.title}}</h3>
                <div class='news_pic'>
                    <img :src='news_detail.imgSrc'>
                </div>
                <div class='news_text'>
                    <p v-for="(item, index) in news_detail.text" :key="index">{{item}}</p>
                </div>
            </div>
        </div>
        <div class="link" @click="link('https://6686sky.me')">感兴趣？点击马上了解...</div>
    </div>
</template>

<script>
    import publicHeader from '@/components/public-header'
    import {news} from '@/config/news.js'

    export default {
        components: {
            publicHeader
        },
        data() {
            return {
                news,
                news_detail: []
            }
        },
        // watch: {
        //      $route() {
        //         let reg = /\/news_detail\/(\d+)/
        //          let num = this.$route.path.match(reg)[1]
        //          this.getData(num)
        //      }
        // },
        activated(){
            let num = this.$route.params.num
            this.getData(num);
        },
        methods: {
            getData(num) {
                let self = this
                /* self.$http.get('/static/news.json').then(function (res) {*/
                /* console.log(res.data.news[id])*/
                self.news_detail = news[num]
                /* })*/
            },
            link(e) {
                window.open(e, '_blank')
            }
        }

    }
</script>

<style>
    /*.promoDetail {
        padding-bottom: 60px;
    }*/

    .promoDetail .box,
    .list {
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
    }

    .promoDetail .box {
        padding: 100px 2% 5% 2%;
        padding-top: 100px;
        width: 100%;
    }

    h4.title {
        color: #d00;
        font-size: 30px;
        line-height: 56px;
        margin: 5px 0 15px;
    }

    .promotb {
        margin-bottom: 40px;
    }

    .promotb th {
        background: #b00;
        color: #ddd;
        border: 1px solid #ccc;
    }

    .promotb td,
    .promotb th {
        text-align: center;
        height: 60px;
        line-height: 60px;
    }

    .promotb td {
        border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
        background: #ddd;
        font-size: 24px;
    }

    .text li {
        font-size: 28px;
        list-style: none;
        line-height: 50px;
        margin-bottom: 16px;
    }

    .link {
        height: 80px;
        width: 100%;
        font-size: 28px;
        color: #cb7e1d;
        opacity: 0.9;
        border-top: 1px solid #cccccc;
        position: fixed;
        padding-left: 20px;
        bottom: 0rem;
        z-index: 1;
        background-color: white;
        line-height: 1.3rem;
        opacity: 0.9;
        line-height: 80px;
    }
</style>
