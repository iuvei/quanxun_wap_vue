<template>
  <a :href="current.url"  class="play-main__urls-item">
    {{current.title}}
  </a>
</template>
<script>
export default {
  props: {
    current: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
