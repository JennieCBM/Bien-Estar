<template>
  <q-page class="text-dark">
    <!-- Seccion A desktop-->
    <div class="conocenos" v-if="!$q.platform.is.mobile" >
      <q-card
        class="my-card bg-transparent text-dark conocenos_mensaje no-shadow"
      >
        <q-card-section class="q-pb-md">
          <div class="text-h3 text-uppercase demi_bold">Bienestar al</div>
          <div class="text-h3 text-uppercase demi_bold">alcance de todos</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h4 text-uppercase extra_light text-dark">
            Lo que hacemos
          </div>
          <div class="extra_light" style="font-size: 1.3em">
            Entregar
            <span class="demi_bold">bienestar y salud integral</span> con los
            más altos estándares de calidad junto a especialistas calificados,
            con innovación constante en nuestro portafolio de servicios,
            <span class="demi_bold">a un precio justo.</span>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn color="dark" dense rounded  class="demi_bold q-ml-xs" size="md" @click="goToAbout"
            >Conócenos</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>

    <!-- Seccion A mobile-->
    <div class="" v-if="$q.platform.is.mobile">
      <q-img 
        src="img/background_yoga_mobile.png"
        width="100%"
      />
    </div>

    <!-- Seccion B -->
    <!-- b-1 -->
    <div style="background: transparent;" >
      <div class="row text-center center-align">
        <div class="col-xs-12 col-sm-12 col-md-7 q-pa-none">
          <q-img
            :class="$q.platform.is.mobile? 'q-mt-md q-mb-md' : 'q-mt-xl q-mb-xl'"
            :style="$q.platform.is.mobile? '' : $q.platform.is.ipad? 'left:5%;' : 'left:5%'"
            src="img\Family_orange.png"
            :ratio="16/12"
            :width="$q.platform.is.mobile? '100%' : '80%'"
            />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 " style="display: flex; flex-direction: column;  align-items: left; justify-content: center">
          <q-card
          class="
            my-card
            text-dark            
            no-shadow
          "
          >
            <q-card-section class="q-pb-none q-ma-none">
              <div class="text-h4 text-uppercase demi_bold q-pb-md" :class="$q.platform.is.mobile? 'responsive-lg-text text-center' : $q.platform.is.ipad? 'responsive-lg-text text-center' : 'text-left'">
                ¿Qué nos motiva?
              </div>
            </q-card-section>
            <q-card-section class="q-ma-none extra_light responsive-md-text" :style="$q.platform.is.mobile? 'width:100%;' : $q.platform.is.ipad? 'width:100%; font-size: 2em;' : 'max-width: 58%;'">
              <div :class="$q.platform.is.mobile? 'text-center' : $q.platform.is.ipad? 'text-center' : 'text-left'">
                Tu <span class="demi_bold">Bien-Estar</span> en las diferentes etapas de tu vida.
              </div>
              <div class="q-mt-md" :class="$q.platform.is.mobile? 'text-center q-mb-lg' : $q.platform.is.ipad? 'text-center q-mb-lg' : 'text-left'">
                Mejorar tu calidad de vida fisico y emocional.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
  <!-- b-2 desktop-->
      <div v-if="$q.platform.is.desktop" class="row q-pl-xl " style="max-height: 24.4em">
        <q-card
          class="
            col-4
            my-card
            text-dark
            profesionalismo_mensaje
            no-shadow
          "
          style=" 
            margin-top: 5em;
            max-height: 15em
            "
        >
          <q-card-section class="q-pb-none ">
            <div class="text-h4 text-uppercase demi_bold text-center">
              Profesionalismo
            </div>
          </q-card-section>
          <q-card-section style="font-size: 1.5em; ">
            <div class="extra_light text-center">
              Especialistas altamente capacitados,
              <br />
              honestos y comprometidos.
            </div>
          </q-card-section>
        </q-card>
        <div class="col-8 q-pa-none" style="display: flex; flex-direction: column;  align-items:center; justify-content: center">
          <q-img
            style="top:-25%; opacity: .8"
            class=""
            src="img\Hands_yellow.png"
            :ratio="16/12"
            width="70%"
            />
        </div>
      </div>
    </div>

<!-- Seccion B mobile and ipad-->
  <div v-if="$q.platform.is.mobile" class="">
    <!-- b2 mobile -->
    <div class="row">
      <!-- imagen solo para mobile -->
      <div class="col-xs-12 col-sm-12 col-md-0 q-pa-none" style="display: flex; flex-direction: column;  align-items:center; justify-content: center">
          <q-img
            style=""
            class=""
            src="img\Hands_yellow.png"
            :ratio="16/12"
            width="100%"
            />
      </div>
      <!-- card mobile and ipad -->
      <div class="col-xs-12 col-sm-12 col-md-6 q-pt-xl q-pb-xl text-dark">
        <q-card flat class="q-ma-none q-pa-none text-center bg-transparent">
          <q-card-section class="q-pb-none ">
            <div class="responsive-lg-text text-uppercase demi_bold ">
              Profesionalismo
            </div>
          </q-card-section>
          <q-card-section style="">
            <div class="extra_light text-center text-body1 responsive-md-text">
              Especialistas altamente capacitados,
              <br />
              honestos y comprometidos.
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- imagen solo ipad -->
      <div class="col-xs-0 col-md-6 q-pa-none " style="position: relative; display: flex; flex-direction: column;  align-items:center; justify-content: center; ">
          <q-img
            style="position: absolute; top:-25%; opacity: .8"
            class=""
            src="img\Hands_yellow.png"
            :ratio="16/11.6"
            width="100%"
            />
        </div>
    </div>
  </div>
    <!-- banner amarillo -->
    <q-banner  class="bg-primary text-center text-dark q-mt-xs" style="height: 15em; ">
      <div class="text-h4 text-uppercase demi_bold text-center ">
        Clientes Satisfechos
      </div>
      <br>
      <div class="extra_light" style="font-size: 1.5em">
          Descubre cómo encontrar tu  
            <span class="demi_bold">Bien-Estar</span>
            integral 
          </div>
          <div class="extra_light" style="font-size: 1.5em">junto a nosotros brindando experiencias memorables.</div>
    </q-banner>
  </q-page>
</template>
<script>
import {Loading} from "quasar";
export default {
  name: "Conocenos",
  mounted(){
  },
  methods:{
    async goToAbout(){
      this.$emit('AboutLayout');
    }
  }
};
</script>
<style>
.conocenos {
  background-image: url("../../public/img/background_yoga.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 155vh;
  border: solid 1px transparent;
}
.conocenos-ipad {
  background-image: url("../../public/img/background_yoga.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 42em;
  border: solid 1px transparent;
}
.conocenos-mobile {
  background-image: url("../../public/img/background_yoga.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  border: solid 1px transparent;
}
.conocenos_mensaje {
  max-width: 33em;
  left: 8%;
  margin-top: 20em;
}
.profesionalismo_mensaje {
  left: 8%;
}
.title_mobile{
  font-size: 200%;
}
.subtitle_mobile{
  font-size: 100%;
}
</style>
