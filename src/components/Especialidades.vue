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
        style="z-index: 1000; max-width: 90%; margin: 0 auto"
        infinite
        :autoplay="true"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <!-- Nota: cada una de estas secciones (slide) es una pagina del carousel sugerencia: mantener el patrón-->

        <q-carousel-slide name="1" class="column no-wrap flex-center">
          <q-separator
            inset
            class="q-mt-xl"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
          <div class="q-ma-lg">

            <div class="text-h4 demi_bold text-center">
              Esteban López
            </div>

            <div>
              <span class="normalize-font" style="font-weight: bolder">
                47 años
              </span> 
            </div>

            <div class="text-uppercase demi_bold q-mt-md" style="font-size: 1.5em">
              Profesional, María Pía Fernández (Psicóloga)
            </div>

            <div class="extra_light" style="font-size: 1.5em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              <div class="text-body2 text-justify" >
                Hace muchos años tuve unas sesiones de sicología y fue una mala experiencia. Me dije que no
                volvería a pedir ayuda de este tipo. Pasado unos años conocí por rrss a una chica que de inmediato
                me inspiró confianza. Decidí tomar sesiones con ella, y comencé a hablar con alguien que de
                verdad me escuchaba y me dio las herramientas para tomar las riendas de mi vida, me abrió los
                ojos para ver lo que estaba mal en mí y lo que debía modificar, en resumen, me dio una nueva
                oportunidad de vivir y poder volver a ser feliz...
              </div>
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
        
        <q-carousel-slide name="2" class="column no-wrap flex-center">
          <q-separator
            inset
            class="q-mt-xl"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
          <div class="q-ma-lg">
            <div class="text-h4 demi_bold text-center">
              Mamá de Santiago Quintano</div>
            <div>
              <span class="normalize-font" style="font-weight: bolder">
                8 años
              </span> 
            </div>
            <div class="text-uppercase demi_bold q-mt-md" style="font-size: 1.5em">
              Profesional, Niccie Guzmán (Fonoaudióloga)
            </div>

            <div class="extra_light" style="font-size: 1.5em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              <div class="text-body2 text-justify" >
                Todas las semanas mi hijo Santiago va a sus sesiones de Fonoaudiología con Niccie donde lo recibe
                con mucho cariño y, a través del juego, avanza es sus tareas rápidamente.
              </div>
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

        <q-carousel-slide name="3" class="column no-wrap flex-center">
          <q-separator
            inset
            class="q-mt-xl"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
          <div class="q-ma-lg">
            <div class="text-h4 demi_bold text-center ">
              Álvaro</div>
            <div>
              <span class="normalize-font " style="font-weight: bolder">
                38 años
              </span> 
            </div>
            <div class="text-uppercase demi_bold q-mt-md" style="font-size: 1.5em">
              Profesional, Mario Rivera (Masoterapeuta Integral y Reikista)
            </div>

            <div class="extra_light" style="font-size: 1.5em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              <div class="text-body2 text-justify" >
                Mario es una persona muy profesional. He notado su evolución con respecto a sus terapias
                alternativas. La energía que transmite a través de sus manos es transformadora. Me doy mi
                tiempo para poder repetir esta experiencia ya que noto los cambios en mi cuerpo luego de las
                sesiones que tengo con él. Destaco su profesionalismo y su calidez.
              </div>
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

        <q-carousel-slide name="4" class="column no-wrap flex-center">
          <q-separator
            inset
            class="q-mt-xl"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
          <div class="q-ma-lg">
            <div class="text-h4 demi_bold text-center ">
              Valeria</div>
            <div>
              <span class="normalize-font " style="font-weight: bolder">
                26 años
              </span> 
            </div>
            <div class="text-uppercase demi_bold q-mt-md" style="font-size: 1.5em">
              Profesional, Mariana Carrasquero (Psicóloga)
            </div>

            <div class="extra_light" style="font-size: 1.5em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              <div class="text-body2 text-justify" >
                La Psicóloga Mariana ha sido una guía a través de este camino del autodescubrimiento, un espacio
              estable en el cual pude ser capaz de expresar mis pensamientos sin sentirme juzgada. Me ha
              enseñado durante el tiempo conociéndonos a tener una perspectiva diferente sobre las pequeñas
              cosas de la vida e ir encajando piezas como un puzzle. Confianza y respeto, pero sobre todo un
              lugar seguro para mis emociones.
              </div>
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

        <q-carousel-slide name="5" class="column no-wrap flex-center">
          <q-separator
            inset
            class="q-mt-xl"
            size="1px"
            style="margin-left: 25em; margin-right: 25em"
          />
          <div class="q-ma-lg">
            <div class="text-h4 demi_bold text-center ">
              José Domingo</div>
            <div>
              <span class="normalize-font " style="font-weight: bolder">
                23 años
              </span> 
            </div>
            <div class="text-uppercase demi_bold q-mt-md" style="font-size: 1.5em">
              Profesional, Álvaro Parra (Terapeuta Ocupacional adultos)
            </div>

            <div class="extra_light" style="font-size: 1.5em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <q-icon
                name="img:img/Comillas_abiertas.png"
                size="3em"
                class="q-mr-lg"
              />
              <div class="text-body2 text-justify" >
                Desde que estoy con Álvaro he podido ordenarme con mis qué haceres de la universidad, además
                me siento muy a gusto con su ayuda.
              </div>
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

      </q-carousel>
    </q-banner>

    <!-- Carousel Version mobile  -->
    <div v-if="$q.platform.is.mobile" class="text-center text-dark q-pb-lg" style="background: #eeeef6">
      <q-carousel
        control-color="dark"
        animated
        v-model="slide"
        class="bg-transparent q-pa-none q-ma-none"
        height="32em"
        infinite
        navigation
        :autoplay="3000"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
      <!-- Nota: cada una de estas secciones (slide) es una pagina del carousel sugerencia: mantener el patrón-->
        <q-carousel-slide name="1" class="column no-wrap flex-center">
          <div class="" style="max-width: 100%">
            <div class="text-h4 demi_bold text-center q-pb-md" style="line-height: .7em">Esteban López, <br><span class="normalize-font" style="font-weight: bold">
                47
              </span>años</div>
            <div class="text-uppercase demi_bold q-pb-md" style="font-size: 1em">
              Profesional, María Pía Fernández (Psicóloga)
            </div>
            <div class="extra_light" style="font-size: 1em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <div class="text-center">
                Hace muchos años tuve unas sesiones de sicología y fue una mala experiencia. Me dije que no
                volvería a pedir ayuda de este tipo. Pasado unos años conocí por rrss a una chica que de inmediato
                me inspiró confianza. Decidí tomar sesiones con ella, y comencé a hablar con alguien que de
                verdad me escuchaba y me dio las herramientas para tomar las riendas de mi vida, me abrió los
                ojos para ver lo que estaba mal en mí y lo que debía modificar, en resumen, me dio una nueva
                oportunidad de vivir y poder volver a ser feliz...
              </div>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="2" class="column no-wrap flex-center">
          <div class="" style="max-width: 100%">
            <div class="text-h4 demi_bold text-center q-pb-md"
            style="line-height: .7em">Mamá de Santiago Quintano, <br><span class="normalize-font" style="font-weight: bold">
                8
              </span>años</div>
            <div class="text-uppercase demi_bold q-pb-md" style="font-size: 1em">
              Profesional, Niccie Guzmán (Fonoaudióloga)
            </div>
            <div class="extra_light" style="font-size: 1em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <div class="text-center">
                Todas las semanas mi hijo Santiago va a sus sesiones de Fonoaudiología con Niccie donde lo recibe
                con mucho cariño y, a través del juego, avanza es sus tareas rápidamente.
              </div>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="3" class="column no-wrap flex-center">
          <div class="" style="max-width: 100%">
            <div class="text-h4 demi_bold text-center q-pb-md"
            style="line-height: .7em">Álvaro, <span class="normalize-font" style="font-weight: bold">
                38
              </span>años</div>
            <div class="text-uppercase demi_bold q-pb-md" style="font-size: 1em">
              Profesional, Mario Rivera (Masoterapeuta Integral y Reikista)
            </div>
            <div class="extra_light" style="font-size: 1em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <div class="text-center">
                Mario es una persona muy profesional. He notado su evolución con respecto a sus terapias
                alternativas. La energía que transmite a través de sus manos es transformadora. Me doy mi
                tiempo para poder repetir esta experiencia ya que noto los cambios en mi cuerpo luego de las
                sesiones que tengo con él. Destaco su profesionalismo y su calidez.
              </div>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="4" class="column no-wrap flex-center">
          <div class="" style="max-width: 100%">
            <div class="text-h4 demi_bold text-center q-pb-md"
            style="line-height: .7em">Valeria, <span class="normalize-font" style="font-weight: bold">
                26
              </span>años</div>
            <div class="text-uppercase demi_bold q-pb-md" style="font-size: 1em">
              Profesional, Mariana Carrasquero (Psicóloga)
            </div>
            <div class="extra_light" style="font-size: 1em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <div class="text-center">
                La Psicóloga Mariana ha sido una guía a través de este camino del autodescubrimiento, un espacio
              estable en el cual pude ser capaz de expresar mis pensamientos sin sentirme juzgada. Me ha
              enseñado durante el tiempo conociéndonos a tener una perspectiva diferente sobre las pequeñas
              cosas de la vida e ir encajando piezas como un puzzle. Confianza y respeto, pero sobre todo un
              lugar seguro para mis emociones.
              </div>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="5" class="column no-wrap flex-center">
          <div class="" style="max-width: 100%">
            <div class="text-h4 demi_bold text-center q-pb-md"
            style="line-height: .7em">José Domingo, <span class="normalize-font" style="font-weight: bold">
                23
              </span>años</div>
            <div class="text-uppercase demi_bold q-pb-md" style="font-size: 1em">
              Profesional, Álvaro Parra (Terapeuta Ocupacional adultos)
            </div>
            <div class="extra_light" style="font-size: 1em; display: flex; flex-direction: row; align-items: space-between; max-width: 80%; margin: 2% auto">
              <div class="text-center">
                Desde que estoy con Álvaro he podido ordenarme con mis qué haceres de la universidad, además
                me siento muy a gusto con su ayuda.
              </div>
            </div>
          </div>
        </q-carousel-slide>

      </q-carousel>
    </div>
    <!-- Imagen central - desktop -->
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
    <!-- Imagen central - mobile -->
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
      slide: "1",
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
.imagen_central-mobile {
  background-image: url("../../public/img/Imagen_central_mobile.png");
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
