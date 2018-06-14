<template>
    <swiper :options="swiperOption" class="home-banner__swiper" ref="mySwiper">
        <swiper-slide v-for="pic in pics" :key="pic.id">
            <a target="_blank" :href="`${pic.rm_url}`"><img :src="`${imgUrl}.${pic.rm_img}`" style="width: 100%; height: 100%"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
    import {httpUrl, imgUrl} from "../config/api.js";
    export default {
        name: 'carrousel',
        data() {
            return {
                pics:[],
                swiperOption: {
                    autoplay:3000,
                    autoplayDisableOnInteraction:false,
                    speed: 300,
                    spaceBetween: 0,
                    loop: true,
                    pagination: '.swiper-pagination'
                },
                httpUrl,
                imgUrl
            }
        },
        created(){
            this.$http.get(httpUrl.rotation_url_home).then(res=>{
                if(res.status == 200){
                   this.pics = res.data[0]
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
    .home-banner__swiper {
        height: 520px;
    }
    /* .swiper-pagination-bullet{

         background:#AAA8A8;
         width: 20px;
         height: 20px;
         border-radius: 50%;
     }
     .swiper-pagination-bullet-active{
         background: #ffffff;
         width: 20px;
         height: 20px;
         border-radius: 50%;
     }*/
</style>
