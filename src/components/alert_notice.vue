<template>
    <div class="alert_notice">
        <div class="alert_area">
            <swiper :options="swiperOption" class="alert_swiper" ref="mySwiper">
                <swiper-slide v-for="item in data" :key="item.id">
                    <a v-if="item.r_url" target="_blank" class="remommend_pic" :href="`${item.r_url}`"> <img :src="`${imgUrl}.${item.r_img}`" style="width: 100%; height: 100%"></a>
                    <a v-else target="_blank" class="remommend_pic" href="javascript:void(0)" @click="$router.push({name:'RecomendDetail',params:{a_id:item.r_id}})"> <img :src="`${imgUrl}.${item.r_img}`" style="width: 100%; height: 100%"></a>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="close" @click="$emit('move_')"></div>
        </div>
    </div>
</template>
<script>
    import {httpUrl, imgUrl} from "../config/api.js";

    export default {
        data() {
            return {
                data:'',
                httpUrl,
                imgUrl,
                swiperOption: {
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                }
            }
        },
        created() {
            this.$http.get(httpUrl.activity_recommend_url).then(res => {
                if (res.status == 200) {
                    if(res.data.length!=0){
                        let data = res.data;
                        this.data = data;
                    }else {
                        document.querySelector('.alert_notice').style.display='none';
                    }
                }
            })
                // 禁止滚动条滚动
                // this.stop_()

        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            // stop_() {
            //     var mo = function (e) {
            //         e.preventDefault();
            //     };
            //     document.body.style.overflow = 'hidden';
            //     document.addEventListener("touchmove", mo, false);//禁止页面滑动
            // },
        }
    }
</script>
<style scoped>
    .alert_notice {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.6);
    }

    .alert_area {
        width: 88%;
        position: absolute;
        height: 5.5rem;
        top: 25%;
        left:6%;
    }

    .swiper-button-prev {
        width: 60px;
        height: 60px;
        background-image: url("../assets/images/prev.png");
        background-size: 100% 100%;
        left: -60px;
        top: 60%;
    }

    .swiper-button-next {
        width: 60px;
        height: 60px;
        background-image: url("../assets/images/next.png");
        background-size: 100% 100%;
        right: -50px;
        top: 60%;
    }

    .close {
        position: absolute;
        width: 100px;
        height: 100px;
        background-image: url("../assets/images/close.png");
        background-size: 100% 100%;
        bottom:-120px;
        right: 280px;
        z-index: 100;
    }
    .remommend_pic{
        display: block;
        width: 100%;
        height: 5.5rem;
    }

    .swiper-button-next.swiper-button-disabled {
        opacity: 0;
    }

    .swiper-button-prev.swiper-button-disabled {
        opacity: 0;
    }

</style>