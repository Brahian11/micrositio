let btn, frm;

window.onload = () => {
  btn = document.getElementById("btn_enviar"); 
  btn.addEventListener("click",enviar);
  animacion();
}

function animacion() {
    gsap.from("#inicio", {opacity: 0, duration: 4});
    gsap.to("#inicio", {rotation: 360, x: 0, duration: 2});
   
}

function enviar(event){
  frm = document.getElementById("formulario");
    if(frm.checkValidity())
    {
      txt = document.getElementById("boletin");
      txt.value = "";
      alert("¡Gracias por visitarnos, esperamos verte denuevo!");
      event.preventDefault();  
    }
  
}