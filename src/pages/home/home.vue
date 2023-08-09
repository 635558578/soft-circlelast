<!-- home页面 推荐排序 -->
<script setup lang="ts">
import { onShow } from "@dcloudio/uni-app"
import tabBar from '@/components/tab-bar/tab-bar.vue'

onShow(() => {
  uni.hideTabBar()
})

</script>

<template>
  <view class="home">
    <h2>home页面</h2>
    <tabBar />
  </view>
</template>

<style lang="scss" scoped>

</style>
