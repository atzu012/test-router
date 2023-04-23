<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

console.log('runtimeConfig:', runtimeConfig)
console.log('appConfig:', appConfig)


function hash() {
  return window.location.hash.replace(/^#/, '')
}

onBeforeMount(() => {
  console.log('1 onBeforeMount hash:', hash())
})

onMounted(() => {
  console.log('2 onMounted hash:', hash())
})

onBeforeUpdate(() => {
  console.log('3 onBeforeUpdate hash:', hash())
})

onUpdated(() => {
  console.log('4 onUpdated hash:', hash())
})

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