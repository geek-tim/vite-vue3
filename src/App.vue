<script setup lang="ts">
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
</script>

<template>
    <div class="txt">{{ userStore.name }}</div>
    <RouterView />
</template>

<style lang="less" scoped>
#app {
    width: 100vw;
    height: 100vh;
}
.txt {
    color: @primary-color;
}
</style>
