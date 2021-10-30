<template>
  <q-page>
    <div
      class="text-h4 text-center text-dark text-uppercase center-align q-pa-xl"
    >
      Medios de pago
    </div>
    <div class="row text-center" style="margin-left: 20%; margin-right: 20%">
      <div class="col-3">
        <q-icon name="img:icons/Efectivo.png" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm">
          Efectivo
        </div>
      </div>
      <div class="col-3">
        <q-icon name="img:icons/Transferencia.png" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm">
          Transferencia Electronica
        </div>
      </div>
      <div class="col-3">
        <q-icon name="img:icons/Tarjetas.png" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm">
          Tarjetas de débito y crédito
        </div>
      </div>
      <div class="col-3">
        <q-icon name="img:icons/Transferencia.png" size="6em" />
        <div class="text-h6 text-weight-light text-uppercase q-pa-sm">
          Convenio fonasa
        </div>
      </div>
    </div>
    <div class="row">
      <div class="q-pa-md text-center" style="margin: 0 auto; width: 40em">
        <q-form @submit="sendEmail" @reset="onReset" class="q-gutter-md" ref="form">
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
            />
            <div class="full-width text-right">
                <q-btn 
                label="Submit" 
                type="submit" 
                color="dark" 
                rounded 
                class="text-weight-light q-ml-xs"
                style="width: 10em"/>
            </div>

        </q-form>
      </div>
      <div class="row q-mt-xl full-width bg-primary" style="cursor: pointer">
          <div class="col-4 q-pa-none q-pl-xl " style="font-size: 1.1em">
              <div class="text-h4 text-uppercase q-mt-xl q-ml-lg">
                  Contacto
              </div>
              <br>
              <q-list dense padding class="rounded-borders text-uppercase q-mb-lg" style="">
                  <q-item class="" style="padding-left: none !important">
                    <q-item-section avatar>
                    <q-icon color="dark" name="location_on" size="xl"/>
                    </q-item-section>
                    <q-item-section>Av. Luis Thayer Ojeda 166, Providencia, Región Metropolitana
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
                    <q-item-section>Telefono: +56973752280</q-item-section>
                  </q-item>                 
              </q-list>
          </div>
          <div class="col-4 text-center">
              <q-img
                class=""
                style=""
                src="img\Bien_Estar_PNG-01.png"
                :ratio="16/8"
                height="80%"
                width="60%"
              />
              <div class="text-center ">
                    <q-btn class="bg-dark q-ma-sm" flat round dense color="white">
                        <q-icon name="fab fa-facebook-f" class="text-primary"></q-icon>
                    </q-btn>
                    <q-btn class="bg-dark q-ma-sm" flat round dense color="white">
                        <q-icon name="fab fa-instagram" class="text-primary"></q-icon>
                    </q-btn>
                    <q-btn class="bg-dark q-ma-sm" flat round dense color="white">
                        <q-icon name="fab fa-whatsapp" class="text-primary"></q-icon>
                    </q-btn>
              </div>
          </div>
          <div class="col-4" @click="test">
              <q-img
                class=""
                style=""
                src="img\Direccion.PNG"
                :ratio="16/9"
                height="100%"
                width="100%"
              />
          </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import emailjs from "emailjs-com";
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
        console.log(this.$refs, e)
      emailjs
        .sendForm(
          "Bien-Estar",
          "template_ia4gxlj",
          e.target,
          "user_qUvrkke4h82ZvemUCxoib"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    onReset(){

    },
    validateEmail(){
        return true;
    },
    test(){
        console.log("works")
        window.location.href ='https://www.google.com/maps/place/Av.+Luis+Thayer+Ojeda+166,+of+303,+Providencia,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4186597,-70.6010493,16z/data=!4m5!3m4!1s0x9662cf6bba3ad173:0x322b37488c554b29!8m2!3d-33.4199314!4d-70.6019279'
    }
  },
};
</script>
<style>
.q-field__label{
    font-weight: bold;
}
</style>
