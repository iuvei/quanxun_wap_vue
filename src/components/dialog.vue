<template>
    <div class="dialog is-active">
        <div class="mask"></div>
        <div class="dialog-content">
            <div class="btn-group">
                <img src="../assets/images/search.png" class="search" @click="$router.push('/Search_result')">
                <input type="search" placeholder="已收录 1008 家博彩平台与公司"  autofocus/>
                <button class="btn" @click="$emit('fireclose')">取消</button>
            </div>
            <div class="hot-search">
                <h3>热门搜索</h3>
                <ul>
                    <li><span>6686</span></li>
                    <li><span>优惠活动</span></li>
                    <li><span>最新资讯</span></li>
                    <li><span>新年活动红包</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
    .dialog {
        width:100%;
        position:relative;
        z-index:1000;
        .dialog-content{
            position: fixed;
            width: 100%;
            height: 200px;
            font-size: 0.5rem;
            color: #fff;
            left: 0;
            top: 0;
            .btn-group{
                height: 1.6rem;
                background: #383838;
                box-sizing: border-box;
                padding-left: 0.3rem;
                padding-right: 1.3rem;
                img{
                    width: 0.5rem;
                    height: 0.5rem;
                    position: absolute;
                    left: 0.4rem;
                    top: 0.6rem;
                }
                input{
                    width: 100%;
                    border:1px solid #f9c457;
                    border-width:2px;
                    background:#383838;
                    border-radius:10px;
                    height:1rem;
                    margin-top:0.3rem;
                    caret-color:#f6ad48;
                    padding-left: 1rem;
                }
                button{
                    color:#f6ad48;
                    background:0 none;
                    border:0 none;
                    position:absolute;
                    right:0.2rem;
                    top:38px;
                    font-size:.4rem;
                }
            }
            .hot-search{
                h3{
                    border-bottom:1px solid #eee;
                    padding-bottom:10px;
                    text-align:left;
                    font-size:0.4rem;
                    padding: 0.3rem 0;
                    margin: 0 0.3rem;
                }
                ul{
                    margin: 0 0.3rem;
                    li{
                        padding: 0.1rem 0.2rem;
                        float:left;
                        border:2px solid #ccc;
                        border-radius:5px;
                        // background-color:red;
                        margin-right: 0.26rem;
                        margin-top:0.3rem;
                        font-size:0.4rem;
                    }
                }
            }

        }
        .mask{
            position:fixed;
            top:0;
            left:0;
            bottom:0;
            right:0;
            // z-index:0;
            background:rgba(0,0,0,.8);
        }
    }
</style>