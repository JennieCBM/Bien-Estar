<template>
  <q-layout view="lHh Lpr lFf" class="rounded-borders demi_bold" @scroll="hideNavBar">
      <q-header elevated class="bg-transparent" style="height: 5em">
        <div class="row full-width bg-primary" style="height: 100%">
          <!-- desktop -->
          <q-toolbar v-if="!$q.platform.is.mobile" :class="showEnlaces ? 'justify-end' : 'justify-between'" style="margin-right: 10em; margin-left: 10em">
          <div v-if="!showEnlaces" style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" class="">
            <q-btn flat rounded class="bg-white" color="dark" @click="GoHome" id="backhome">
              Volver a Home
            </q-btn>
          </div>
          <div v-if="!showEnlaces">
              <q-img
                src="../../public/icons/Bien_Estar_PNG-01.png"
                spinner-color="white"
                :ratio="1" 
                width="5em"
                @click="GoHome"
                style="cursor: pointer"
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
          <!-- mobile -->
          <q-toolbar v-if="$q.platform.is.mobile" class="justify-center">
            <!-- only mobile && home -->
            <div v-if="$q.platform.is.mobile && showEnlaces">
              <q-btn 
              flat 
              @click="drawerLeft = !drawerLeft" 
              text-color="dark" 
              round  
              icon="menu"
              class="bg-white"
              style="position: absolute; left: .5em; bottom: 1em"/>
            </div>
            <!-- mobile && external routes -->
            <div v-if="!showEnlaces">
              <q-btn 
              flat 
              round 
              class="bg-white" 
              color="dark" 
              @click="GoHome" 
              id="backhome" 
              icon="fas fa-home"
              style="position: absolute; left: .5em; bottom: 1em"/>
            </div>
            <!-- mobile && all-->
            <div >
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
        <div v-if="showEnlaces && !$q.platform.is.mobile" class="row text-body1 text-dark" id="nav-row" style="display: flex; flex-direction: row; justify-content: space-around;">
            <div class=" text-center text-uppercase q-pt-lg " id="tab-navbar" >
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScroll('conocenos')">Conócenos</q-btn>
            </div>
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" >
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScroll('especialidades')">Especialidades</q-btn>
            </div>
            <div class="col-4 q-pr-xl q-pl-xl" id="logo-navbar" >
              <q-img
                src="../../public/icons/Bien_Estar_PNG-01.png"
                spinner-color="white"
                :ratio="1" 
              />
            </div>
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" >
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScroll('profesionales')">Profesionales</q-btn>
            </div>
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" >
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScroll('contactenos')">Sucursales</q-btn> 
            </div>
        </div>
        
      </q-header> 
      <!-- only mobile && home -->
      <q-drawer
        v-model="drawerLeft"               
        elevated
        class="bg-white text-dark"
        style="max-width: 80%"
      > 
      <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div class=" text-center text-uppercase q-pt-lg demi_bold" id="tab-navbar" >
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScrollNavbar('conocenos')">Conócenos</q-btn>
            </div>

            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar">
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="ChangeNavbar">Quienes Somos</q-btn> 
            </div>
            
            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar" >
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScrollNavbar('especialidades')">Especialidades</q-btn>
            </div>

            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar">
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScrollNavbar('profesionales')">Profesionales</q-btn>
            </div>

            <div class="text-center text-uppercase q-pt-lg" id="tab-navbar">
              <q-btn rounded flat class="bg-white q-pl-md q-pr-md" @click="handleScrollNavbar('contactenos')">Sucursales</q-btn> 
            </div>
            
          </div>
        </q-scroll-area>
      </q-drawer>   
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
      showEnlaces: true,
      drawerLeft: false
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
    handleScrollNavbar(link){
      this.drawerLeft=false;
      this.handleScroll(link);
    },
    reactivateNavbar(){
      let navbar = document.querySelectorAll('#tab-navbar');
      let row = document.getElementById('nav-row');
      if(navbar && row){
        row.classList.toggle('changesize_navbar');
        navbar.forEach(tab=>{
          tab.classList.toggle('hidden-navbar');
        })
      }
      return;
    },
    ChangeNavbar(){
      this.showEnlaces = false;
      this.drawerLeft=false;
      this.$router.push({name:'about'})
      
    },
    hideNavBar(e){
      if(this.showEnlaces){
        let img = document.getElementById('logo-navbar');
        let navbar = document.querySelectorAll('#tab-navbar');
        let row = document.getElementById('nav-row');
        if(img && navbar && row){
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
            navbar.forEach(tab => {
              tab.classList.remove('hidden-navbar');
            });
            row.classList.remove('changesize_navbar')
            img.removeEventListener('click',this.reactivateNavbar);
          }
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
  transition: .1s;
  opacity: 0;
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


</style>