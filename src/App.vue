<template>
  <router-view v-if="appload"/>
</template>
<script>
import {Loading} from 'quasar';
import debounce from 'lodash/debounce'
export default {
  name: 'App',
  data(){
    return{
      appload:false
    }
  },
  mounted() {
    Loading.show()
      this.$nextTick(debounce(() => {
          this.appload = true;
          Loading.hide()
      }, 250)) 
  },
}
</script>
<style>

</style>
