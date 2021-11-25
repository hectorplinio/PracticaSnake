var lienzo=null;
var canvas=null;
function iniciar(){
    canvas=document.getElementById('lienzo');
    lienzo=canvas.getContext('2d');
    lienzo.fillRect(110,110,100,100);
}
window.addEventListener("load", iniciar, false);