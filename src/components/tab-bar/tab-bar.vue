<!-- tab-bar页面 底部导航栏 -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useMainStore } from '@/store/modules/main'

const mainStore = useMainStore()
const { currentBar } = storeToRefs(mainStore)
<<<<<<< HEAD
// console.log(currentBar.value)
=======
console.log(currentBar.value)
>>>>>>> a7dcd15 (软圈项目整合)

// tab-bar切换的处理函数
const changeCurrentBarHandle = (bar: string): void => {
  if (currentBar.value !== bar) {
    mainStore.changeCurrentBar(bar)
    let path: string = ''
    if (bar === 'divinatory-circle') {
      path = '/pages/home/home'
    } else if (bar === 'assist') {
      path = '/pages/order-receive/order-receive'
    } else if (bar === 'hot-search') {
      path = '/pages/hot-search/hot-search'
    } else if (bar === 'message') {
      path = '/pages/message/message'
    } else if (bar === 'me') {
      path = '/pages/me/me'
    }
<<<<<<< HEAD
    // console.log(path)
=======
    console.log(path)
>>>>>>> a7dcd15 (软圈项目整合)
    // uni.navigateTo({ url: path, animationType: 'none' })
		uni.switchTab({ url: path })
  }
}
</script>

<template>
  <view class="tab-bar">
    <view class="tab-bar-left">
      <view class="divinatory-circle item" :class="[ currentBar === 'divinatory-circle' ? 'active' : '' ]" @click="changeCurrentBarHandle('divinatory-circle')">
        <view class="divinatory-circle-icon"></view>
        <view class="divinatory-circle-text">卦圈</view>
      </view>
      <view class="assist item" :class="[ currentBar === 'assist' ? 'active' : '' ]" @click="changeCurrentBarHandle('assist')">
        <view class="assist-icon"></view>
        <view class="assist-text">匡助</view>
      </view>
    </view>
    <view class="tab-bar-center">
      <view class="center-inner">
        <view class="center-content" :class="[ currentBar === 'hot-search' ? 'active' : '' ]" @click="changeCurrentBarHandle('hot-search')">
          <view class="hot-search-icon"></view>
          <view class="hot-search-text">热搜</view>
        </view>
      </view>
    </view>
    <view class="tab-bar-right">
      <view class="message item" :class="[ currentBar === 'message' ? 'active' : '' ]" @click="changeCurrentBarHandle('message')">
        <view class="message-icon"></view>
        <view class="message-text">消息</view>
      </view>
      <view class="me item" :class="[ currentBar === 'me' ? 'active' : '' ]" @click="changeCurrentBarHandle('me')">
        <view class="me-icon"></view>
        <view class="me-text">咱的</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 130rpx;
  background-color: #ebe0c7;

  .tab-bar-center {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -40rpx;
    width: 144rpx;
    height: 144rpx;
    border-radius: 50%;
    background-color: #ebe0c7;

    .center-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 134rpx;
      height: 134rpx;
      border-radius: 50%;
      background-color: #dad5b4;

      .center-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        background-color: #94aa67;

        .hot-search-icon {
          width: 90rpx;
          height: 90rpx;
          background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/hot-search.png') 0rpx 0/90rpx no-repeat;
        }

        .hot-search-text {
          font-size: 24rpx;
        }

        &.active {
          .hot-search-icon {
            background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/hot-search-active.png') -4rpx 0/110rpx;
          }

          .hot-search-text {
<<<<<<< HEAD
            color: #e4dbbe;
=======
            color: #fff;
>>>>>>> a7dcd15 (软圈项目整合)
          }
        }
      }
    }
  }

  .tab-bar-left,
  .tab-bar-right {
    display: flex;
    justify-content: space-around;
    flex: 1;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 84rpx;
    height: 92rpx;

    view[class$="icon"] {
      width: 80rpx;
      height: 60rpx;
    }

    view[class$="text"] {
      font-size: 24rpx;
    }
  }

  .divinatory-circle-icon {
    background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/divinatory-circle.png') 6rpx 0/70rpx no-repeat;
  }

  .divinatory-circle.active {
    color: #94aa67;

    .divinatory-circle-icon {
      background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/divinatory-circle-active.png') 6rpx 0/70rpx no-repeat;
    }
  }

  .assist-icon {
    background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/assist.png') 14rpx 0/52rpx no-repeat;
  }

  .assist.active {
    color: #94aa67;

    .assist-icon {
      background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/assist-active.png') -2rpx -16rpx/90rpx no-repeat;
    }
  }

  .message-icon {
    background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/message.png') 6rpx 0/70rpx no-repeat;
  }

  .message.active {
    color: #94aa67;

    .message-icon {
      background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/message-active.png') -8rpx -14rpx/100rpx no-repeat;
    }
  }

  .me-icon {
    background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/me.png') 6rpx 0/70rpx no-repeat;
  }

  .me.active {
    color: #94aa67;

    .me-icon {
      background: url('https://pikacode.oss-cn-chengdu.aliyuncs.com/soft-circle/me-active.png') -8rpx -14rpx/100rpx no-repeat;
    }
  }
}
</style>
