<template>
  <q-layout view="lHh Lpr lFf" class="rounded-borders demi_bold" @scroll="hideNavBar">
      <q-header elevated class="bg-transparent" style="height: 5em">
        <div class="row full-width bg-primary" style="height: 100%">
          <q-toolbar :class="showEnlaces ? 'justify-end' : 'justify-between'" style="margin-right: 10em; margin-left: 10em">
          <div v-if="!showEnlaces" style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" class="">
            <q-btn flat color="dark" @click="GoHome">
              Volver a Home
            </q-btn>
          </div>
          <div v-if="!showEnlaces">
              <q-img
                src="../../public/icons/Bien_Estar_PNG-01.png"
                spinner-color="white"
                :ratio="1" 
                width="5em"
              />
          </div>
          <div>
            <q-btn class="bg-white q-ma-sm" flat round dense color="white" @click="GoToLink('https://www.facebook.com/Centro-Integral-Bien-Estar-100957679021251')">
              <q-icon name="fab fa-facebook-f" class="text-dark"></q-icon>
            </q-btn>
            <q-btn class="bg-white q-ma-sm" flat round dense color="white" @click="GoToLink('https://www.instagram.com/centrointegral.bienestar/')">
              <q-icon name="fab fa-instagram" class="text-dark"></q-icon>
            </q-btn>
            <q-btn class="bg-white q-ma-sm" flat round dense color="white" @click="GoToLink('https://api.whatsapp.com/send?phone=56973752280&text=%C2%A1Hola!%20')">
              <q-icon name="fab fa-whatsapp" class="text-dark"></q-icon>
            </q-btn>
          </div>
          </q-toolbar>
        </div>


        <div v-if="showEnlaces" class="row text-body1 text-dark" id="nav-row" style="display: flex; flex-direction: row; justify-content: space-around;">
            <div class=" text-center text-uppercase q-pt-lg" id="tab-navbar" @click="handleScroll('conocenos')">
              <span class="q-pl-md q-pr-md">Conócenos</span>
            </div>
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" @click="handleScroll('especialidades')">
              <span class="q-pl-md q-pr-md">Especialidades</span>
            </div>
            <div class="col-4 q-pr-xl q-pl-xl" id="logo-navbar" >
              <q-img
                src="../../public/icons/Bien_Estar_PNG-01.png"
                spinner-color="white"
                :ratio="1" 
              />
            </div>
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" @click="handleScroll('profesionales')">
              <span class="q-pl-md q-pr-md">Profesionales</span>
            </div>
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" @click="handleScroll('contactenos')">
              <span class="q-pl-md q-pr-md">Sucursales</span>
            </div>
        </div>
        
      </q-header>     
    <q-page-container>
      <router-view 
      @AboutLayout="ChangeNavbar"/>
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
      showEnlaces: true
    }
  },
  components: {
  },
  mounted(){    
      if(this.$route.name == 'about' || this.$route.name == 'profesionales'){
        this.showEnlaces = false;
      }else{
        this.showEnlaces = true;
      }
  },
  watch:{
    $route (to, from){
        if(to.name == 'about' || to.name == 'profesionales'){
          this.showEnlaces = false;
        }else{
          this.showEnlaces = true;
        }
    }
},
  methods: {
    GoHome(){
      this.$router.push({name:'home'})
    },
    GoToLink(link){
      window.open(
        link,
        '_blank'
      );
    },
     handleScroll(link) {
       if(link){
         let el = document.getElementById(link)
          if(link && link == "profesionales"){
            this.$router.push({name:"profesionales"});
            return;
          }
          if(link && link == "contactenos" && el){
            el= document.querySelector('body')
            const target = getScrollTarget(el)
           const offset = el.offsetHeight;
           const duration = 800;

           scroll.setVerticalScrollPosition(target, offset, duration)
           return;
          }      
         if(el){
           const target = getScrollTarget(el)
           const offset = el.offsetTop;
           const duration = 800;
           scroll.setVerticalScrollPosition(target, offset, duration)
         }else{
           return;
         }
       }
    },
    reactivateNavbar(){
      let navbar = document.querySelectorAll('#tab-navbar');
      let row = document.getElementById('nav-row');
      row.classList.toggle('changesize_navbar');
      navbar.forEach(tab=>{
        tab.classList.toggle('hidden-navbar');
      })
    },
    ChangeNavbar(){
      this.showEnlaces = false;
      this.$router.push({name:'about'})
      
    },
    hideNavBar(e){
      if(this.showEnlaces){
        let img = document.getElementById('logo-navbar');
        let navbar = document.querySelectorAll('#tab-navbar');
        let row = document.getElementById('nav-row');
      if(e && e.position > 4){
        img.classList.remove('small-logo__disabled')
        img.classList.add('small-logo');
        navbar.forEach(tab =>{
          tab.classList.add('hidden-navbar')
        })
        row.classList.add('changesize_navbar')
        img.addEventListener('click', this.reactivateNavbar)
      }
      if(e && e.position < 3){
        img.classList.remove('small-logo')
        img.classList.add('small-logo__disabled')
        //agregar a click de img
        navbar.forEach(tab => {
          tab.classList.remove('hidden-navbar');
        });
        row.classList.remove('changesize_navbar')
        img.removeEventListener('click',this.reactivateNavbar);
      }
      //e.position para saber donde estoy
      }
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
  /* position: absolute;
  top: 0;
  right: 33.33333%; */
  transform: scale(0.2) translate(0, -58em);
  cursor: pointer;
}
.small-logo img{
  background: #faf099;
  border-radius: 50%;
}
.small-logo__disabled{
  transition: .3s all;
  cursor: normal;
  transform: scale(1) translate(0,0);
}
/* .small-logo:hover{
  background: #bfd1956b;
  border-radius: 50%;
  cursor: pointer;  
} */
.hidden-navbar{
  transition: .5s;
  transform: scale(0) translate(0,-100em);
  pointer-events: none;
}
.ocultarTodo{
  display: none;
}
.changesize_navbar{
  max-height: 0;
}
.disable_cursor{
  pointer-events: none;
}
#tab-navbar span{
  cursor: pointer;
}
#tab-navbar span:hover{
  background: rgba(175, 175, 175, 0.1); 
}

</style>