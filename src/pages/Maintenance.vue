<template>
  <q-page class="flex flex-center">
    <div class="full-width">
      <q-img
          src="img\Pagina-en-mantenimiento.png"
          :ratio="16/9"
          width="100%"
        />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      sizeImage: window.innerWidth
    }
  }
})
</script>