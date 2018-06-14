<template>
    <div class="promo-page">
        <public-header>
            <i slot="left" class="back-icon" @click="$router.back(-1)"></i>
            <h3 slot="middle">优惠详情</h3>
        </public-header>
        <div class="promoDetail">
            <div class="box" v-if="this.c_name">
                <h3>[{{c_name}}]{{a_title}}</h3>
                <div class="company_name"><span>公司:{{c_name}}</span><span>活动时间：{{a_starttime}} 到 {{a_endtime}}</span></div>

                <div class="discount_text" v-html="this.a_content_info"></div>
            </div>
        </div>
        <div class="link" @click="link('https://6686sky.me')">感兴趣？点击马上了解...</div>
    </div>
</template>
<script>
    import publicHeader from "@/components/public-header";
    import {httpUrl, imgUrl} from "../../config/api.js";
    // import {promoListData} from '@/config/promoListData.js'
    export default {
        components: {
            publicHeader
        },
        data() {
            return {
                isShowDialog: false,
                dialogContent: "",
                listId: "",
                httpUrl,
                imgUrl,
                a_content_info: '',
                a_title: '',
                a_starttime: '',
                a_endtime: '',
                c_name: ""
            };
        },
        activated() {
            this.request_content();
        },
        methods: {
            link(e) {
                window.open(e, "_blank");
            },
            request_content() {
                let id = this.$route.params.a_id
                this.$http({
                    method: "get",
                    url: httpUrl.recommend_url,
                    params: {id: id}
                }).then(res => {
                    if (res.status == 200) {
                        let data = eval(res.data)
                        let a_content_info = data.r_content;
                        this.a_title = data.r_title
                        this.a_starttime = data.r_start_time.slice(0, 10)
                        this.a_endtime = data.r_end_time.slice(0, 10)
                        this.c_name = data.c_name
                        if (!a_content_info) {
                            this.a_content_info = '暂无数据';
                            return
                        }
                        var new_pattern = `src=\"http://quanxun_admin.leyoule1.com`;
                        a_content_info = a_content_info.replace(/src=\"/g, new_pattern);
                        this.a_content_info = a_content_info;
                    }
                })
                // this.$http({
                //     method: "get",
                //     url: httpUrl.view_url,
                //     params: {id: id}
                // });
            }
        }
        // ,
        // watch: {
        //     $route() {
        //         let reg = /\/promoDetail\/(\d+)/
        //         let id = this.$route.path.match(reg)[1]
        //         this.getData(id)
        //     }
        // },
        // methods: {
        //     // getData(a_content_info) {
        //     //     let self = this;
        //     //     this.a_content_info =
        //        /* self.$http.get('/src/config/promoList.json').then(function (res) {*/
        //            /* console.log(res.data.promoDetail[id])
        //             console.log(self.$route.params.id)*/
        //             self.promoDetail = promoListData.promoDetail[id]
        //       /*  })*/
        //     }
        // }
    };
</script>
<style>
    .promoDetail {
        width: 100%;
    }
    .promoDetail .box {
        padding: 100px 1% 5% 1%;
        width: 100%;
    }
    .promoDetail h3 {
        text-align: center;
        margin-bottom: 0.3rem;
        margin-top: 15px;
        font-size: 36px;
        font-weight: 700;
        color: #333333;
    }
    .promoDetail .box,
    .list {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
    .promoDetail img {
        width: 80%;
        margin-left: 5%;
        margin-top: 20px;
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
    .discount_text {
        margin-bottom: 80px;
    }
    .discount_text table {
        margin: 0 auto;
    }
    .discount_text table td,
    .discount_text table th {
        text-align: center;
        height: 60px;
        line-height: 60px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .discount_text table td {
        font-size: 24px;
    }

    .discount_text .sub-title {
        font-size: 30px;
        color: #dd0000;
        margin-bottom: 15px;
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

    .discount_text table thead {
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        border: 1px solid #cccccc;
    }

    .discount_text table tbody td {
        background: #dddddd;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
    }

    .discount_text p {
        line-height: 50px;
        font-size: 28px;
    }

    .company_name {
        position: relative;
        font-size: 28px;
        color: #666666;
        margin-bottom: 0.5rem;
    }

    .company_name span:nth-child(2) {
        position: absolute;
        right: 0;
        top: 0;

    }
</style>
