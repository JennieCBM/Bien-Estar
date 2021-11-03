<template>
  <q-page>
    <conocenos 
    @AboutLayout="ChangeNavbar" id="conocenos"/>
    <especialidades/>
    <especialidades-list id="especialidades"/>
    <enlaces/>
    <contactenos id="contactenos"/>
  </q-page>
</template>

<script>
import conocenos from '../components/Conocenos.vue';
import especialidades from '../components/Especialidades.vue';
import enlaces from '../components/Enlaces.vue';
import contactenos from '../components/Contactenos.vue';
import especialidadesList from '../components/EspecialidadesList.vue';
export default {
  name: 'PageIndex',
  mounted(){
  },
  methods: {
    ChangeNavbar(){
      this.$emit('AboutLayout')
    },
  },
  components: {
    conocenos,
    especialidades,
    enlaces,
    contactenos,
    especialidadesList
  }
}
</script>
<style>

</style>