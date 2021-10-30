<template>
  <q-page>
    <!-- Seccion A -->
    <div class="conocenos " >
      <q-card
        class="my-card bg-transparent text-dark conocenos_mensaje no-shadow"
      >
        <q-card-section class="q-pb-none">
          <div class="text-h4 text-uppercase text-bold">Bienestar al</div>
          <div class="text-h4 text-uppercase text-bold">alcance de todos</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6 text-uppercase text-weight-thin text-black">
            Lo que hacemos
          </div>
          <div class="text-weight-light">
            Entregar
            <span class="text-bold">bienestar y salud integral</span> con los
            más altos estándares de calidad, junto a especialistas calificado,
            con innovación constante en nuestro portafolio de servicios,
            <span class="text-bold">a un precio justo.</span>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn color="dark" rounded class="text-weight-light q-ml-xs" @click="goToAbout"
            >Conócenos</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>

    <!-- Seccion B -->
    <!-- b-1 -->
    <div style="background: transparent;" id="conocenos">
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
              <div class="text-h4 text-uppercase text-bold text-left q-pb-lg">
                ¿Qué nos motiva?
              </div>
            </q-card-section>
            <q-card-section class="q-ma-none" style="font-size: 1.3em; max-width: 80%">
              <div class="text-weight-light text-left">
                Tu <span class="text-bold">Bienestar</span>en las diferentes etapas de tu vida.
              </div>
              <div class="text-weight-light text-left">
                Mejorar tu calidad de vida fisico y emocional.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
  <!-- b-2 -->
      <div class="row q-pl-xl" style="max-height: 24.4em">
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
            <div class="text-h4 text-uppercase text-bold text-center">
              Profesionalismo
            </div>
          </q-card-section>
          <q-card-section style="font-size: 1.3em;">
            <div class="text-weight-light text-center">
              Especialistas altamente capacitados,
              <br />
              honestos y comprometidos.
            </div>
          </q-card-section>
        </q-card>
        <div class="col-8 q-pa-none" style="display: flex; flex-direction: column;  align-items:center; justify-content: center">
          <q-img
            style="top:-25%;"
            class=""
            src="img\Hands_yellow.png"
            :ratio="16/12"
            width="70%"
            />
        </div>
      </div>
    </div>

    <!-- banner amarillo -->
    <q-banner class="bg-primary text-center text-dark" style="height: 15em">
      <div class="text-h4 text-uppercase text-bold text-center ">
        Clientes Satisfechos
      </div>
      <br>
      <div class="text-weight-light" style="font-size: 1.5em">
          Descubre como encontrar tu  
            <span class="text-bold">Bien-Estar</span>
            integral 
          </div>
          <div class="text-weight-light" style="font-size: 1.5em">junto a nosotros brindando experiencias memorables.</div>
    </q-banner>
  </q-page>
</template>
<script>
export default {
  name: "Conocenos",
  mounted(){
    let nav = document.querySelector('#nav-row');
      console.log(nav)
      nav.style.visibility="visible";
  },
  methods:{
    goToAbout(){
      this.$router.push({name:'about'})
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
.conocenos_mensaje {
  max-width: 33em;
  left: 8%;
  margin-top: 20em;
}
.profesionalismo_mensaje {
  left: 8%;
}
</style>
