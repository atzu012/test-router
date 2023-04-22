<template>
    <div>
      Child reloaded: {{ reloads }}
      <br>
      TEST ID: {{ $route.params.id }}
    </div>
</template>
  
<script setup>
  const reloads = useState('static', () => 0)
  onMounted(() => { reloads.value++ })
  definePageMeta({
    key: 'static'
  })
</script>