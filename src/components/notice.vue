<template>
    <div class="home-container" style="background: white">
        <public-header>
            <i slot="left" class="back-icon" @click="$router.back(-1)"></i>
            <h3 slot="middle">公告中心</h3>
        </public-header>
        <div class="all_notice">
            <ul>
                <li v-for="item in notices">
                    <h4>{{item.time}}</h4>
                    <p>{{item.content}}</p>
                </li>
            </ul>


        </div>
    </div>
</template>
<script>
    import publicHeader from "@/components/public-header";
    export default {
        components: {
            publicHeader,

        },
        data() {
            return {
                notices: [
                    {
                        time: '2017-07-12',
                        content: '尊敬的客戶請留意,目前皇冠或現金網站较多,為了避免給您造成不必要的損失,請謹慎選擇品牌有實力的公司进行投注。',
                    }
                ]
            };
        },
        methods: {

        },
        created() {

        }
    };
</script>
<style scoped>
    .all_notice{
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        margin-top: 1.4rem;
    }
    .all_notice li{
        border-bottom: 1px solid #cccccc;
        padding-bottom: 15px;
    }
    .all_notice h4{
        font-size: 28px;
        color: #999999;
    }
    .all_notice p{
        font-size: 28px;
        color: #333333;
    }

</style>
