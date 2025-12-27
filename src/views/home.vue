<template>
    <div>HOME</div>
    <MouseTest />
    <Counter />
</template>

<script lang="ts" setup>
import API from '@/services'
import MouseTest from '@/components/mouse-test/index.vue'
import Counter from '@/components/counter/index.vue'

const login = async () => {
    let result = await API.login('zhangsan', '123456')
    return result
}

login()
</script>
