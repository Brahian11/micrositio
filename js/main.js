let btn, frm;

window.onload = () => {
  btn = document.getElementById("btn_enviar"); 
  btn.addEventListener("click",enviar);
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