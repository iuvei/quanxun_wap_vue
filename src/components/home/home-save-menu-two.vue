<template>
    <ul class="save-menu-list-second">
        <li v-for="(item, index) in data" :key="index">
            <a target="_blank" :href="item.d_url">
                <div class="save-menu__media_second">
                    <img :src="`${imgUrl}${item.c_image163x92}`" width="100%" height="100%">
                </div>
                <div class="save-menu__body_second">
                    <div class="save-menu__body-title_second">
                        {{item.c_name}}
                        <img class="assure_pic_second" src="../../assets/images/assure.png" alt="" width="15" height="15">
                    </div>
                    <div class="save-menu__body-note_second">
                        已缴纳保障金
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>
<script>
    import {httpUrl, imgUrl} from "../../config/api.js";
    export default {
        data() {
            return {
                data: '',
                imgUrl
            }
        },
        created() {
            this.$http.get(httpUrl.domain_url).then(res => {
                if (res.status == 200) {
                    this.data = res.data
                }
            })
        }
    }
</script>
<style scoped>
    a {
        display: flex
    }
</style>
