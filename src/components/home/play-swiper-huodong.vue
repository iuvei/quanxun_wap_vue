<template>
    <swiper :options="swiperOption" class="play-swiper__list" ref="mySwiper">
        <swiper-slide v-for="(item,index) in data" :key="index">
            <router-link :to="{name:'DiscountDetail',params:{a_id:item.a_id}}" class="clearfix">
                <img v-lazy="`${imgUrl}${item.a_image240x130}`" alt="" width="100%" height="100%">
            </router-link>
        </swiper-slide>
    </swiper>
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
                    spaceBetween: 10,
                    notNextTick: true
                },
                data: "",
                httpUrl,
                imgUrl
            };
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        created() {
            this.$http.get(httpUrl.activity_url).then(res => {
                if (res.status == 200) {
                    var data = res.data;
                    var data = data.us;
                    var data = data.slice(0, 4); //取前4个数据
                    this.data = data;
                }
            });
        }
    };
</script>

