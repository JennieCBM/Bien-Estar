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
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psiquiatría Holística
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center ">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología Adultos
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center ">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Terapia de Pareja
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psiquiatría infantil y juvenil
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Psicología diversidad e identidad de género
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Coaching Positivo personas y empresas
          </q-item>
        </q-list>
      </div>
      <div class="col-3">
        <q-list dense padding class="rounded-borders" style="padding: 40% 0 0 0%">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición (Auriculoterapia)
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Nutrición bienestar integral infantil 
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
            src="img\Eat.png"
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
          src="img\woman_3.png"
          :ratio="13/13"
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
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Masoterapia
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Mindfulness
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Flores de Bach
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Carta Astral
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Felicidad y Bienestar empresas
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Talleres y charlas a medida
          </q-item>
        </q-list>
        <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Fonoaudiología Infantil y Adultos 
          </q-item>
      </div>
      <div class="col-3">
        <q-list dense padding class="rounded-borders" style="padding: 30% 0 0 0; ">
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Audiometría
          </q-item>
          <q-item class="" style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> 
            <p class="q-pa-none q-ma-none">
              Psicopedagogía: Evaluación <span class="normalize-font">Ados2</span>
            </p>
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Terapia Ocupacional Infantil y Adultos
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Medición de Felicidad Organizacional: Método Perma
          </q-item>
          <q-item style="display:flex; flex-direction: row; align-items:center">
            <q-icon class="q-pr-sm" name="remove" color="dark"/> Talleres y Charlas como traje a la medida.
          </q-item>
        </q-list>
      </div>
    </div>

    <!-- Listas de especialidades 1 mobile -->
    <div  v-if="$q.platform.is.mobile" class="row bg-info q-pb-none extra_light text-body2 text-dark" style="">
        <div class="col-12 responsive-lg-text demi_bold q-mt-xl q-pb-xl  text-center" style="">
          Nuestros Servicios
        </div>
        <div class="col-12">          
          <q-img
              class="q-mt-md overflow-normal"
              style=""
              src="img\Eat.png"
              :ratio="16/5"
              width="100%"
              >
                <div 
                class="absolute-top bg-positive banner-responsive"
                style="  
                width: 80%;
                left: 20%;
                top: -5%;"                
                />
            </q-img>
      </div>
      <div class="col-6 q-mt-md q-mb-md q-pl-md q-pr-md responsive-md-text text-center" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between">
          <div class="q-pa-sm">
            Psiquiatría Holística
          </div>
          <div class="q-pa-sm">
            Psicología Adultos
          </div>
          <div class="q-pa-sm">
            Terapia de Pareja
          </div>
          <div class="q-pa-sm">
            Psicología Infantil y Juvenil
          </div>
          <div class="q-pa-sm">
            Psicología diversidad e identidad de género
          </div>
          <div class="q-pa-sm">
            Coaching Positivo personas y empresas
          </div>
      </div>
      <div class="col-6 q-mt-md q-mb-md q-pl-md q-pr-md responsive-md-text  text-center" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between">
          <div class="q-pa-sm">
            Nutrición (Auriculoterapia)
          </div>
          <div class="q-pa-sm">
            Nutrición bienestar integral infantil
          </div>  
          <div class="q-pa-sm">
            Nutrición y bienestar integral Mujer
          </div>
          <div class="q-pa-sm">
            Nutrición bienestar integral deportistas  
          </div>     
      </div>
      
      
    </div>
    <!-- Listas de especialidades 2 mobile -->
    <div v-if="$q.platform.is.mobile" class="row bg-info extra_light text-dark text-body2 q-pt-xl q-pb-lg" style="">
      <div class="col-12 text-center">          
        <q-img
          class=" overflow-normal"
          src="img\woman_3.png"
          :ratio="16/5"
          width="100%"
          >
            <div 
            class="absolute-top bg-primary banner-responsive top-banner-responsive"
            style="
            width: 100%;
            left: -20%;
            "
            />
        </q-img>
      </div>
      <div class="col-6 q-mt-md q-mb-md q-pl-md q-pr-md responsive-md-text text-center" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between">
          <div class="q-pa-sm">
            Reiki
          </div>
          <div class="q-pa-sm">
            Masajes Integrales
          </div>
          <div class="q-pa-sm">
            Masoterapia
          </div>
          <div class="q-pa-sm">
            Mindfulness
          </div>
          <div class="q-pa-sm">
            Flores de Bach
          </div>
          <div class="q-pa-sm">
            Carta Astral
          </div>
          <div class="q-pa-sm">
            Talleres y Charlas como traje a la medida
          </div>
      </div>
      <div class="col-6 q-mt-md q-mb-md q-pl-md q-pr-md responsive-md-text  text-center" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between">
          <div class="q-pa-sm">
            Fonoaudiología Infantil y Adultos
          </div>
          <div class="q-pa-sm">
            Audiometría
          </div>  
          <div class="q-pa-sm">
            Psicopedagogía: Evaluación <span class="normalize-font">Ados2</span>
          </div>
          <div class="q-pa-sm">
            Terapia Ocupacional Infantil y Adultos  
          </div>     
          <div class="q-pa-sm">
            Medición de Felicidad Organizacional: Método Perma  
          </div>     
      </div>
      <!-- <div class="col-6 q-pl-xl q-pt-lg demi_bold">
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
      </div> -->
      <!-- <div class="col-6 q-pt-lg demi_bold">
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
      </div> -->
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
  background-image: url("../../public/img/Imagen_central.png");
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
.responsive-lg-text{
  font-size: 40px;
}
.responsive-md-text{
  font-size: 30px;
  line-height: 1em;
}
.banner-responsive{
  height: 4em;

}
.top-banner-responsive{
  top:-10%;
}
@media only screen and (max-width: 400px) {
  .responsive-md-text {
    font-size: 1em;
    line-height: 1em;
  }
  .responsive-lg-text{
    font-size: 1.5em;
  }
  .banner-responsive{
    height: 1em;
  }
  .top-banner-responsive{
  top:-20%;
  }
}
@media only screen and (max-width: 760px) {
  .responsive-md-text {
    font-size: 1em;
    line-height: 1em;
  }
  .responsive-lg-text{
    font-size: 1.5em;
  }
  .banner-responsive{
    height: 1em;
  }
  .top-banner-responsive{
  top:-20%;
  }
}
</style>
