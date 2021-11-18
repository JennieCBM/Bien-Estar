<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      appload:false
    }
  },
}
</script>
<style>
.normalize-font{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
}
</style>
