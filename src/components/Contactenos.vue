<template>
  <q-page>
     <!-- titulo desktop -->
    <div
      v-if="!$q.platform.is.mobile"
      class="text-h4 text-center text-dark text-uppercase center-align q-pa-xl"
    >
      Medios de pago
    </div>

    <!-- titulo mobile -->
    <div
      v-if="$q.platform.is.mobile"
      class="
        text-h4 text-center text-dark text-uppercase
        center-align
        q-pt-md q-pb-xl
      "
    >
      Medios de pago
    </div>

    <!-- iconos formas de pago desktop -->
    <div v-if="!$q.platform.is.mobile" class="row text-center" style="margin-left: 10%; margin-right: 10%">
      <div class="col-3">
        <q-icon name="fas fa-money-bill-wave" color="accent" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm text-accent">
          Efectivo
        </div>
      </div>
      <div class="col-3">
        <q-icon name="fas fas fa-desktop" color="accent" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm text-accent">
          Transferencia Electronica
        </div>
      </div>
      <div class="col-3">
        <q-icon name="fas fa-money-check" color="accent" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm text-accent">
          Tarjetas de débito y crédito
        </div>
      </div>
      <div class="col-3">
        <!-- style="width: 9em; height: 6em"  -->
        <q-icon name="img:icons/fonasa.png" color="accent" style="width: 9em; height: 6em"/>
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm text-accent">
          Convenio fonasa
        </div>
      </div>
    </div>

    <!-- iconos formas de pago mobile -->
    <div v-if="$q.platform.is.mobile" class="row text-center" style="">
      <div class="col-3">
        <q-icon name="fas fa-money-bill-wave" color="accent" size="3em" />
        <div
          class="
            text-body2 text-weight-light text-uppercase
            q-pa-sm
            text-accent
          "
        >
          Efectivo
        </div>
      </div>
      <div class="col-3">
        <q-icon name="fas fas fa-desktop" color="accent" size="3em" />
        <div
          class="
            text-body2 text-weight-light text-uppercase
            q-pa-sm
            text-accent
          "
        >
          Transferencia Electronica
        </div>
      </div>
      <div class="col-3">
        <q-icon name="fas fa-money-check" color="accent" size="3em" />
        <div
          class="
            text-body2 text-weight-light text-uppercase
            q-pa-sm
            text-accent
          "
        >
          Tarjetas de débito y crédito
        </div>
      </div>
      <div class="col-3">
        <q-icon
          name="img:icons/fonasa.png"
          color="accent"
          style="width: 6em; height: 3em"
        />
        <div
          class="
            text-body2 text-weight-light text-uppercase
            q-pa-sm
            text-accent
          "
        >
          Convenio fonasa
        </div>
      </div>
    </div>


    <div class="row q-mt-xl q-pt-lg">
      <div class="col-12 text-h5 demi_bold text-center text-dark q-mb-xl text-uppercase">
        Nos encantaría escucharte, contáctanos aquí: 
      </div>
      <div class="q-pa-md text-center" style="margin: 0 auto; width: 40em">
        <q-form @submit="sendEmail" @reset="onReset" class="q-gutter-md" style="font-family: 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif;" ref="form">
          <q-input
            v-model="user_name"
            label-color="dark"
            color="primary"
            text-color="dark"
            name="user_name"
            label="NOMBRE"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) ||
                'Este campo es requerido, favor use solo letras',
            ]"
          />

          <q-input
            type="number"
            label-color="dark"
            v-model="user_phone"
            name="user_phone"
            prefix="+56"
            label="TELEFONO"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Este campo es requerido',
              (val) =>
                (val > 99999999 && val < 999999999) ||
                'Favor ingresa un numero de telefono válido',
            ]"
          />
          <q-input
            v-model="user_email"
            label-color="dark"
            name="user_email"
            label="EMAIL"
            type="email"
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Este campo es requerido',
              (val) => validateEmail(val) || 'Favor ingrese un email valido',
            ]"
          />
          <div class="q-pt-lg q-pb-xs text-dark" style="font-weight: bold; font-size: 16px">
              MENSAJE
          </div>
          <q-input
            v-model="message"
            label-color="dark"
            name="message"
            outlined
            type="textarea"
            class="q-pt-none q-mt-none"
            placeholder="Darte nuestro apoyo nos pone muy feliz, cuéntanos cómo podemos ayudarte..."
            />
            <div class="full-width text-right demi_bold">
                <q-btn 
                label="Enviar" 
                type="submit" 
                color="dark" 
                dense
                rounded 
                class="q-ml-xs"
                style="width: 10em"/>
            </div>

        </q-form>
      </div>

      <!-- contactenos desktop -->
      <div  v-if="!$q.platform.is.mobile" class="row full-width bg-primary" style="margin-top: 5em">
          <div class="col-4 q-pa-none q-pl-xl " style="font-size: 1.1em">
              <div class="text-h4 text-uppercase q-mt-xl q-ml-lg">
                  Contacto
              </div>
              <br>
              <q-list dense padding class="rounded-borders text-uppercase q-mb-lg" style="font-family: 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  <q-item class="" style="padding-left: none !important">
                    <q-item-section avatar>
                    <q-icon color="dark" name="location_on" size="xl"/>
                    </q-item-section>
                    <q-item-section>Av. Luis Thayer Ojeda 166, Oficina 303, 
                        <br>
                      Providencia, Región Metropolitana.
                        <br>
                        A pasos de estación Tobalaba.
                    </q-item-section>
                  </q-item>
                  <q-item class="q-mt-sm">
                    <q-item-section avatar>
                        <div class="bg-dark q-pa-xs q-ml-sm" style="border-radius: 50%">
                            <q-icon color="primary" name="mail_outline" size="sm"/>
                        </div>
                    </q-item-section>
                    <q-item-section>E-mail: contacto@bien-estar.cl </q-item-section>
                  </q-item>               
                  <q-item class="q-mt-md">
                    <q-item-section avatar>
                        <div class="bg-dark q-pa-xs q-ml-sm" style="border-radius: 50%">
                            <q-icon color="primary" name="call" size="sm"/>
                        </div>
                    </q-item-section>
                    <q-item-section>Telefono: +56 9 7375 2280</q-item-section>
                  </q-item>                 
              </q-list>
          </div>
          <div class="col-4 text-center" >
              <q-img
                class=""
                style=""
                src="icons\Bien_Estar_PNG-01.png"
                :ratio="16/8"
                height="80%"
                width="60%"
              />
              <div class="text-center ">
                    <q-btn class="bg-dark q-ma-sm" flat round dense color="white" @click="GoToLink('https://www.facebook.com/Centro-Integral-Bien-Estar-100957679021251')">
                        <q-icon name="fab fa-facebook-f" class="text-primary"></q-icon>
                    </q-btn>
                    <q-btn class="bg-dark q-ma-sm" flat round dense color="white" @click="GoToLink('https://www.instagram.com/centrointegral.bienestar/')">
                        <q-icon name="fab fa-instagram" class="text-primary"></q-icon>
                    </q-btn>
                    <q-btn class="bg-dark q-ma-sm" flat round dense color="white" @click="GoToLink('https://api.whatsapp.com/send?phone=56973752280&text=%C2%A1Hola!%20')">
                        <q-icon name="fab fa-whatsapp" class="text-primary"></q-icon>
                    </q-btn>
              </div>
          </div>
          <div class="col-4" style="cursor: pointer; " @click="GoToLink('https://www.google.com/maps/place/Av.+Luis+Thayer+Ojeda+166,+of+303,+Providencia,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4186597,-70.6010493,16z/data=!4m5!3m4!1s0x9662cf6bba3ad173:0x322b37488c554b29!8m2!3d-33.4199314!4d-70.6019279')">
              <q-img
                class=""
                style=""
                src="img\Direccion.png"
                :ratio="16/9"
                height="100%"
                width="100%"
              />
          </div>
      </div>

      <!-- contactenos mobile -->

      <div  v-if="$q.platform.is.mobile" class="row full-width bg-primary text-dark" style="margin-top: 5em">
              <div class="col-12 text-center text-h4 text-uppercase q-mt-lg">
                  Contacto
              </div>
          <div class="col-12 q-pr-lg q-pl-lg flex flex-center" style="">
              <!-- lista -->
              <q-list dense padding class="rounded-borders text-uppercase " style="font-family: 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  <q-item class="" style="padding-left: none !important">
                    <q-item-section avatar>
                       <div class="bg-dark q-pa-xs q-ml-sm" style="border-radius: 50%">
                            <q-icon color="primary" name="location_on" size="xs"/>
                        </div>
                    </q-item-section>
                    <q-item-section>Av. Luis Thayer Ojeda 166, Oficina 303, 
                        <br>
                      Providencia, Región Metropolitana.
                        <br>
                        A pasos de estación Tobalaba.
                    </q-item-section>
                  </q-item>
                  <q-item class="q-mt-sm">
                    <q-item-section avatar>
                        <div class="bg-dark q-pa-xs q-ml-sm" style="border-radius: 50%">
                            <q-icon color="primary" name="mail_outline" size="xs"/>
                        </div>
                    </q-item-section>
                    <q-item-section>E-mail: contacto@bien-estar.cl </q-item-section>
                  </q-item>               
                  <q-item class="q-mt-md">
                    <q-item-section avatar>
                        <div class="bg-dark q-pa-xs q-ml-sm" style="border-radius: 50%">
                            <q-icon color="primary" name="call" size="xs"/>
                        </div>
                    </q-item-section>
                    <q-item-section>Telefono: +56 9 7375 2280</q-item-section>
                  </q-item>                 
              </q-list>
          </div>
          
      </div>

      <div v-if="$q.platform.is.mobile" class="row bg-primary full-width demi_bold q-pb-md" style="display: flex; flex-direction:row; align-items:center; justify-content:center">
        <div class="col-4 text-center">
          <q-btn
            label="Ver en Mapa"
            type="submit"
            color="dark"
            dense
            rounded
            class="q-mt-sm"
            style="min-width: 8em"
            @click="
              GoToLink(
                'https://www.google.com/maps/place/Av.+Luis+Thayer+Ojeda+166,+of+303,+Providencia,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4186597,-70.6010493,16z/data=!4m5!3m4!1s0x9662cf6bba3ad173:0x322b37488c554b29!8m2!3d-33.4199314!4d-70.6019279'
              )
            "
          />
        </div>
        <div class="col-4 text-center" style="display: flex; flex-direction:column; align-items:center; justify-content:center" >
              <q-img
                width="80%"
                src="icons\Bien_Estar_PNG-01.png"
                :ratio="16/16"
              />              
          </div>
        <!-- iconos y ver en mapa -->
        <div class="col-4" style="display: flex; flex-direction: row; align-items:center;justify-content:center">
          <div class="q-mr-sm">
            <q-btn
              class="bg-dark"
              flat
              round
              color="white"
              size="sm"
              @click="
                GoToLink(
                  'https://www.facebook.com/Centro-Integral-Bien-Estar-100957679021251'
                )
              "
            >
              <q-icon name="fab fa-facebook-f" class="text-primary"></q-icon>
            </q-btn>
          </div>
          <div class="q-mr-sm">
            <q-btn
              class="bg-dark "
              flat
              round
              color="white"
              size="sm"
              @click="
                GoToLink('https://www.instagram.com/centrointegral.bienestar/')
              "
            >
              <q-icon name="fab fa-instagram" class="text-primary"></q-icon>
            </q-btn>

          </div>
          <div class="q-mr-sm">
            <q-btn
              class="bg-dark "
              flat
              round
              color="white"
              size="sm"
              @click="
                GoToLink(
                  'https://api.whatsapp.com/send?phone=56973752280&text=%C2%A1Hola!%20'
                )
              "
            >
              <q-icon name="fab fa-whatsapp" class="text-primary"></q-icon>
            </q-btn>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>
<script>
import emailjs from "emailjs-com";
import {Notify} from "quasar";
import {Loading} from "quasar";
export default {
  name: "Contactenos",
  data() {
    return {
        user_name: null,
        user_phone: null,
        user_email: null,
        message: null
    };
  },
  methods: {
    sendEmail(e) {
      Loading.show();
      emailjs
        .sendForm(
          "service_bienestar",
          "template_lp5ksrv",
          e.target,
          "user_PKrqjKHYC3BXmxUauEY6Y"
        )
        .then(
          (result) => {
            //TO DO: Verificar como resetear campos sin que muestren error
            /* this.onReset(); */
            Notify.create({
                color: "positive",
                position: "bottom",
                icon: "fas fa-check",
                message: '¡Su mensaje ha sido enviado con exito!.'
            })
            Loading.hide();
          },
          (error) => {
            Notify.create({
                color: "negative",
                position: "bottom",
                icon: "fas fa-exclamation-triangle",
                message: 'Hubo un error, favor reintente o contactese por nuestras redes sociales.'
            })
            Loading.hide();
          }
        )
        .catch(error=>{
          Notify.create({
                color: "negative",
                position: "bottom",
                icon: "fas fa-exclamation-triangle",
                message: 'Hubo un error, favor reintente o contactese por nuestras redes sociales.'
            })
            Loading.hide();
        })
    },
    validateEmail(){
      //TO DO: hacer esta validacion
      return true;
    },
    GoToLink(link){
      window.open(
        link,
        '_blank'
      );
    },
    onReset(){
      this.user_name= null;
      this.user_phone= null;
      this.user_email= null;
      this.message= null;
    },
  },
};
</script>
<style>
.q-field__label{
    font-weight: bold;
}
</style>
