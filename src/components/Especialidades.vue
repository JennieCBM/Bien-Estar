<template>
  <q-page>
    
    <q-banner
      class="text-center text-dark text-uppercase center-align"
      style="height: 23em; background: #eeeef6"
    >
      <q-carousel
        arrows
        control-color="dark"
        animated
        v-model="slide"
        height="23em"
        class="bg-transparent"
        style="z-index: 1000; max-width: 80%; margin: 0 auto"
        infinite
        :autoplay="false"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-separator
            inset
            class="q-mt-xl"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
          <div class="q-ma-lg">
            <div class="text-h4 demi_bold text-center">Paciente María Pía</div>
            <br />
            <div class="text-uppercase demi_bold" style="font-size: 1.5em">
              Ahorro / precio justo
            </div>
            <div class="extra_light" style="font-size: 1.5em;">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              ¡No pagues de más! paga lo justo por tu
              <span class="demi_bold">Bien-Estar!</span>
              <q-icon
                name="img:img/Comillas_cerradas.png"
                size="3em"
                class="q-ml-lg"
              />
            </div>
          </div>
          <q-separator
            inset
            class="q-mb-xl q-mt-sm"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">test</div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
        </q-carousel-slide>
      </q-carousel>
    </q-banner>

    <!-- Imagen central - equipo medico -->
    <div class="row imagen_central q-pa-none">
      <div class="offset-6 col-6">
        <q-banner class="bg-primary q-mt-xl q-mr-xl " style="" />
        <div>
          <div style="
            max-width: 35em;
            margin: 8em 0 0 11em;
            ">
            <div 
            class="text-uppercase demi_bold text-white text-h4"
            style="line-height: 1em" 
            >
              Conoce nuestras unidades de atencion integral
            </div>
            <div class="q-mt-lg extra_light text-white" style="max-width: 80%; font-size: 1.5em">
              Brindamos salud y bienestar integral a niñas, niños y adolecentes.
            </div>
          </div>
        </div>
      </div>
      

      <div class="marco-imagen_central" />
      
      <q-img class="marco-imagen_central" src="img\flecha1.png" />
    </div>
    <!-- Listas de especialidades 1-->
    <div class="row bg-info q-pb-none extra_light text-body1" style="font-size: 1.8em; line-height: 1.3em">
      
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
    <!-- Listas de especialidades 2-->
    <div class="row bg-info extra_light text-body1" style="font-size: 1.8em; line-height: 1.3em; padding-bottom: 3em;">
      <div class="col-6">          
        <q-img
          class=" overflow-normal"
          style="left:15%; top: 0"
          src="img\Woman_3.jpg"
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
    <div id="especialidades"></div>
  </q-page>
  <div id="profesionales"></div>
</template>
<script>
export default {
  name: "Especialidades",
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
