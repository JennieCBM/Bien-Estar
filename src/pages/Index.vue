<template>
  <q-page>
    <conocenos />
    <especialidades />
  </q-page>
</template>

<script>
import conocenos from '../components/Conocenos.vue';
import especialidades from '../components/Especialidades.vue';
export default {
  name: 'PageIndex',
  mounted(){
  },
  components: {
    conocenos,
    especialidades
  }
}
</script>
<style>

</style>