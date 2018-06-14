<template>
    <div>
        <swiper :options="swiperOption" class="play-swiper__list" ref="mySwiper" v-if="data">
            <swiper-slide>
                <div>
                    <a target="_blank" :href="url_four">
                        <p class="pic_text">体育赛事</p>
                        <img alt="" :src="pic_one">
                    </a>

                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <a target="_blank" :href="url_two">
                        <p class="pic_text">真人百家乐</p>
                        <img alt="" :src="pic_two">
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <a target="_blank" :href="url_three">
                        <p class="pic_text">彩票游戏</p>
                        <img alt="" :src="pic_three">
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <a target="_blank" :href="url_one">
                        <p class="pic_text">捕鱼王</p>
                        <img alt="" :src="pic_four">
                    </a>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <a target="_blank" :href="url_five">
                        <p class="pic_text">老虎机</p>
                        <img alt="" :src="pic_five">
                    </a>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>
<script>
    import {httpUrl, imgUrl} from "../../config/api.js";

    export default {
        data() {
            return {
                swiperOption: {
                    autoplay: false,
                    speed: 50,
                    slidesPerView: 2.3,
                    spaceBetween: 10
                },
                data: '',
                url_one: '',
                url_two: '',
                url_three: '',
                url_four: '',
                url_five: '',
                pic_one: '',
                pic_two: '',
                pic_three: '',
                pic_four: '',
                pic_five: ''
            }
        },
        created() {
            this.$http.get(httpUrl.domain_url).then(res => {
                if (res.status == 200) {
                    let data = res.data;
                    this.data = data
                    // 取里面的第二条到第六条数据
                    this.url_one = data[1].d_url
                    this.url_two = data[2].d_url
                    this.url_three = data[3].d_url
                    this.url_four = data[4].d_url
                    this.url_five = data[5].d_url

                    this.pic_one = imgUrl + data[1].c_image163x92
                    this.pic_two = imgUrl + data[2].c_image163x92
                    this.pic_three = imgUrl + data[3].c_image163x92
                    this.pic_four = imgUrl + data[4].c_image163x92
                    this.pic_five = imgUrl + data[5].c_image163x92
                }

            })

        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>
<style scoped>
    div {
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .pic_text {
        position: absolute;
        width: 100%;
        height: 35px;
        color: white;
        bottom: 6px;
        text-align: center;
        line-height: 35px;
        font-size: 22px;
        background: rgba(0, 0, 0, 0.7);
    }
</style>
