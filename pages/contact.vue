<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

console.log('runtimeConfig:', runtimeConfig)
console.log('appConfig:', appConfig)
</script>

<template>
  <h1>{{ runtimeConfig.public.apiBase }}</h1>
  <h1>{{ appConfig.title }}</h1>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-rose-400">如果沒事不要找我 xDDD</h1>
      <p class="my-8 text-3xl text-gray-600">這裡是 /contact</p>
    </div>
  </div>
</template>