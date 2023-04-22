<template>
    <div>
      Child reloaded: {{ reloads }}
      <br>
      TEST ID: {{ $route.params.id }}
    </div>
</template>
  
<script setup>
const reloads = useState('reload', () => 0)
onMounted(() => { reloads.value++ })
</script>