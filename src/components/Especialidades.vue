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
            <div class="text-h4 text-bold text-center">Paciente María Pía</div>
            <br />
            <div class="text-uppercase text-bold" style="font-size: 1.5em">
              Ahorro / precio justo
            </div>
            <div class="text-weight-light" style="font-size: 1.5em">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              ¡No pagues de más! paga lo justo por tu
              <span class="text-bold">Bien-Estar!</span>
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
            class="text-uppercase text-bold text-white"
            style="font-size: 2.1em" 
            >
              Conoce nuestras unidades de atencion integral
            </div>
            <div class="q-mt-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa in debitis quas amet, saepe veniam, explicabo voluptatum libero et minima? Veniam laudantium illo blanditiis enim dolorum architecto consequuntur magni.
            </div>
          </div>
        </div>
      </div>
      

      <div class="marco-imagen_central" />
      <q-img class="marco-imagen_central" src="img\flecha1.png" />
    </div>
    <!-- Listas de especialidades 1-->
    <div class="row bg-info q-pb-none">
      <div class="col-3 text-h6 text-weight-light">
        <q-list dense padding class="rounded-borders" style="padding: 40% 0 0 20%">
          <q-item>
              - Psiquiatría
          </q-item>
          <q-item>
              - Psicología
          </q-item>
          <q-item>
              - Psiquiatría infantil y adolescencia
          </q-item>
          <q-item>
              - Psicología infantil y adolescencia
          </q-item>
          <q-item>
              - Psicología diversidad e identidad de género
          </q-item>
        </q-list>
      </div>
      <div class="col-3 ">
        <q-list dense padding class="rounded-borders text-h6 text-weight-light" style="padding: 40% 0 0 10%; max-width: 80%">
          <q-item>
              - Nutrición
          </q-item>
          <q-item>
              - Nutrición y bienestar integral infantil y adolescencia
          </q-item>
          <q-item>
              - Nutrición y bienestar integral Mujer
          </q-item>
          <q-item>
              - Nutrición y bienestar integral Deportistas
          </q-item>
        </q-list>
      </div>
      <div class="col-6">
          
        <q-img
            class="q-mt-xl overflow-normal"
            style="left:15%"
            src="img\Eat.jpg"
            :ratio="16/18"
            width="60%"
            >
              <div 
            class="absolute-top bg-positive"
            style="
            height: 4em;
            width: 120%;
            left: 20%;
            top: -5%;"
            />
            </q-img>
      </div>
    </div>
    <!-- Listas de especialidades 2-->
    <div class="row bg-info q-pb-xl">
      <div class="col-6 ">          
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
            height: 4em;
            width: 100%;
            left: -20%;
            top: -5%;"
            />
        </q-img>
      </div>
      <div class="col-3 text-h6 text-weight-light">
        <q-list dense padding class="rounded-borders" style="padding: 40% 0 0 20%">
          <q-item>
              - Reiki 
          </q-item>
          <q-item>
              - Masajes Integrales
          </q-item>
          <q-item>
              - Flores de Bach
          </q-item>
          <q-item>
              - Felicidad y Bienestar empresas
          </q-item>
          <q-item>
              - Talleres y charlas a medida
          </q-item>
        </q-list>
      </div>
      <div class="col-3 ">
        <q-list dense padding class="rounded-borders text-h6 text-weight-light" style="padding: 40% 0 0 10%; max-width: 80%">
          <q-item>
              - Obesidad integral 
          </q-item>
          <q-item>
              - Mindfullness
          </q-item>
          <q-item>
              - Fonoaudiología
          </q-item>
          <q-item>
              - Psicopedagogía
          </q-item>
          <q-item>
              - Mesoterapia
          </q-item>
        </q-list>
      </div>
    </div>
    <div id="especialidades"></div>
  </q-page>
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
