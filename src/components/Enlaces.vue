<template>
    <q-page class="bg-white" :class="$q.platform.is.mobile ? 'page-mobile' : ''">
        <!-- Secciones botones circulares modal desktop -->
        <div v-if="!$q.platform.is.mobile" class="row q-pa-xl" 
        style="
        display: flex; 
        flex-direction: row;
        justify-content: space-around
        z-index: 9998">
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/integral.png"
                        :ratio="1"
                        width="12em"
                        @click="openModal('integral')"
                    />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Integral" style="pointer-events: none"/>
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/kids.png"
                        :ratio="1"
                        width="12em"
                        @click="openModal('kids')"
                    />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Kids" style="pointer-events: none"/>
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/mujer.png"
                        :ratio="1"
                        width="12em"
                        @click="openModal('mujer')"
                    />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Mujer" style="pointer-events: none"/>
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/diversidad.png"
                        :ratio="1"
                        width="12em"
                        @click="openModal('diversidad')"
                    />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Diversidad" style="pointer-events: none"/>
                </q-card-section>
            </q-card>
        </div>
        <!-- Convenios -->
        <div v-if="!$q.platform.is.mobile" class="row bg-secondary text-dark " style="">
            <div class="offset-2 col-5 q-pt-xl">
                <div class="text-h4 text-uppercase demi-bold ">
                    Convenios
                </div>
                <div class="extra_light q-mt-md" style="font-size: 1.6em">
                    Tenemos convenios para tu empresa, contáctanos
                </div>
                <div class="extra_light" style="font-size: 1.6em">
                    y consigue beneficios únicos.
                </div>
                <div class="text-overline text-bold q-mt-md" style="font-size: 1em; line-height: 1.5em; font-family: 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif;" >
                    E-MAIL: CONTACTO@BIEN-ESTAR.CL
                    <br>
                    TELEFONO: +56973752280
                </div>
                <!-- <q-btn color="primary" rounded class="extra_light q-ml-xs q-mt-md" label="Saber más" text-color="dark"/> -->
            </div>
            <div class="col-4">
                <q-img 
                class="asistente"
                src="img\Asistente.png"
                :ratio="16/9"
                width="100%"
                height="100%"
                style="opacity: .5"
                />
            </div>
            
        </div>
        
        <!-- Secciones botones circulares modal mobile -->
        <div v-if="$q.platform.is.mobile" class="row q-pa-xl" 
        style="
        display: flex; 
        flex-direction: row;
        justify-content: space-around
        z-index: 9998">
        <div class="col-6">
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/integral.png"
                        :ratio="1"
                        width="100%"
                        @click="openModal('integral')"
                    />
                </q-card-section>
                <q-card-section>
                    <div class="bg-primary demi_bold text-center text-dark responsive-md-text flex flex-center" style="min-height: 2em; border-radius: 2em">Bien-Estar Integral</div>
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/kids.png"
                        :ratio="1"
                        width="100%"
                        @click="openModal('kids')"
                    />
                </q-card-section>
                <q-card-section>
                    <div class="bg-primary demi_bold text-center text-dark responsive-md-text flex flex-center" style="min-height: 2em; border-radius: 2em">Bien-Estar Kids</div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-6">
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/mujer.png"
                        :ratio="1"
                        width="100%"
                        @click="openModal('mujer')"
                    />
                </q-card-section>
                <q-card-section>
                    <div class="bg-primary demi_bold text-center text-dark responsive-md-text flex flex-center" style="min-height: 2em; border-radius: 2em">Bien-Estar Mujer</div>
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-img
                        style="cursor: pointer"
                        src="icons/diversidad.png"
                        :ratio="1"
                        width="100%"
                        @click="openModal('diversidad')"
                    />
                </q-card-section>
                <q-card-section>
                    <div class="bg-primary demi_bold text-center text-dark responsive-md-text flex flex-center" style="min-height: 2em; border-radius: 2em">Bien-Estar Diversidad</div>
                </q-card-section>
            </q-card>
        </div>
        </div>
        <!-- modal generico -->
        <q-dialog
            v-model="open"
            >
            <q-card class="text-dark">
                <q-card-section>
                    <div class="text-h5 demi-bold text-uppercase text-center">{{titulo}}</div>
                    <div v-if="subtitulo" style="font-size:1.6em" class="text-subtitle1 extra_light q-pt-md text-center">{{subtitulo}}</div>
                </q-card-section>
                <q-separator/>
                <q-card-section v-if="contenido" class="q-pa-md text-center extra_light" style="font-size:1.6em">
                    {{contenido}}
                </q-card-section>
                <q-card-section v-if="titulo_2">
                    <div class="text-h5 demi-bold text-uppercase text-center">{{titulo_2}}</div>
                </q-card-section>
                <q-card-section v-if="contenido_2" class="q-pa-md text-center extra_light" style="font-size:1.6em">
                    {{contenido_2}}
                </q-card-section>
                <q-card-section v-if="contenido_3" class="q-pa-md text-center extra_light" style="font-size:1.6em">
                    {{contenido_3}}
                </q-card-section>
                <q-card-section v-if="contenido_4" class="q-pa-md text-center extra_light" style="font-size:1.6em">
                    {{contenido_4}}
                </q-card-section>
                <q-card-section v-if="contenido_5" class="q-pa-md text-center extra_light" style="font-size:1.6em">
                    {{contenido_5}}
                </q-card-section>
                <q-card-actions align="right" class="bg-white">
                    <q-btn flat label="Volver" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page> 
</template>
<script>
export default {
  name: "Enlaces",
  data() {
    return {
      titulo: null,
      titulo_2: null,
      subtitulo: null,
      contenido: null,
      contenido_2: null,
      contenido_3: null,
      contenido_4: null,
      contenido_5: null,
      open: false
    };
  },
  methods:{
     openModal(type){
         this.titulo = null;
         this.subtitulo = null;
         this.titulo_2 = null;
         this.contenido = null;
         this.contenido_2 = null;
         this.contenido_3= null;
        this.contenido_4= null;
        this.contenido_5= null;
         
         switch (type) {
            case 'integral':
                this.titulo= "Bien-Estar Integral";
                this.contenido= "Programa donde recibirás apoyo de un equipo multidisciplinario de  profesionales en Bien-Estar. Donde te ayudaremos a mejorar tu calidad de vida, entender tus emociones y manejar el estrés.";
                break;
            case 'kids':
                this.titulo="Bien-Estar Kids";
                this.subtitulo="Brindamos salud y bienestar integral a niñas, niños y adolecentes.";
                this.contenido="Unidad de Atención donde encuentras un grupo de especialistas en bienestar y salud infantil que trabaja de manera integral por la salud emocional y cognitiva de los niños, niñas y adolescentes. Reconoce el desarrollo de los niños y niñas, previene patologías que puedan afectar su calidad de vida, identifica afectaciones en la salud emocional y cognitiva y trata las condiciones y enfermedades de salud mental";
                this.titulo_2= "¿Qué nos motiva?";
                this.contenido_2= "Cuidar el bienestar de los niños y adolecentes con una mirada integral, respetuosa y de calidad.Ayudar a formar niños y adolescentes sanos y felices";
                break;
            case 'mujer':
                this.titulo="Bien-Estar Mujer";
                this.subtitulo= "Espacio de atención integral que busca mejorar el bienestar, la salud y la calidad de vida de las mujeres en Chile.";
                this.titulo_2= "¿Qué nos motiva?";
                this.contenido_2= "Bienestar integral de la mujer.";
                this.contenido_3="Salud física y emocional en las diferentes etapas de la vida.";
                this.contenido_4="Mejoramiento de su calidad de vida.";
                this.contenido_5="Acompañamiento personalizado en las diferentes etapas de la vida.";
                break;
            case 'diversidad':
                this.titulo="Bien-Estar Diversidad";
                this.subtitulo="Un espacio de Bien-Estar para Todes.";
                this.contenido="Este es un espacio de atención en salud seguro, libre de discriminación, abierto para todas las personas para atender motivos de consulta de salud general, salud mental y acompañamiento en procesos de transición. Los profesionales que hacemos parte de Bien-Estar Diversidad estamos dispuestos a ofrecerte una atención respetuosa y de calidad.";
                this.titulo_2="¿Qué nos motiva?";
                this.contenido_2="Ofrecer un espacio de acompañamiento y orientación no patologizante para personas LGBTIQA+ o que se estén cuestionando su orientación sexual y/o identidad de género.Consejería y orientación individual o grupal.";
                break;
         }
             this.open = true;
     }
  }
};
</script>
<style>
    .asistente{
        background: rgba(197, 158, 119,.5) !important;
        
    }
</style>