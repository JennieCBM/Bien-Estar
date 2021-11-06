<template>
  <q-page>
    <!-- Seccion A desktop-->
    <div class="conocenos" v-if="!$q.platform.is.mobile">
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
    <div class="conocenos-mobile" v-if="$q.platform.is.mobile">
      <q-card
      flat
        class="my-card bg-transparent text-dark q-mt-xl q-ml-md text-center"
        style=""
      >
        <q-card-section class="q-pb-md">
          <div class="text-h3 text-uppercase demi_bold q-pt-lg">Bienestar al</div>
          <div class="text-h3 text-uppercase demi_bold">alcance de todos</div>
        </q-card-section>
        <q-card-section style="background: rgba(255, 255, 255, .4); border-radius: 5px">
          <div class="text-h4 text-uppercase extra_light text-dark">
            Lo que hacemos
          </div>
          <div class="extra_light" style="font-size: 1.4em">
            Entregar
            <span class="demi_bold">bienestar y salud integral</span> con los
            más altos estándares de calidad junto a especialistas calificados,
            con innovación constante en nuestro portafolio de servicios,
            <span class="demi_bold">a un precio justo.</span>
          </div>
        </q-card-section>
       <!--  <q-card-actions>
          <q-btn color="dark" dense rounded  class="demi_bold q-ml-xs" size="md" @click="goToAbout"
            >Conócenos</q-btn
          >
        </q-card-actions> -->
      </q-card>
    <div v-if="$q.platform.is.mobile" class="full-width text-center q-mt-sm q-pt-lg q-pb-xl">
      <q-btn color="dark" dense rounded  class="demi_bold q-ml-xs" size="md" @click="goToAbout"
            >Conócenos</q-btn
          >
    </div>
    </div>

    <!-- Seccion B desktop-->
    <!-- b-1 -->
    <div v-if="!$q.platform.is.mobile" style="background: transparent;" >
      <div class="row text-center center-align">
        <div class="col-7 q-pa-none">
          <q-img
            class="q-mt-xl q-mb-xl"
            style="left:5%"
            src="img\Family_orange.png"
            :ratio="16/12"
            width="80%"
            />
        </div>
        <div class="col-5 " style="display: flex; flex-direction: column;  align-items: left; justify-content: center">
          <q-card
          class="
            my-card
            text-dark            
            no-shadow
          "
          >
            <q-card-section class="q-pb-none q-ma-none">
              <div class="text-h4 text-uppercase demi_bold text-left q-pb-md">
                ¿Qué nos motiva?
              </div>
            </q-card-section>
            <q-card-section class="q-ma-none extra_light" style="font-size: 1.5em; max-width: 58%">
              <div class=" text-left">
                Tu <span class="demi_bold">Bien-Estar</span> en las diferentes etapas de tu vida.
              </div>
              <div class=" text-left q-mt-md">
                Mejorar tu calidad de vida fisico y emocional.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
  <!-- b-2 -->
      <div v-if="!$q.platform.is.mobile" class="row q-pl-xl" style="max-height: 24.4em">
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

<!-- Seccion B mobile -->
  <div v-if="$q.platform.is.mobile" class="seccion-b-mobile">
    <!-- b1 mobile -->
    <div class="row">
      <div class="offset-7 col-5 q-pl-md q-pt-md q-pb-xl">
      <q-card flat class="text-dark no-shadow bg-transparent text-center q-pt-xl">
            <q-card-section class="q-ma-none q-pa-none text-h6 text-uppercase demi_bold q-pb-md">
                ¿Qué nos motiva?
            </q-card-section>
            <q-card-section class="q-ma-none extra_light text-body1 q-pa-none" >
              <div class="">
                Tu <span class="demi_bold">Bien-Estar</span> en las diferentes etapas 
                <br> de tu vida.
              </div>
              <div class="">
                Mejorar tu calidad de vida fisico y emocional.
              </div>
            </q-card-section>
          </q-card>
      </div>
    </div>
    <!-- b2 mobile -->
    <div class="row">
      <div class="col-6 q-pt-xl q-pb-xl text-dark">
        <q-card flat class="q-ma-none q-pa-none text-center bg-transparent">
          <q-card-section class="q-pb-none ">
            <div class="text-h6 text-uppercase demi_bold ">
              Profesionalismo
            </div>
          </q-card-section>
          <q-card-section style="">
            <div class="extra_light text-center">
              Especialistas altamente capacitados,
              <br />
              honestos y comprometidos.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
    <!-- banner amarillo -->
    <q-banner  class="bg-primary text-center text-dark q-mt-sm" style="height: 15em">
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
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 150vh;
  border: solid 1px transparent;
}
.conocenos-mobile {
  background-image: url("../../public/img/background_yoga.png");
  background-size: 140%;
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
.seccion-b-mobile{
  background-image: url("../../public/img/responsive-seccion-b.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
