<template>
  <q-page>    
    <!-- Listas de especialidades 1 desktop-->
    <div  v-if="!$q.platform.is.mobile" class="row bg-info q-pb-none extra_light text-body1" style="font-size: 1.8em; line-height: 1.3em">
        <div class="col-6 text-h4 demi_bold q-mt-xl text-dark" style="position:absolute; margin-left: 3em">
          Nuestros Servicios
        </div>
      <div class="offset-1 col-3">
        <q-list dense padding class="rounded-borders" style="padding: 40% 0 0 0%">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psiquiatría
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center ">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psiquiatría infantil y adolescencia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología infantil y adolescencia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología diversidad e identidad de género
          </q-item>
        </q-list>
      </div>
      <div class="col-3">
        <q-list dense padding class="rounded-borders" style="padding: 40% 0 0 0%">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición y bienestar integral infantil y adolescencia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición y bienestar integral Mujer
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición y bienestar integral Deportistas
          </q-item>
        </q-list>
      </div>
      <div class="col-5 q-pl-xl">
          
        <q-img
            class="q-mt-xl overflow-normal"
            style=""
            src="img\Eat.jpg"
            :ratio="11/13"
            width="80%"
            >
              <div 
            class="absolute-top bg-positive"
            style="
            height: 2em;
            width: 105%;
            left: 20%;
            top: -5%;"
            />
            </q-img>
      </div>
    </div>
    <!-- Listas de especialidades 2 desktop-->
    <div v-if="!$q.platform.is.mobile" class="row bg-info extra_light text-body1" style="font-size: 1.8em; line-height: 1.3em; padding-bottom: 3em;">
      <div class="col-6">          
        <q-img
          class=" overflow-normal"
          style="left:15%; top: 0"
          src="img\woman_3.jpg"
          :ratio="13/9"
          width="80%"
          >
            <div 
            class="absolute-top bg-primary"
            style="
            height: 2em;
            width: 100%;
            left: -20%;
            top: -5%;"
            />
        </q-img>
      </div>
      <div class="col-3">
        <q-list dense padding class="rounded-borders" style="padding: 30% 0 0 0">
          <q-item class="" style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Reiki 
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Masajes Integrales
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Flores de Bach
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Felicidad y Bienestar empresas
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Talleres y charlas a medida
          </q-item>
        </q-list>
      </div>
      <div class="col-3">
        <q-list dense padding class="rounded-borders" style="padding: 30% 0 0 0; ">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Obesidad integral 
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Mindfullness
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Fonoaudiología
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicopedagogía
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Mesoterapia
          </q-item>
        </q-list>
      </div>
    </div>

    <!-- Listas de especialidades 1 mobile -->
    <div  v-if="$q.platform.is.mobile" class="row bg-info q-pb-none extra_light text-body2" style="">
        <div class="col-12 text-h4 demi_bold q-mt-xl text-dark text-center" style="">
          Nuestros Servicios
        </div>
      <div class="col-6 q-mt-md q-pl-md demi_bold">
        <q-list dense padding class="rounded-borders" style="max-width: 90%">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psiquiatría
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center ">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psiquiatría infantil y adolescencia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología infantil y adolescencia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología diversidad e identidad de género
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición y bienestar integral infantil y adolescencia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición y bienestar integral Mujer
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición y bienestar integral Deportistas
          </q-item>
        </q-list>
      </div>
      <div class="col-6">          
        <q-img
            class="q-mt-md overflow-normal"
            style=""
            src="img\Eat.jpg"
            :ratio="16/22"
            width="100%"
            >
              <div 
            class="absolute-top bg-positive"
            style="
            height: 2em;
            width: 80%;
            left: 20%;
            top: -5%;"
            />
            </q-img>
      </div>
    </div>

    <!-- Listas de especialidades 2 mobile -->
    <div v-if="$q.platform.is.mobile" class="row bg-info extra_light text-body2 q-pt-xl q-pb-xl" style="">
      <div class="col-12 text-center">          
        <q-img
          class=" overflow-normal"
          src="img\woman_3.jpg"
          :ratio="13/9"
          width="80%"
          >
            <div 
            class="absolute-top bg-primary"
            style="
            height: 2em;
            width: 100%;
            left: -20%;
            top: -5%;"
            />
        </q-img>
      </div>
      <div class="col-6 q-pl-xl q-pt-lg demi_bold">
        <q-list dense padding class="rounded-borders" style="">
          <q-item class="" style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Reiki 
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Masajes Integrales
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Flores de Bach
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Felicidad y Bienestar empresas
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Talleres y charlas a medida
          </q-item>
        </q-list>
      </div>
      <div class="col-6 q-pt-lg demi_bold">
        <q-list dense padding class="rounded-borders" style="">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Obesidad integral 
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Mindfullness
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Fonoaudiología
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicopedagogía
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Mesoterapia
          </q-item>
        </q-list>
      </div>
    </div>
<!--     <div id="especialidades"></div> -->
  </q-page>
<!--   <div id="profesionales"></div> -->
</template>
<script>
export default {
  name: "EspecialidadesList",
  data() {
    return {
      slide: "style",
      autoplay: true,
    };
  },

};
</script>
<style>
.imagen_central {
  background-image: url("../../public/img/Imagen_central.jpg");
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 50em;
  position: relative;
}
.marco-imagen_central {
  width: 100vw;
  height: auto;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.overflow-normal{
  overflow: initial !important;
}
</style>
