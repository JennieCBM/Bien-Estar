(self["webpackChunkbien_estar"]=self["webpackChunkbien_estar"]||[]).push([[590],{6590:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>Z});var s=t(3673),l=t(913),o=t.n(l);const n={class:"row full-width bg-primary",style:{height:"100%"}},r={class:"row text-body1 text-dark",id:"nav-row",style:{display:"flex","flex-direction":"row","justify-content":"space-around"}},c=(0,s._)("span",{class:"q-pl-md q-pr-md"},"Conócenos",-1),i=[c],d=(0,s._)("span",{class:"q-pl-md q-pr-md"},"Especialidades",-1),m=[d],p={class:"col-4 q-pr-xl q-pl-xl",id:"logo-navbar"},u=(0,s._)("span",{class:"q-pl-md q-pr-md"},"Profesionales",-1),b=[u],g=(0,s._)("span",{class:"q-pl-md q-pr-md"},"Sucursales",-1),v=[g];function h(e,a,t,l,c,d){const u=(0,s.up)("q-icon"),g=(0,s.up)("q-btn"),h=(0,s.up)("q-toolbar"),f=(0,s.up)("q-img"),w=(0,s.up)("q-header"),_=(0,s.up)("router-view"),q=(0,s.up)("q-page-container"),k=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(k,{view:"lHh Lpr lFf",class:"rounded-borders demi_bold",onScroll:d.hideNavBar},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{elevated:"",class:"bg-transparent",style:{height:"5em"}},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(h,{class:"justify-end",style:{"margin-right":"10em"}},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"bg-white q-ma-sm",flat:"",round:"",dense:"",color:"white",onClick:a[0]||(a[0]=e=>d.GoToLink("https://www.facebook.com/Centro-Integral-Bien-Estar-100957679021251"))},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{name:"fab fa-facebook-f",class:"text-dark"})])),_:1}),(0,s.Wm)(g,{class:"bg-white q-ma-sm",flat:"",round:"",dense:"",color:"white",onClick:a[1]||(a[1]=e=>d.GoToLink("https://www.instagram.com/centrointegral.bienestar/"))},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{name:"fab fa-instagram",class:"text-dark"})])),_:1}),(0,s.Wm)(g,{class:"bg-white q-ma-sm",flat:"",round:"",dense:"",color:"white",onClick:a[2]||(a[2]=e=>d.GoToLink("https://api.whatsapp.com/send?phone=56973752280&text=%C2%A1Hola!%20"))},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{name:"fab fa-whatsapp",class:"text-dark"})])),_:1})])),_:1})]),(0,s._)("div",r,[(0,s._)("div",{class:" text-center text-uppercase q-pt-lg",id:"tab-navbar",onClick:a[3]||(a[3]=e=>d.handleScroll("conocenos"))},i),(0,s._)("div",{class:"text-center text-uppercase q-pt-lg",id:"tab-navbar",onClick:a[4]||(a[4]=e=>d.handleScroll("especialidades"))},m),(0,s._)("div",p,[(0,s.Wm)(f,{src:o(),"spinner-color":"white",ratio:1})]),(0,s._)("div",{class:"text-center text-uppercase q-pt-lg",id:"tab-navbar",onClick:a[5]||(a[5]=e=>d.handleScroll("profesionales"))},b),(0,s._)("div",{class:"text-center text-uppercase q-pt-lg",id:"tab-navbar",onClick:a[6]||(a[6]=e=>d.handleScroll("sucursales"))},v)])])),_:1}),(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(_,{onAboutLayout:d.ChangeNavbar},null,8,["onAboutLayout"])])),_:1})])),_:1},8,["onScroll"])}var f=t(8400);const{getScrollTarget:w,setScrollPosition:_}=f.ZP,q={name:"MainLayout",data(){return{tab:"conocenos"}},components:{},mounted(){},methods:{GoToLink(e){window.open(e,"_blank")},handleScroll(e){if(e){const a=document.getElementById(e);if(console.log(a),!a)return;{const e=w(a);console.log("target",e);const t=a.offsetTop-a.scrollHeight;console.log("offset",t);const s=800;f.ZP.setVerticalScrollPosition(e,t,s)}}},reactivateNavbar(){let e=document.querySelectorAll("#tab-navbar"),a=document.getElementById("nav-row");a.classList.toggle("changesize_navbar"),e.forEach((e=>{e.classList.toggle("hidden-navbar")}))},ChangeNavbar(){let e=document.querySelector("#nav-row");e.style.visibility="hidden"},hideNavBar(e){let a=document.getElementById("logo-navbar"),t=document.querySelectorAll("#tab-navbar"),s=document.getElementById("nav-row");e&&e.position>4&&(a.classList.remove("small-logo__disabled"),a.classList.add("small-logo"),t.forEach((e=>{e.classList.add("hidden-navbar")})),s.classList.add("changesize_navbar"),a.addEventListener("click",this.reactivateNavbar)),e&&e.position<3&&(a.classList.remove("small-logo"),a.classList.add("small-logo__disabled"),t.forEach((e=>{e.classList.remove("hidden-navbar")})),s.classList.remove("changesize_navbar"),a.removeEventListener("click",this.reactivateNavbar))}}};var k=t(9214),y=t(3812),L=t(9570),x=t(2165),C=t(4554),S=t(4152),E=t(2652),W=t(7518),B=t.n(W);q.render=h;const Z=q;B()(q,"components",{QLayout:k.Z,QHeader:y.Z,QToolbar:L.Z,QBtn:x.Z,QIcon:C.Z,QImg:S.Z,QPageContainer:E.Z})},913:(e,a,t)=>{e.exports=t.p+"img/Bien_Estar_PNG-01.162db20d.png"}}]);