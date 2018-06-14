<template>
    <ul class="save-menu-list">
        <!--<li v-for="(item, index) in data" :key="index">-->
        <!--<a target="_blank" href="#">-->
        <!--<div class="save-menu__media">-->
        <!--<img v-lazy="item.url" width="100%" height="100%">-->
        <!--</div>-->
        <!--<div class="save-menu__body">-->
        <!--<div class="save-menu__body-title">-->
        <!--{{item.title}}-->
        <!--</div>-->
        <!--<div class="save-menu__body-note">-->
        <!--{{item.note}}-->
        <!--</div>-->
        <!--</div>-->
        <!--</a>-->
        <!--</li>-->
        <li>
            <a target="_blank" :href="link_url_0">
                <div class="save-menu__media">
                    <img v-lazy="data[0].url" width="100%" height="100%">
                </div>
                <div class="save-menu__body">
                    <div class="save-menu__body-title">
                        {{data[0].title}}
                    </div>
                    <div class="save-menu__body-note">
                        {{data[0].note}}
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a target="_blank" :href="link_url_1">
                <div class="save-menu__media">
                    <img v-lazy="data[1].url" width="100%" height="100%">
                </div>
                <div class="save-menu__body">
                    <div class="save-menu__body-title">
                        {{data[1].title}}
                    </div>
                    <div class="save-menu__body-note">
                        {{data[1].note}}
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a target="_blank" :href="link_url_2">
                <div class="save-menu__media">
                    <img v-lazy="data[2].url" width="100%" height="100%">
                </div>
                <div class="save-menu__body">
                    <div class="save-menu__body-title">
                        {{data[2].title}}
                    </div>
                    <div class="save-menu__body-note">
                        {{data[2].note}}
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a target="_blank" :href="link_url_3">
                <div class="save-menu__media">
                    <img v-lazy="data[3].url" width="100%" height="100%">
                </div>
                <div class="save-menu__body">
                    <div class="save-menu__body-title">
                        {{data[3].title}}
                    </div>
                    <div class="save-menu__body-note">
                        {{data[3].note}}
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a target="_blank" :href="link_url_4">
                <div class="save-menu__media">
                    <img v-lazy="data[4].url" width="100%" height="100%">
                </div>
                <div class="save-menu__body">
                    <div class="save-menu__body-title">
                        {{data[4].title}}
                    </div>
                    <div class="save-menu__body-note">
                        {{data[4].note}}
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a target="_blank" :href="link_url_5">
                <div class="save-menu__media">
                    <img v-lazy="data[5].url" width="100%" height="100%">
                </div>
                <div class="save-menu__body">
                    <div class="save-menu__body-title">
                        {{data[5].title}}
                    </div>
                    <div class="save-menu__body-note">
                        {{data[5].note}}
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>
<script>
    import {httpUrl, imgUrl} from "../../config/api.js";

    export default {
        props: {
            data: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                httpUrl,
                imgUrl,
                link_url_0:'',
                link_url_1:'',
                link_url_2:'',
                link_url_3:'',
                link_url_4:'',
                link_url_5:''
            }
        },
        methods: {

            /*点击跳到6686hk.net*/
            link(e) {
                window.open(e, '_blank')
            }
        },
        created() {
            this.$http.get(httpUrl.domain_url).then(res => {
                if (res.status == 200) {
                    let link_url_data = res.data
                    this.link_url_0 = link_url_data[0].d_url
                    this.link_url_1 = link_url_data[1].d_url
                    this.link_url_2 = link_url_data[2].d_url
                    this.link_url_3 = link_url_data[3].d_url
                    this.link_url_4 = link_url_data[4].d_url
                    this.link_url_5 = link_url_data[5].d_url

                }
            })
        }
    }
</script>
<style scoped>
    a {
        display: flex;
    }
</style>
