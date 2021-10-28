<template>
  <q-layout view="lHh Lpr lFf" class="rounded-borders" @scroll="hideNavBar">
      <q-header elevated class="bg-transparent" style="height: 5em">
        <div class="row full-width bg-primary" style="height: 100%">
          <q-toolbar class="justify-end" style="margin-right: 10em">
            <q-btn class="bg-white q-ma-sm" flat round dense color="white">
              <q-icon name="fab fa-facebook-f" class="text-dark"></q-icon>
            </q-btn>
            <q-btn class="bg-white q-ma-sm" flat round dense color="white">
              <q-icon name="fab fa-instagram" class="text-dark"></q-icon>
            </q-btn>
            <q-btn class="bg-white q-ma-sm" flat round dense color="white">
              <q-icon name="fab fa-whatsapp" class="text-dark"></q-icon>
            </q-btn>
          </q-toolbar>
        </div>
        <!-- <div class="hide_nav">
          <q-btn round flat>
            <q-img
              src="../../public/icons/Bien_Estar_PNG-01.png"
              spinner-color="white"
              :ratio="4/3" 
            />
          </q-btn>
        </div> -->
        <!-- <div class="q-mt-md hide-nav">
          <q-fab
            flat
            round
            v-model="fab1"
            color="accent"
            icon="img:icons/Bien_Estar_PNG-01.png"
            direction="center"
            :hide-label="true"
            padding="lg"
            class="hide_nav"           
          >
          <div style="row bg-red">
            <q-fab-action style="margin: 0 3em 0 3em !important " flat anchor="start" color="dark" @click="handleScroll('conocenos')" label="Conocenos" />
            <q-fab-action style="margin: 0 3em 0 3em !important " flat anchor="start" color="dark" @click="handleScroll('especialidades')" label="Especialidades" />
            <q-fab-action style="margin: 0 3em 0 3em !important " flat anchor="start" color="dark" @click="handleScroll('equipo_medico')" label="Equipo Médico" />
            <q-fab-action style="margin: 0 3em 0 3em !important " flat anchor="start" color="dark" @click="handleScroll('sucursales')" label="Sucursales" />
          </div>
          </q-fab>
        </div> -->
        <div class="row" >
          <q-tabs v-model="tab" align="left" class="col-4 text-dark" style="max-height: 3em">
              <q-tab id="tab-navbar" label="Conócenos" class="text-uppercase" @click="handleScroll('conocenos')"/>
              <q-tab id="tab-navbar" label="Especialidades" class="text-uppercase" @click="handleScroll('especialidades')"/>           
          </q-tabs>
          <div class="col-4 q-pr-xl q-pl-xl" >
            <q-img
              id="logo-navbar"
              src="../../public/icons/Bien_Estar_PNG-01.png"
              spinner-color="white"
              :ratio="1" 
            />
          </div>
          <q-tabs v-model="tab" align="right" class="col-4  text-dark" style="max-height: 3em" >
            <q-tab id="tab-navbar" label="Equipo médico" class="text-uppercase" @click="handleScroll('equipo_medico')"/>
            <q-tab id="tab-navbar" label="Sucursales" class="text-uppercase" @click="handleScroll('sucursales')"/>
          </q-tabs>
        </div>
        
      </q-header>     
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from 'quasar';
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'MainLayout',
  data(){
    return{
      tab: 'conocenos',
    }
  },
  components: {
  },
  methods: {
    click(){
      console.log(click)
    },
     handleScroll(link) {
       console.log(link)
       if(link){
         const ele = document.getElementById(link)
         console.log(ele)
         if(ele){
           const target = scroll.getScrollTarget(ele)
           console.log(ele.offsetTop, ele.scrollHeight)
           const offset = ele.offsetTop - ele.scrollHeight
           const duration = 300
           scroll.setVerticalScrollPosition(target, offset, duration)
         }else{
           return;
         }
       }
    },
    reactivateNavbar(){
      let navbar = document.querySelectorAll('.q-tab__label')
      navbar.forEach(tab=>{
        tab.classList.toggle('hidden-navbar');
      })
    },
    hideNavBar(e){
      /* console.log(e); */
        let img = document.getElementById('logo-navbar');
        let navbar = document.querySelectorAll('.q-tab__label')
      if(e.position > 4){
        img.classList.remove('small-logo__desabled')
        img.classList.add('small-logo');
        navbar.forEach(tab =>{
          tab.classList.add('hidden-navbar')
        })
        img.addEventListener('click', this.reactivateNavbar)
      }
      if(e.position < 3){
        img.classList.remove('small-logo')
        img.classList.add('small-logo__desabled')
        //agregar a click de img
        navbar.forEach(tab => {
          tab.classList.remove('hidden-navbar');
        });
        img.removeEventListener('click',this.reactivateNavbar);
      }
      //e.position para saber donde estoy
    }
  }
}
</script>
<style>
.q-layout__shadow:after{
  box-shadow: none !important;
}
.hide_nav{
  background: transparent;
  top: 50%;
  width: 120px;
  height: 120px;
  left: calc(50% - 60px);
  margin: 0;
  position: absolute;
}
.hide_nav div a span div i{
  font-size: 50px !important;
}
.small-logo{
  transition: .3s all;
  transform: scale(0.3) translate(0, -35em);
  cursor: pointer;
}
.small-logo__desabled{
  transition: .3s all;
  cursor: normal;
  transform: scale(1) translate(0,0);
}
.small-logo:hover{
  background: #bfd1956b;
  border-radius: 50%;
  cursor: pointer;  
}
.hidden-navbar{
  transition: .5s;
  transform: scale(0) translate(0,-100em);
  pointer-events: none;
}

/* borrar todo abajo */
.q-fab__actions{
  width: 100vw;
  background: transparent;
/*   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: grey; */
}
.q-fab__icon-holder{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: static;
  color: yellow !important;
 /*  top:-10px; */
  
}
.q-btn--fab .fas{
 width: 5em;
  height: 5em;
}
.q-btn--fab :hover{
  background: transparent;
}

.q-fab__icon-holder img{
  width: 5em;
  height: 5em;
/*   margin: 0 !important;
  padding: 0; */

  
}

</style>