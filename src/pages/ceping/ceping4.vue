<template>
    <div class="promo-page">
        <public-header>
            <i slot="left" class="back-icon" @click="$router.back(-1)"></i>
            <h3 slot="middle">测评详情</h3>
        </public-header>
        <div class="cepingDetail">
            <ul v-for="(item,index) in cepingDetailData" v-if="index==3">
                <li class="cepingDetail-content">
                    <h3>{{item.head.titlename}}</h3>
                    <div class="tuwen">
                        <img src="../../assets/images/cepingxq04.png">
                        <div class="right-wrap">
                            <h4>{{item.head.caipiao}}</h4>
                            <div class="game">
                                <span class="game-name">{{item.meta.name}}</span>
                                <span class="game-dot" v-for="(i,index) in item.meta.gamelist">{{i}}</span>
                            </div>
                            <div class="plat">
                                <span class="plat-name">{{item.plat.name}}</span>
                                <span class="plat-dot" v-for="(j,index) in item.plat.platlist">{{j}}</span>
                            </div>
                            <div class="youshi">
                                <span v-for="(h,index) in item.describe">{{h}}</span>
                            </div>
                        </div>
                    </div>
                    <!--<div class="score">
                        <div class="score-single" v-for="(f,index) in item.scoretag">
                            <span class="name">{{f}}：</span>
                            <img src="">
                            <span class="score">9.0分</span>
                        </div>
                    </div>  -->
                    <div class="content">
                        <h4 style="font-weight: bold">{{item.scoretag[0]}}</h4>
                        <p>{{item.content1}}</p>
                        <p>{{item.content2}}</p>
                        <p>{{item.content3}}</p>
                        <p>{{item.content4}}</p>
                        <p>{{item.content5}}</p>
                        <p>{{item.content6}}</p>
                        <p>{{item.content7}}</p>
                        <h4 style="font-weight: bold">{{item.scoretag[1]}}</h4>
                        <p>{{item.content8}}</p>
                        <p>{{item.content9}}</p>
                        <p>{{item.content10}}</p>
                        <p>{{item.content11}}</p>
                        <p>{{item.content12}}</p>
                        <p>{{item.content13}}</p>
                        <p>{{item.content14}}</p>
                        <h4 style="font-weight: bold">{{item.scoretag[2]}}</h4>
                        <p>{{item.content15}}</p>
                        <p>{{item.content16}}</p>
                        <p>{{item.content17}}</p>
                        <p>{{item.content18}}</p>
                        <p>{{item.content19}}</p>
                        <p>{{item.content20}}</p>
                        <h4 style="font-weight: bold">{{item.scoretag[3]}}</h4>
                        <p>{{item.content21}}</p>
                        <h4 style="font-weight: bold">{{item.scoretag[4]}}</h4>
                        <p>{{item.content22}}</p>
                        <h4 style="font-weight: bold">{{item.scoretag[5]}}</h4>
                        <p>{{item.content23}}</p>
                        <h4 style="font-weight: bold">{{item.scoretag[6]}}</h4>
                        <p>{{item.content24}}</p>

                    </div>
                    <div class="liaojie" @click="link('https://6686sky.me')">{{item.liaojie}}</div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import publicHeader from '@/components/public-header'
    import {cepingDetailData} from '@/config/home.conf'

    export default {
        components: {
            publicHeader,
        },
        data() {
            return {
                isShowDialog: false,
                dialogContent: '',
                cepingDetailData
            }
        },
        methods: {
            link(e) {
                window.open(e,'_blank')
            }
        }
    }

</script>
<style lang="scss" scoped>
    .cepingDetail {
        // background-color:#fff;
        // width:100%;
        // height:100%;
        overflow: auto;
        margin-top: 1.2rem;
        padding-bottom: 3rem;
        .cepingDetail-content {
            padding: 0.2rem 0rem 0 0rem;
            background: #f2f2f2;
            h3 {
                font-size:38px;color: #333333;
                padding-left: 20px;
                span.pingce {
                    color: #f6ad48;font-size: 38px;
                }
            }
            .tuwen {
                margin-top: 0.2rem;
                padding-left: 20px;
                img {
                    width: 244px;
                    height: 198px;
                    position: absolute;
                }
                .right-wrap {
                    padding-left: 260px;
                    margin-left: 2px;
                    h4 {
                        color: #111;
                        font-size: 26px;
                    }
                    .game {
                        margin-top: 10px;
                        .game-name {
                            font-size: 0.3rem;
                            color: #000;
                            font-weight: bold;
                        }
                        .game-dot {
                            background-color: #eb9B28;
                            margin: 0 1%;
                            padding: 5px 10px;
                            color: #fff;
                            font-size: 0.3rem;
                        }
                    }
                    .plat {
                        margin-top: 16px;
                        .plat-name {
                            font-size: 0.3rem;
                            color: #000;
                            font-weight: bold;
                        }
                        .plat-dot {
                            background-color: #eb9B28;
                            margin: 0 1%;
                            padding: 2px 12px;
                            color: #fff;
                            font-size: 0.3rem;
                        }
                    }
                    .youshi {
                        margin-top: 10px;
                        box-sizing: border-box;
                        padding-left: 0.9rem;
                        position: relative;
                        span:first-child {
                            font-size: 0.3rem;
                            margin-right: 14px;
                            position: absolute;
                            left: 0;
                            color: #000;
                            font-weight: bold;
                        }
                        span:last-child {
                            font-size: 0.3rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            width: 100%;
                            display: inline-block;
                        }
                    }
                }
            }
            .score {
                margin-top: 40px;
                overflow: hidden; // height:100px;
                .score-single {
                    float: left;
                    width: 49%;
                    span.name {
                        font-size: 0.3rem;
                        float: left;
                        width: 4em;
                    }
                    img {
                        width: 47%;
                        height: 34px;
                        background-color: #ccc;
                    }
                    img:before {
                        content: '';
                        width: 20%;
                        background-color: orange;
                        height: 34px;
                        position: absolute;
                        left: 1;
                    }
                    span.score {
                        color: red;
                        font-size: 0.3rem;
                        vertical-align: top;
                        line-height: 0.5rem;
                    }
                }
                .score-single:first-child, .score-single:nth-child(3) {
                    span.name {
                        width: 3em;
                    }
                }
            }
            .content {
                text-indent: 2em;
                line-height: 1.6;
                margin-top: 50px;
                background: #f2f2f2;
                font-size: 24px;
                padding: 20px;


                p {
                    margin: 0.5rem 0;
                }
            }
            .liaojie {
                height: 80px;
                width: 100%;
                font-size:28px;color: #cb7e1d;opactiy:0.95;
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
        }
    }

    .cepingDetail:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: -1;
    }
</style>