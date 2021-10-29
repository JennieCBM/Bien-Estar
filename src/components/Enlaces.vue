<template>
    <q-page class="bg-white">
        <div class="row q-pa-xl" 
        style="
        display: flex; 
        flex-direction: row;
        justify-content: space-around
        z-index: 9998">
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-btn round size="4em" icon="img:icons/001.png" />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Integral" />
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-btn round size="4em" icon="img:icons/002.png" />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Kids" />
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-btn round size="4em" icon="img:icons/003.png" />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Mujer" />
                </q-card-section>
            </q-card>
            <q-card flat class="my-card col-3 text-center">
                <q-card-section class="q-pt-none ">
                    <q-btn round size="4em" icon="img:icons/004.png" />
                </q-card-section>
                <q-card-section>
                    <q-btn rounded color="primary" text-color="dark" label="Bien-Estar Diversidad" />
                </q-card-section>
            </q-card>
        </div>
        <!-- Convenios -->
        <div class="row bg-secondary text-dark " style="">
            <div class="offset-2 col-5 q-pt-xl">
                <div class="text-h4 text-uppercase text-bold ">
                    Convenios
                </div>
                <div class="text-weight-light q-mt-md" style="font-size: 1.5em">
                    Tenemos convenios para tu empresa, contáctanos
                </div>
                <div class="text-weight-light" style="font-size: 1.5em">
                    y consigue beneficios únicos.
                </div>
                <q-btn color="primary" rounded class="text-weight-light q-ml-xs q-mt-md" label="Saber más" text-color="dark"/>
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
    </q-page> 
</template>
<script>
export default {
  name: "Enlaces",
  data() {
    return {
      
    };
  },
};
</script>
<style>
    .asistente{
        background: rgba(197, 158, 119,.5) !important;
    }
</style>