<template>
  <q-page>
    <conocenos />
    <especialidades />
    <enlaces />
  </q-page>
</template>

<script>
import conocenos from '../components/Conocenos.vue';
import especialidades from '../components/Especialidades.vue';
import enlaces from '../components/Enlaces.vue';
export default {
  name: 'PageIndex',
  mounted(){
  },
  components: {
    conocenos,
    especialidades,
    enlaces
  }
}
</script>
<style>

</style>