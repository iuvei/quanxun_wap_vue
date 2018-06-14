<template>
    <div class="news-container__footer">
        <router-link to="/" active-class="home-active" exact class="footer-home">
            <i></i>
            <h3>首页</h3>
        </router-link>
        <router-link to="/assure" active-class="assure-active" class="footer-assure">
            <i></i>
            <h3>担保</h3>
        </router-link>
        <router-link to="/discount" class="footer-discount" active-class="discount-active">
            <i></i>
            <h3>优惠</h3>
        </router-link>
        <router-link to="/play" class="footer-play" active-class="play-active">
            <i></i>
            <h3>娱乐城</h3>
        </router-link>
    </div>
</template>
