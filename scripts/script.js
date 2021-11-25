//funcion para el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//declaramos las variables

var side_menu = document.getElementById("menu_side");
var btn_open =document.getElementById("btn_open");
var body = document.getElementById("body");

//evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}

//si el ancho de la pagina es menor de 760px se ocultara el menu

if (window.innerWidth < 760){
    body.classList.add("body_move");
   side_menu.classList.add("menu_side_move");

}


//funcion para hacer renponsive el menu
window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    }
    if(window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    }

 });