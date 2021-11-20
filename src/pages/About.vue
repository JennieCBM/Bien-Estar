<template>
    <q-page>
        <!-- desktop -->
        <div v-if="!$q.platform.is.mobile" class="section_one q-pa-xl text-dark">
            <div class="text-h4 demi_bold text-uppercase q-pt-xl q-pb-xl" style="max-width: 29%;">
                ¿Qué es el bienestar y salud integral?
            </div>
            <q-card flat class="my-card extra_light q-pa-sm q-mb-xl" style="background: rgba(255, 255, 255, 0.397); max-width: 48%; font-size: 1.5em">
                <q-card-section>
                    <span class="demi_bold">Bien-Estar</span> integral es un concepto relativo al buen estado de personas o colectivos.              
                </q-card-section>
                <q-card-section>
                    Es el logro del máximo nivel de <span class="demi_bold">bienestar físico, mental y social</span>  y de la capacidad de funcionamiento que permiten los factores sociales en los que viven inmersos el individuo y la colectividad. La salud integral es la principal condición del desarrollo humano, es el estado del bienestar ideal y solamente lo alcanzamos cuando existe un equilibrio entre los factores físicos, biológicos, emocionales, mentales, espirituales y sociales, que permiten un adecuado crecimiento y desarrollo en todos los ámbitos de la vida.
                Mantener un equilibrio en nuestra alimentación, realizar ejercicio constantemente, asistir al médico con regularidad, ejercitar nuestra mente, hacernos cargos de nuestras emociones teniendo una actitud positiva son favorables para obtener un bienestar integral en nuestro día a día.
                </q-card-section>
            </q-card>
        </div>

        <div v-if="!$q.platform.is.mobile" class="row">
            <div style=" display: relative" class="col-7 q-pl-xl q-pt-xl">
                <q-img
                src="../../public/img/WEB-04.png"
                spinner-color="white"
                :ratio="16/9" 
                style="top: -2em"
                width="100%"
              />
            </div>
            <div class="col-5 q-pa-xl text-dark">
                <q-card flat class="my-card extra_light q-pa-sm q-mb-xl" style="background: rgba(255, 255, 255, 0.397); font-size: 1.5em">
                    <q-card-section class="q-pb-xs">
                        <div class="text-h4 demi_bold text-uppercase">
                            Nuestro Propósito
                        </div>
                    </q-card-section>
                    <q-card-section>
                        Ser un <span class="demi_bold">centro de bienestar y salud integral</span> líder a nivel nacional, reconocidos por compartir valores de honestidad, confianza y preocupación por nuestros pacientes. 
                        Dar acceso a que cada vez sean más personas las que puedas encontrar el <span class="demi_bold">Bien-Estar integral</span> que los lleve a una mejor calidad de vida.
                    </q-card-section>
                </q-card>
            </div>
            <div class="full-width">
                <q-banner class="bg-primary q-mt-xl q-mb-md" style="width: 55%">

                </q-banner>
            </div>

        </div>
        
        <div v-if="$q.platform.is.mobile" class="text-dark">
            <q-img 
            src="img/mujer_brazos-03.png"
            width="100%"
            />
        </div>

        <div v-if="$q.platform.is.mobile" class="q-mt-lg">
            <q-card flat class="my-card extra_light q-pa-sm q-mb-xl  bg-info text-justify text-dark" style="max-width: 90%; margin: 0 auto;font-size: 1.5em">
                <q-card-section>
                    <span class="demi_bold">Bien-Estar</span> integral es un concepto relativo al buen estado de personas o colectivos.              
                </q-card-section>
                <q-card-section>
                    Es el logro del máximo nivel de <span class="demi_bold">bienestar físico, mental y social</span>  y de la capacidad de funcionamiento que permiten los factores sociales en los que viven inmersos el individuo y la colectividad. La salud integral es la principal condición del desarrollo humano, es el estado del bienestar ideal y solamente lo alcanzamos cuando existe un equilibrio entre los factores físicos, biológicos, emocionales, mentales, espirituales y sociales, que permiten un adecuado crecimiento y desarrollo en todos los ámbitos de la vida.
                Mantener un equilibrio en nuestra alimentación, realizar ejercicio constantemente, asistir al médico con regularidad, ejercitar nuestra mente, hacernos cargos de nuestras emociones teniendo una actitud positiva son favorables para obtener un bienestar integral en nuestro día a día.
                </q-card-section>
            </q-card>
        </div>

        <div v-if="$q.platform.is.mobile" class="q-mt-lg">
             <div style=" display: relative" class="col-12">
                <q-img
                src="../../public/img/WEB-04.png"
                spinner-color="white"
                :ratio="16/9" 
                width="100%"
              />
            </div>
            <div class="col-5 q-pa-lg text-dark text-justify">
                <q-card flat class="my-card extra_light q-pa-sm bg-info" style="font-size: 1.5em">
                    <q-card-section class="q-pb-xs">
                        <div class="text-h4 demi_bold text-uppercase text-center">
                            Nuestro Propósito
                        </div>
                    </q-card-section>
                    <q-card-section>
                        Ser un <span class="demi_bold">centro de bienestar y salud integral</span> líder a nivel nacional, reconocidos por compartir valores de honestidad, confianza y preocupación por nuestros pacientes. 
                        Dar acceso a que cada vez sean más personas las que puedas encontrar el <span class="demi_bold">Bien-Estar integral</span> que los lleve a una mejor calidad de vida.
                    </q-card-section>
                </q-card>
            </div>
            <div class="full-width">
                <q-banner class="bg-primary q-mb-md" style="width: 70%">
                </q-banner>
            </div>
        </div>


    </q-page>
</template>
<script>
export default {
   name: 'About',
   data(){
       return{

       }
   },
   mounted(){
       
   }
}
</script>
<style>
.section_one{
    background-image: url('../../public/img/WEB-03.png');
    /* height: 70vh; */
    /* background-image: url("../../public/img/background_yoga.png"); */
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    /* min-height: 100vh; */
    /* border: solid 1px transparent; */
}
.section_two-mobile{
    background-image: url('../../public/img/WEB-04.png');
    /* height: 70vh; */
    /* background-image: url("../../public/img/background_yoga.png"); */
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    /* min-height: 100vh; */
    /* border: solid 1px transparent; */
}
</style>
