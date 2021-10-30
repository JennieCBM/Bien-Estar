<template>
  <q-page>
    <conocenos />
    <especialidades/>
    <enlaces/>
    <contactenos/>
  </q-page>
</template>

<script>
import conocenos from '../components/Conocenos.vue';
import especialidades from '../components/Especialidades.vue';
import enlaces from '../components/Enlaces.vue';
import contactenos from '../components/Contactenos.vue';
export default {
  name: 'PageIndex',
  mounted(){
  },
  components: {
    conocenos,
    especialidades,
    enlaces,
    contactenos
  }
}
</script>
<style>

</style>