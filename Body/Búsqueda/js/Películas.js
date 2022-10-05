    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
     // abri-ventanas-rmodal-1 
     function abrirmodal1(){ 
         document.getElementById("modal1").style.display="grid"; 
     } 
      
     function cerrarmodal1(){ 
         document.getElementById("modal1").style.display="none"; 
     } 
      
      
     // <!-- javascrip-para-el-elemento-preload --> 
       window.onload = function(){ 
           $("#preloader").fadeOut(); 
           $("body").removeClass("hidden") 
       }
 
 function abrir(){
   document.getElementById("politica").style.display="block";

}

function cerrar(){
   document.getElementById("politica").style.display="none";

}