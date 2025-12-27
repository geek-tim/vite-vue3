<!-- plugins/counter/index.vue -->
<template>
    <div class="counter">
        <p data-value="value">计数: {{ count }}</p>
        <button data-btn="add" @click="increment">+1</button>
        <button data-btn="sub" @click="decrement">-1</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
    count.value++
}

function decrement() {
    count.value--
}
</script>
