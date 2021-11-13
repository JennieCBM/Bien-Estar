<template>
  <q-page :class="$q.platform.is.mobile ? 'page-mobile' : ''">
    <!-- Carousel Version desktop -->    
    <q-banner
    v-if="!$q.platform.is.mobile"
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
        <!-- <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-img 
            src="icons/Bien_Estar_PNG-01.png"
            :ratio="1" 
            width="10em" 
            style="filter: grayscale(1);"
          />
        </q-carousel-slide> -->
        <!-- <q-carousel-slide name="layers" class="column no-wrap flex-center">
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
        </q-carousel-slide> -->
      </q-carousel>
    </q-banner>


    <!-- Carousel Version mobile  -->
    <div v-if="$q.platform.is.mobile" class="text-center text-dark" style="height: 15em; background: #eeeef6">
      <q-carousel
        arrows
        control-color="dark"
        animated
        v-model="slide"
        class="bg-transparent q-pa-none q-ma-none"
        height="15em"
        infinite
        :autoplay="false"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="" style="max-width: 80%">
            <div class="text-h4 demi_bold text-center">Paciente María Pía</div>
            <br />
            <div class="text-uppercase demi_bold" style="font-size: 1.5em">
              Ahorro / precio justo
            </div>
            <div class="extra_light" style="font-size: 1.5em;">
              ¡No pagues de más! 
              <br>
              paga lo justo por tu
              <span class="demi_bold">Bien-Estar!</span>
            </div>
          </div>
        </q-carousel-slide>
        
        <!-- Nota: cada una de estas secciones (slide) es una pagina del carousel sugerencia: mantener el patrón-->

        <!-- <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="" style="max-width: 80%">
            <div class="text-h4 demi_bold text-center">Paciente María Pía</div>
            <br />
            <div class="text-uppercase demi_bold" style="font-size: 1.5em">
              Ahorro / precio justo
            </div>
            <div class="extra_light" style="font-size: 1.5em;">
              ¡No pagues de más! paga lo justo por tu
              <span class="demi_bold">Bien-Estar!</span>
            </div>
          </div>
        </q-carousel-slide> -->
      </q-carousel>
    </div>
    <!-- Imagen central - equipo medico - desktop -->
    <div v-if="!$q.platform.is.mobile" class="row imagen_central q-pa-none">
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
              Conoce nuestras unidades de atención integral
            </div>
            <div class="q-mt-lg extra_light text-white" style="max-width: 80%; font-size: 1.5em">
              Brindamos salud y bienestar integral a adultos niñas, niños y adolecentes en sus diferentes momentos de la vida.
            </div>
          </div>
        </div>
      </div>
      <div class="marco-imagen_central" />      
      <q-img class="marco-imagen_central" src="img\flecha1.png" />
    </div>
    <div v-if="$q.platform.is.mobile" class="bg-info">
      <q-img
        src="img\WEB-08.png"
        :ratio="16/10"
        width="100%"
        />
    </div>
  </q-page>
</template>
<script>
export default {
  name: "Carousel",
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
.imagen_central-mobile {
  background-image: url("../../public/img/Imagen_central_mobile.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 50em;
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
.page-mobile{
  min-height: auto !important;
}
</style>
