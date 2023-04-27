//funcion que me aplica el estil a la opcion seleccionado en el menu y quita la previa seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = ""
    opciones[1].className = ""
    opciones[2].className = ""
    opciones[3].className = ""
    opciones[4].className = ""
    link.className = "seleccionado";

    //desaparecer el menu
    var x = document.getElementById("nav");
    x.className = "";
}
//funcion para el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de la barra
window.onscroll = function() { efectoHabilidades()};

//funcion que aplicaa la animacion de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("py").classList.add("barra-progreso4");
    }

}
