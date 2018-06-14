<template>
  <transition name="page-move">
    <router-view class="news-view"></router-view>
  </transition>
</template>
<style lang="scss" scoped>
 .news-view {
   // transform: translate3d(0, 0, 0)
 }
  .page-move-enter, .page-move-leave-active {
    transform: translate3d(100%, 0, 0)
  }
  .page-move-enter-active, .page-move-leave-active {
    transition: transform .3s
  }
</style>
