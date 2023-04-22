<template>
    <div>
        <div>
            <h1 class="text__test">這裡是首頁</h1>
            <h2>測試style</h2>
            <div>
                <NuxtLink to="/about">前往 About</NuxtLink>
                <NuxtLink to="/contact/#1">前往 Contact</NuxtLink>
            </div>
        </div>


        <button class="n-link-base" @click="$router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`)">
          Keyed child
        </button>
        <button class="n-link-base" @click="$router.push(`/parent/static-${(Math.random() * 100).toFixed()}`)">
          Non-keyed child
        </button>
        
        <AppAlert>
        This is an auto-imported component. 👌
        </AppAlert>
    </div>
</template>
<style lang="scss" scoped>
.text {
  &__test {
    background-color:cadetblue;
    color: white;
  }
}
</style>