<template>
  <q-page>
    <q-banner class="text-center text-dark text-uppercase" style="height: 23em; background: #eeeef6">
        <q-separator inset class="q-mt-xl " size="1px" style="margin-left: 25em; margin-right:25em"/>
      <div class="q-ma-lg">
          <div class="text-h4  text-bold text-center">
        Paciente María Pía
      </div>
      <br />
      <div class=" text-uppercase text-bold" style="font-size: 1.5em">
        Ahorro / precio justo
      </div>
      <div class="text-weight-light"  style="font-size: 1.5em">
          <q-icon name="img:img/Comillas_abiertas.png" size="3em" class="q-mr-lg " />
        ¡No pagues de más! paga lo justo por tu <span class="text-bold">Bien-Estar!</span>
            <q-icon name="img:img/Comillas_cerradas.png" size="3em" class="q-ml-lg " />
      </div>
      </div>
      <q-separator inset class="q-mb-xl q-mt-sm" size="1px" style="margin-left: 25em; margin-right:25em"/>
    </q-banner>
    <div class="row imagen_central q-pa-none">
        <div>test</div>
        <div class="marco-imagen_central" />
        <q-img 
            class="marco-imagen_central"
            src="img\flecha1.png"
            
        />
    </div>
    <div class="row bg-info" id="especialidades">
        <div></div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "Especialidades",
};
</script>
<style>
.imagen_central{
  background-image: url("../../public/img/Imagen_central.jpg");
  background-size:100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 60em;
  position: relative;

}
.marco-imagen_central{
   /* background-image: url("../../public/img/flecha1.png"); 
   background-repeat: no-repeat;
   background-size:100%; */
   width: 100vw;
   height: auto;
   position: absolute;
   right: 0;
   bottom: 0;
   z-index: 999;
   /* height: 80px; */
   
}
</style>
